import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { LikeType, Reservation, Time } from "./like.enum";

@Entity()
export class Like extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    image: string

    @Column()
    map: string

    @Column()
    type: LikeType

    @Column()
    reservation: Reservation

    @Column()
    time: Time
}