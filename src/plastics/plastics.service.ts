import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Plastic } from '@prisma/client';

@Injectable()
export class PlasticsService {
  constructor(private prisma: PrismaService) {}

  async createPlastic(plasticData): Promise<Plastic> {
    const result = await this.prisma.plastic.create({
      data: plasticData,
    });
    return result;
  }

  async findAllPlastics() {
    return await this.prisma.plastic.findMany();
  }
}
