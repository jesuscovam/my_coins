import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoinRepository } from './coins.repository';
import { GetCoinsWithFilterDto } from './dtos/getCoinsWithFilter.dto';
import { Coin } from './coins.entity';
import { CreateCoinDto } from './dtos/createCoinDto';
import { CoinStatus } from './coinStatus.enum';

@Injectable()
export class CoinsService {
    constructor(
        @InjectRepository(CoinRepository)
        private coinRepository: CoinRepository){}
    
    getCoins(getCoinsWithFilter: GetCoinsWithFilterDto): Promise<Coin []>{
        return this.coinRepository.getCoins(getCoinsWithFilter)
    }

    async getCoinById(id: number): Promise<Coin>{
        const found = await this.coinRepository.findOne(id)
        if(!found){
            throw new BadRequestException(`${id} is an invalid id`)
        } else {
            return found
        }
    }

    createCoin(createCoinDto: CreateCoinDto): Promise<Coin> {
        return this.coinRepository.createCoin(createCoinDto)
    }

    async deleteCoin(id: number): Promise<void>{
        const found = await this.getCoinById(id);
        await this.coinRepository.delete(found)
    }

    async updateCoin(id: number, status: CoinStatus): Promise<Coin>{
        const coin = await this.getCoinById(id);
        coin.state = status
        await coin.save()
        return coin
    }
}
