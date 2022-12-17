import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Disc } from '@prisma/client';

@Injectable()
export class DiscsService {
  constructor(private prisma: PrismaService) {}

  async createDisc(discData): Promise<Disc> {
    const result = await this.prisma.disc.create({ data: discData });
    return result;
  }

  async findAllDiscs() {
    return await this.prisma.disc.findMany();
  }
}
