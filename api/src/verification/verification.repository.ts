import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  VerificationTokenCreateInput,
  VerificationTokenWhereUniqueInput,
} from '../generated/prisma/models';

@Injectable()
export class VerificationRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: VerificationTokenCreateInput) {
    await this.prisma.verificationToken.create({
      data,
    });
  }
  async findOne(tokenHash: string) {
    return await this.prisma.verificationToken.findUnique({
      where: {
        tokenHash,
      },
      include: {
        user: {
          omit: {
            passwordHash: true,
          },
        },
      },
    });
  }

  async delete(tokenHash: string) {
    return await this.prisma.verificationToken.delete({
      where: {
        tokenHash,
        OR: [
          {
            expiresAt: {
              lt: new Date(),
            },
          },
          {
            user: {
              isEmailVerified: true,
            },
          },
        ],
      },
    });
  }

  async deleteMany() {
    return await this.prisma.verificationToken.deleteMany({
      where: {
        expiresAt: {
          lt: new Date(),
        },
      },
    });
  }

  async resetOne(userId: VerificationTokenWhereUniqueInput) {
    return await this.prisma.verificationToken.update({
      where: userId,
      data: {
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });
  }
}
