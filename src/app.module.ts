import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { DiscsModule } from './discs/discs.module';

@Module({
  imports: [PrismaModule, DiscsModule],
})
export class AppModule {}
