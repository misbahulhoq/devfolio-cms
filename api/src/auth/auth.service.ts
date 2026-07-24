import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';

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
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, username, password } = registerDto;

    if (RESERVED_USERNAMES.includes(username.toLowerCase())) {
      throw new ConflictException('Username is reserved.');
    }

    const existingUserByEmail = await this.usersService.findOne({
      email: email.toLowerCase(),
    });
    if (existingUserByEmail) {
      throw new ConflictException('Email already registered.');
    }

    const existingUserByUsername = await this.usersService.findOne({
      username: username.toLowerCase(),
    });
    if (existingUserByUsername) {
      throw new ConflictException('Username already taken.');
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await this.usersService.createUser({
      email: email.toLowerCase(),
      username: username.toLowerCase(),
      passwordHash,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordHash: _, ...result } = user;
    return result;
  }
}
