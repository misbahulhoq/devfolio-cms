import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { type EmailVerifyDto as IEmailVerifyDto } from '@devfolio-cms/dto';
import {
  USERNAME_PATTERN,
  PASSWORD_PATTERN,
  type RegisterDto as IRegisterDto,
} from '@devfolio-cms/dto';

export class RegisterDto implements IRegisterDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(100, {
    message: 'Email cannot exceed 100 characters.',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  @Matches(USERNAME_PATTERN, {
    message:
      'Username must be 3-20 characters, lowercase alphanumeric and hyphens only, cannot start or end with a hyphen, and no consecutive hyphens.',
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(72)
  @Matches(PASSWORD_PATTERN, {
    message:
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.',
  })
  password: string;
}

export class EmailVerifyDto implements IEmailVerifyDto {
  @IsString()
  token: string;
}

export class ResendVerificationEmailDto {
  @IsEmail()
  email: string;
}
