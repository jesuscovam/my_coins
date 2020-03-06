import { ValidationPipe, BadRequestException } from "@nestjs/common";
import { CoinStatus } from "../coinStatus.enum";

export class CoinStatusValidatorPipe extends ValidationPipe{
    readonly allowedStatus = [...Object.values(CoinStatus)]

    transform(value: any){
        if(!this.isValid(value)){
            throw new BadRequestException(`${value} is an invalid status`)
        } else {
            return value
        }
    }

    private isValid(value: any){
        const idx = this.allowedStatus.indexOf(value)
        return idx !== -1
    }
}