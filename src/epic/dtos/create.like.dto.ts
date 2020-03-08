import { LikeType, Reservation, Time } from "../like.enum";
import { IsString, IsUrl, MaxLength, MinLength, IsNotEmpty } from "class-validator";

export class CreateLikeDto{
    @MaxLength(20)
    @MinLength(4)
    @IsString()
    name: string

    @IsUrl()
    image: string

    @IsUrl()
    map: string

    @IsNotEmpty()
    type: LikeType

    @IsNotEmpty()
    reservation: Reservation

    @IsNotEmpty()
    time: Time
}