import { IsString } from "class-validator";

export class CreateCoinDto {
    @IsString()
    title: string;

    @IsString()
    description: string;
}