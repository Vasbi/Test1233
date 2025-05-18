import { Repository } from 'typeorm';
import { ExternalAccessToken } from './external-access-token.entity';
import { CreateExternalAccessTokenDto } from './dto/create-external-access-token.dto';
import { UpdateExternalAccessTokenDto } from './dto/update-external-access-token.dto';
export declare class ExternalAccessTokenService {
    private readonly repo;
    constructor(repo: Repository<ExternalAccessToken>);
    create(dto: CreateExternalAccessTokenDto): Promise<ExternalAccessToken>;
    findAll(): Promise<ExternalAccessToken[]>;
    findOne(id: number): Promise<ExternalAccessToken | null>;
    update(id: number, dto: UpdateExternalAccessTokenDto): Promise<ExternalAccessToken | null>;
    remove(id: number): Promise<boolean>;
}
