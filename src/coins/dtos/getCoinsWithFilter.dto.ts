import { CoinStatus } from "../coinStatus.enum";

export class GetCoinsWithFilterDto{
    search : string;
    status: CoinStatus;
}