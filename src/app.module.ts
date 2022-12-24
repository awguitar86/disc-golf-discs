import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { DiscsModule } from './discs/discs.module';
import { ManufacturersModule } from './manufacturers/manufacturers.module';
import { PlasticsModule } from './plastics/plastics.module';

@Module({
  imports: [PrismaModule, DiscsModule, ManufacturersModule, PlasticsModule],
})
export class AppModule {}
