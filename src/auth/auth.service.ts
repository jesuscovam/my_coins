import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dtos/auth.credentials.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){}

    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>{
        return this.userRepository.signUp(authCredentialsDto)
    }

    async validation(authCredentialsDto: AuthCredentialsDto){
        const username = await this.userRepository.validateCredentials(authCredentialsDto)
        
        if(Object.is(username, null)){
            throw new UnauthorizedException('Invalid credentials')
        }
    }
}
