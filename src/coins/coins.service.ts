import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoinRepository } from './coins.repository';
import { GetCoinsWithFilterDto } from './dtos/getCoinsWithFilter.dto';
import { Coin } from './coins.entity';
import { CreateCoinDto } from './dtos/createCoinDto';

@Injectable()
export class CoinsService {
    constructor(
        @InjectRepository(CoinRepository)
        private coinRepository: CoinRepository){}
    
    getCoins(getCoinsWithFilter: GetCoinsWithFilterDto): Promise<Coin []>{
        return this.coinRepository.getCoins(getCoinsWithFilter)
    }

    createCoin(createCoinDto: CreateCoinDto): Promise<Coin> {
        return this.coinRepository.createCoin(createCoinDto)
    }
}
