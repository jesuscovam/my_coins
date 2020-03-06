import { Controller, Query, ValidationPipe, Get, Post, Body, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { GetCoinsWithFilterDto } from './dtos/getCoinsWithFilter.dto';
import { Coin } from './coins.entity';
import { CreateCoinDto } from './dtos/createCoinDto';
import { CoinStatus } from './coinStatus.enum';
import { CoinStatusValidatorPipe } from './pipes/coin.status.pipe.validator';

@Controller('coins')
export class CoinsController {
    constructor(private coinServices: CoinsService){}

    @Get()
    getCoins(
        @Query(ValidationPipe) getCoinsWithFilter: GetCoinsWithFilterDto):
        Promise <Coin []>{
            return this.coinServices.getCoins(getCoinsWithFilter)
        }
    
    @Get('/:id')
    getCoinById(@Param('id', ParseIntPipe) id: number): Promise<Coin>{
        return this.coinServices.getCoinById(id)
    }

    @Post()
    
    createCoin(@Body(ValidationPipe) createCoindto: CreateCoinDto): Promise <Coin>{
        return this.coinServices.createCoin(createCoindto)
    }

    @Delete('/:id')
    deleteCoin(@Param('id', ParseIntPipe) id: number): Promise <void>{
        return this.coinServices.deleteCoin(id)
    }

    @Patch('/:id')
    updateCoin(
        @Param('/:id', ParseIntPipe) id: number,
        @Body('status', CoinStatusValidatorPipe) status: CoinStatus): Promise <Coin>{
            return this.coinServices.updateCoin(id, status)
        }
}
