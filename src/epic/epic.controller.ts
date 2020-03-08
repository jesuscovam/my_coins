import { Controller, Post, Body } from '@nestjs/common';
import { EpicService } from './epic.service';
import { Like } from './likes.entity';
import { CreateLikeDto } from './dtos/create.like.dto';

@Controller('epic')
export class EpicController {
    constructor(private epicServices: EpicService){}

    @Post()
    createLike(@Body() createLikeDto: CreateLikeDto): Promise<Like>{
        return this.epicServices.createLike(createLikeDto)
    }
}
