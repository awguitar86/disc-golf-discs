import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Manufacturer } from '@prisma/client';

@Injectable()
export class ManufacturerService {
  constructor(private prisma: PrismaService) {}

  async createManufacturer(manufacturerData): Promise<Manufacturer> {
    const result = await this.prisma.manufacturer.create({
      data: manufacturerData,
    });
    return result;
  }

  async findAllManufacturers() {
    return await this.prisma.manufacturer.findMany();
  }

  async findOneById(id: string) {
    return await this.prisma.manufacturer.findUnique({
      where: { id },
      include: {
        discs: {
          where: {
            manufacturerId: id,
          },
        },
        plastics: {
          where: {
            manufacturerId: id,
          },
        },
      },
    });
  }
}
