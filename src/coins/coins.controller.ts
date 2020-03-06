import { Controller, Query, ValidationPipe, Get, Post, Body } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { GetCoinsWithFilterDto } from './dtos/getCoinsWithFilter.dto';
import { Coin } from './coins.entity';
import { CreateCoinDto } from './dtos/createCoinDto';

@Controller('coins')
export class CoinsController {
    constructor(private coinServices: CoinsService){}

    @Get()
    getCoins(
        @Query(ValidationPipe) getCoinsWithFilter: GetCoinsWithFilterDto):
        Promise <Coin []>{
            return this.coinServices.getCoins(getCoinsWithFilter)
        }

    @Post()
    createCoin(@Body() createCoindto: CreateCoinDto): Promise <Coin>{
        return this.coinServices.createCoin(createCoindto)
    }
}
