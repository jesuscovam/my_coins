import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dtos/auth.credentials.dto";
import { BadRequestException } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>{
        const { username, password } = authCredentialsDto
        const user = new User()
        user.username = username
        user.password = password
        try {
            await user.save()
        } catch (error) {
            throw new BadRequestException(
                `${username} is already taken, try a new username`)
        } 
    }
}