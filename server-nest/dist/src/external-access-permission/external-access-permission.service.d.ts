import { Repository } from 'typeorm';
import { ExternalAccessPermission } from './external-access-permission.entity';
import { CreateExternalAccessPermissionDto } from './dto/create-external-access-permission.dto';
import { UpdateExternalAccessPermissionDto } from './dto/update-external-access-permission.dto';
export declare class ExternalAccessPermissionService {
    private readonly repo;
    constructor(repo: Repository<ExternalAccessPermission>);
    create(dto: CreateExternalAccessPermissionDto): Promise<ExternalAccessPermission>;
    findAll(): Promise<ExternalAccessPermission[]>;
    findByTokenId(tokenId: number): Promise<ExternalAccessPermission[]>;
    findOne(id: number): Promise<ExternalAccessPermission | null>;
    update(id: number, dto: UpdateExternalAccessPermissionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    findByProjectId(projectId: number): Promise<ExternalAccessPermission[]>;
    findByCriticalDateId(criticalDateId: number): Promise<ExternalAccessPermission[]>;
}
