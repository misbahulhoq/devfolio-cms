import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from '../users/users.repository';
import { RegisterDto } from './dto/register.dto';
import { EmailService } from '../email/email.service';
import { EmailTemplateService } from '../email/email-template.service';
import crypto from 'crypto';
import { clientUrl } from '../lib/client-info';
import { EmailVerifyDto } from './dto/email-verify.dto';

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

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
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
    const tokenHash = crypto
      .createHash('sha256')
      .update(verificationToken)
      .digest('hex');
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
  }
}
