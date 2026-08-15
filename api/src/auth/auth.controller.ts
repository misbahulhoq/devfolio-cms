import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { EmailVerifyDto } from './dto/email-verify.dto';

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
    // await this.authService.
  }
}
