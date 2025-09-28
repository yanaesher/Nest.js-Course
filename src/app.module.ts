import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ActorModule } from './actor/actor.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    ActorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
