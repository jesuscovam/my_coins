import { Repository, EntityRepository } from "typeorm";
import { Coin } from "./coins.entity";
import { GetCoinsWithFilterDto } from "./dtos/getCoinsWithFilter.dto";
import { CreateCoinDto } from "./dtos/createCoinDto";
import { CoinStatus } from "./coinStatus.enum";

@EntityRepository(Coin)
export class CoinRepository extends Repository<Coin>{

    async getCoins(getCoinsWithFilter: GetCoinsWithFilterDto): Promise <Coin []>{
        const { search, status }= getCoinsWithFilter
        const query = await this.createQueryBuilder("coin")
        
        if(search){
            query.andWhere("(coin.title LIKE :search OR coin.description LIKE :search)", 
            {search: `%${search}%`})
        }
        const coins = await query.getMany()
        return coins
    }

    async createCoin(createCoinDto: CreateCoinDto): Promise<Coin> {
        const { title, description } = createCoinDto
        const coin = new Coin()
        coin.title = title
        coin.description = description
        coin.state = CoinStatus.OPEN
        await coin.save()
        return coin
    }
}   
