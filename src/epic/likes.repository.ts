import { Repository, EntityRepository } from "typeorm";
import { Like } from "./likes.entity";
import { CreateLikeDto } from "./dtos/create.like.dto";

@EntityRepository(Like)
export class LikesRepository extends Repository<Like>{

    async createLike(createLikeDto: CreateLikeDto): Promise<Like>{
        const { name, image, map, type, reservation, time} = createLikeDto
        const like = new Like()
        like.name = name
        like.image = image
        like.map = map
        like.type = type
        like.reservation = reservation
        like.time = time
        await like.save()
        return like

    }
}