import { ExternalAccessTokenService } from './external-access-token.service';
import { CreateExternalAccessTokenDto } from './dto/create-external-access-token.dto';
import { UpdateExternalAccessTokenDto } from './dto/update-external-access-token.dto';
export declare class ExternalAccessTokenController {
    private readonly service;
    constructor(service: ExternalAccessTokenService);
    create(dto: CreateExternalAccessTokenDto): Promise<import("./external-access-token.entity").ExternalAccessToken>;
    findAll(): Promise<import("./external-access-token.entity").ExternalAccessToken[]>;
    findOne(id: string): Promise<import("./external-access-token.entity").ExternalAccessToken | null>;
    update(id: string, dto: UpdateExternalAccessTokenDto): Promise<import("./external-access-token.entity").ExternalAccessToken | null>;
    remove(id: string): Promise<boolean>;
}
