import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EmailService } from '../email/email.service';
import { EmailTemplateService } from '../email/email-template.service';
import { VerificationModule } from '../verification/verification.module';

@Module({
  imports: [
    UsersModule,
    VerificationModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: Number(
              configService.get<string>('JWT_ACCESS_EXPIRES_IN'),
            ),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, EmailService, EmailTemplateService],
  controllers: [AuthController],
})
export class AuthModule {}
