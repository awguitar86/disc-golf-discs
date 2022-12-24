import { Controller, Post, Body, Get } from '@nestjs/common';
import { Plastic } from '@prisma/client';
import { PlasticsService } from './plastics.service';
import { PlasticDto } from './plastics.dto';

@Controller('plastics')
export class PlasticsController {
  constructor(private readonly plasticsService: PlasticsService) {}

  @Post()
  async createManufacturer(@Body() plasticData: PlasticDto): Promise<Plastic> {
    return this.plasticsService.createPlastic(plasticData);
  }

  @Get()
  async findAllPlastics() {
    return this.plasticsService.findAllPlastics();
  }
}
