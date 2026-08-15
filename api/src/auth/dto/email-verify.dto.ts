import { type EmailVerifyDto as IEmailVerifyDto } from '@devfolio-cms/dto';
import { IsString } from 'class-validator';

export class EmailVerifyDto implements IEmailVerifyDto {
  @IsString()
  token: string;
}
