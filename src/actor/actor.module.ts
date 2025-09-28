import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ActorController],
  providers: [ActorService],
})
export class ActorModule {}
