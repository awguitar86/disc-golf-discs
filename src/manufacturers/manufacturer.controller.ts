import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { Manufacturer } from '@prisma/client';
import { ManufacturerService } from './manufacturers.service';
import { ManufacturerDto } from './manufacturers.dto';

@Controller('manufacturers')
export class ManufacturersController {
  constructor(private readonly manufacturersService: ManufacturerService) {}

  @Post()
  async createManufacturer(
    @Body() manufacturerData: ManufacturerDto,
  ): Promise<Manufacturer> {
    return this.manufacturersService.createManufacturer(manufacturerData);
  }

  @Get()
  async findAllManufacturers() {
    return this.manufacturersService.findAllManufacturers();
  }

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    return await this.manufacturersService.findOneById(id);
  }
}
