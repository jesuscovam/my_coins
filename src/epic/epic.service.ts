import { Injectable } from '@nestjs/common';
import { LikesRepository } from './likes.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLikeDto } from './dtos/create.like.dto';
import { Like } from './likes.entity';

@Injectable()
export class EpicService {
    constructor(
        @InjectRepository(LikesRepository)
        private likesRepository: LikesRepository){}

        createLike(createLikeDto: CreateLikeDto): Promise<Like>{
            return this.likesRepository.createLike(createLikeDto)
        }
}
