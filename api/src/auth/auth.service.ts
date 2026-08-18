import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from '../users/users.repository';
import { RegisterDto, ResendVerificationEmailDto } from './auth.dto';
import { EmailService } from '../email/email.service';
import { EmailTemplateService } from '../email/email-template.service';
import crypto from 'crypto';
import { clientUrl } from '../lib/client-info';
import { EmailVerifyDto } from './auth.dto';
import { VerificationRepository } from '../verification/verification.repository';

// As per requirements doc section 12.3
const RESERVED_USERNAMES = [
  'admin',
  'api',
  'www',
  'mail',
  'support',
  'help',
  'about',
  'contact',
  'login',
  'register',
  'dashboard',
  'me',
  'public',
  'static',
  'assets',
  'blog',
  'docs',
  'status',
];

function generateVerificationToken() {
  return crypto.randomBytes(32).toString('hex');
}
function encryptToken(token: string) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
    private verificationRepository: VerificationRepository,
    private emailService: EmailService,
    private emailTemplateService: EmailTemplateService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, username, password } = registerDto;

    if (RESERVED_USERNAMES.includes(username.toLowerCase())) {
      throw new ConflictException('Username is reserved.');
    }

    const existingUserByEmail = await this.usersRepository.findOne({
      email: email.toLowerCase(),
    });
    if (existingUserByEmail) {
      throw new ConflictException('Email already registered.');
    }

    const existingUserByUsername = await this.usersRepository.findOne({
      username: username.toLowerCase(),
    });
    if (existingUserByUsername) {
      throw new ConflictException('Username already taken.');
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const verificationToken = crypto.randomBytes(32).toString('hex');
    const tokenHash = encryptToken(verificationToken);
    const expiryHours = 24;

    const user = await this.usersRepository.createUser({
      email: email.toLowerCase(),
      username: username.toLowerCase(),
      passwordHash,
      //
      tokenHash,
      expiresAt: new Date(Date.now() + expiryHours * 60 * 60 * 1000),
    });

    const htmlTemplate =
      await this.emailTemplateService.renderConfirmationEmail({
        userName: username,
        confirmationLink:
          clientUrl + '/verify-email?token=' + verificationToken,
        expiryHours,
        currentYear: new Date().getFullYear(),
      });

    await this.emailService.sendEmail({
      to: email,
      subject: 'Welcome to DevFolio CMS',
      html: htmlTemplate,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordHash: _, ...result } = user;
    return result;
  }

  async verifyEmail(emailVerifyDto: EmailVerifyDto) {
    const { token } = emailVerifyDto;
    const tokenHash = encryptToken(token);
    const data = await this.verificationRepository.findOne(tokenHash);

    if (!data) {
      throw new UnauthorizedException('Invalid or expired token.');
    }
    if (data.expiresAt < new Date()) {
      throw new UnauthorizedException('Invalid or expired token.');
    }

    const { userId, user } = data;

    if (user.isEmailVerified) {
      throw new ConflictException('Email already verified.');
    }

    await this.usersRepository.updateUser({
      where: {
        id: userId,
      },
      data: {
        isEmailVerified: true,
      },
    });

    await this.verificationRepository.delete(tokenHash);
    return {
      message: 'Email verified successfully.',
    };
  }

  async resendVerificationEmail(emailDto: ResendVerificationEmailDto) {
    const { email } = emailDto;
    const user = await this.usersRepository.findOne({
      email: email.toLowerCase(),
    });
    if (!user) {
      throw new BadRequestException('User not found.');
    }
    if (user.isEmailVerified) {
      throw new BadRequestException('Email already verified.');
    }

    const verificationToken = generateVerificationToken();
    const tokenHash = encryptToken(verificationToken);
    const expiryHours = 24;

    await this.verificationRepository.create({
      tokenHash,
      expiresAt: new Date(Date.now() + expiryHours * 60 * 60 * 1000),
      user: {
        connect: {
          id: user.id,
        },
      },
    });

    const htmlTemplate =
      await this.emailTemplateService.renderConfirmationEmail({
        userName: user.username,
        confirmationLink:
          clientUrl + '/verify-email?token=' + verificationToken,
        expiryHours,
        currentYear: new Date().getFullYear(),
      });

    await this.emailService.sendEmail({
      to: email,
      subject: 'Welcome to DevFolio CMS',
      html: htmlTemplate,
    });
  }
}
