import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VerificationRepository {
  constructor(private prisma: PrismaService) {}

  async findOne(tokenHash: string) {
    return await this.prisma.verificationToken.findUnique({
      where: {
        tokenHash,
      },
      include: { user: true },
    });
  }
}
