import { Controller, Post, Body, Get } from '@nestjs/common';
import { Disc } from '@prisma/client';
import { DiscsService } from './discs.service';
import { DiscsDto } from './discs.dto';

@Controller('discs')
export class DiscsController {
  constructor(private readonly discsService: DiscsService) {}

  @Post()
  async createDisc(@Body() discData: DiscsDto): Promise<Disc> {
    return this.discsService.createDisc(discData);
  }

  @Get()
  async findAllDiscs() {
    return await this.discsService.findAllDiscs();
  }
}
