import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, ResendVerificationEmailDto } from './auth.dto';
import { EmailVerifyDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const user = await this.authService.register(registerDto);
    return {
      success: true,
      data: user,
    };
  }
  @Post('verify-email')
  async verifyEmail(@Body() emailVerifyDto: EmailVerifyDto) {
    await this.authService.verifyEmail(emailVerifyDto);
  }

  @Post('resend-verification-email')
  async resendVerificationEmail(@Body() emailDto: ResendVerificationEmailDto) {
    await this.authService.resendVerificationEmail(emailDto);
  }
}
