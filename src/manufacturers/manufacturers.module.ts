import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { ManufacturerService } from './manufacturers.service';
import { ManufacturersController } from './manufacturer.controller';

@Module({
  controllers: [ManufacturersController],
  providers: [ManufacturerService, PrismaService],
  imports: [PrismaModule],
})
export class ManufacturersModule {}
