/* eslint-disable @typescript-eslint/require-await */
import { ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';

const registration = {
  email: 'Jane.Doe@Example.com',
  username: 'Jane-Doe',
  password: 'StrongPass1',
};

const savedUser = {
  id: 'user-1',
  email: 'jane.doe@example.com',
  username: 'jane-doe',
  passwordHash: 'hashed-password',
  createdAt: new Date('2026-01-01T00:00:00.000Z'),
  updatedAt: new Date('2026-01-01T00:00:00.000Z'),
};

function createService() {
  const usersRepository = {
    findOne: jest.fn(async () => null),
    createUser: jest.fn(async () => savedUser),
  };
  const emailService = {
    sendEmail: jest.fn(async () => undefined),
  };
  const emailTemplateService = {
    renderConfirmationEmail: jest.fn(async () => '<p>Welcome</p>'),
  };

  const service = new AuthService(
    usersRepository as never,
    emailService as never,
    emailTemplateService as never,
  );

  return { service, usersRepository, emailService, emailTemplateService };
}

describe('AuthService.register', () => {
  it('rejects reserved usernames without querying the database', async () => {
    const { service, usersRepository } = createService();

    await expect(
      service.register({ ...registration, username: 'AdMiN' }),
    ).rejects.toThrow(new ConflictException('Username is reserved.'));

    expect(usersRepository.findOne).not.toHaveBeenCalled();
    expect(usersRepository.createUser).not.toHaveBeenCalled();
  });

  it('rejects an email that is already registered', async () => {
    const { service, usersRepository } = createService();
    usersRepository.findOne.mockResolvedValueOnce(savedUser as never);

    await expect(service.register(registration)).rejects.toThrow(
      new ConflictException('Email already registered.'),
    );

    expect(usersRepository.findOne).toHaveBeenCalledWith({
      email: 'jane.doe@example.com',
    });
    expect(usersRepository.createUser).not.toHaveBeenCalled();
  });

  it('rejects a username that is already taken', async () => {
    const { service, usersRepository } = createService();
    usersRepository.findOne
      .mockResolvedValueOnce(null)
      .mockResolvedValueOnce(savedUser as never);

    await expect(service.register(registration)).rejects.toThrow(
      new ConflictException('Username already taken.'),
    );

    expect(usersRepository.findOne).toHaveBeenNthCalledWith(1, {
      email: 'jane.doe@example.com',
    });
    expect(usersRepository.findOne).toHaveBeenNthCalledWith(2, {
      username: 'jane-doe',
    });
    expect(usersRepository.createUser).not.toHaveBeenCalled();
  });

  it('creates a normalized user, emails them, and never returns the password hash', async () => {
    const { service, usersRepository, emailService, emailTemplateService } =
      createService();

    const result = await service.register(registration);

    expect(usersRepository.createUser).toHaveBeenCalledTimes(1);
    // @ts-expect-error (test cases are not properly typed, so we are not checking type here)
    const [createInput] = usersRepository.createUser.mock.calls[0];
    expect(createInput).toMatchObject({
      email: 'jane.doe@example.com',
      username: 'jane-doe',
    });
    expect(
      // @ts-expect-error (test cases are not properly typed, so we are not checking the type here)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      await bcrypt.compare(registration.password, createInput?.passwordHash),
    ).toBe(true);
    expect(emailTemplateService.renderConfirmationEmail).toHaveBeenCalledWith({
      userName: registration.username,
      confirmationLink: expect.stringMatching(/^https?:\/\/[^\s]+$/) as string,
      expiryHours: 24,
      currentYear: new Date().getFullYear(),
    });
    expect(emailService.sendEmail).toHaveBeenCalledWith({
      to: registration.email,
      subject: 'Welcome to DevFolio CMS',
      html: '<p>Welcome</p>',
    });
    expect(result).toEqual({
      id: savedUser.id,
      email: savedUser.email,
      username: savedUser.username,
      createdAt: savedUser.createdAt,
      updatedAt: savedUser.updatedAt,
    });
    expect(result).not.toHaveProperty('passwordHash');
  });
});
