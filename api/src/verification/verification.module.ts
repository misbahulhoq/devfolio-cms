import { Module } from '@nestjs/common';
import { VerificationRepository } from './verification.repository';

@Module({
  providers: [VerificationRepository],
  exports: [VerificationRepository],
})
export class VerificationModule {}
