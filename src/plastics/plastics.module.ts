import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { PlasticsService } from './plastics.service';
import { PlasticsController } from './plastics.controller';

@Module({
  controllers: [PlasticsController],
  providers: [PlasticsService, PrismaService],
  imports: [PrismaModule],
})
export class PlasticsModule {}
