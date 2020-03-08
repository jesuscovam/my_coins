import { Module } from '@nestjs/common';
import { EpicController } from './epic.controller';
import { EpicService } from './epic.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikesRepository } from './likes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LikesRepository])],
  controllers: [EpicController],
  providers: [EpicService]
})
export class EpicModule {}
