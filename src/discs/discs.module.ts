import { Module } from '@nestjs/common';
import { DiscsService } from './discs.service';
import { DiscsController } from './discs.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [DiscsController],
  providers: [DiscsService, PrismaService],
  imports: [PrismaModule],
})
export class DiscsModule {}
