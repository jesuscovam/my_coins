import { BaseEntity, PrimaryGeneratedColumn, Entity, Column, Unique } from "typeorm";
import * as bcrypt from 'bcrypt'

@Entity()
@Unique(['username'])
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string

    async validatePassword(password): Promise<boolean>{
        const match = await bcrypt.hash(password, this.salt)
        return match === this.password
    }
}