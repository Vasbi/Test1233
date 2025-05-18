import { ExternalAccessPermissionService } from './external-access-permission.service';
import { CreateExternalAccessPermissionDto } from './dto/create-external-access-permission.dto';
import { UpdateExternalAccessPermissionDto } from './dto/update-external-access-permission.dto';
export declare class ExternalAccessPermissionController {
    private readonly service;
    constructor(service: ExternalAccessPermissionService);
    create(dto: CreateExternalAccessPermissionDto): Promise<import("./external-access-permission.entity").ExternalAccessPermission>;
    findAll(tokenId?: number, projectId?: number, criticalDateId?: number): Promise<import("./external-access-permission.entity").ExternalAccessPermission[]>;
    findOne(id: string): Promise<import("./external-access-permission.entity").ExternalAccessPermission | null>;
    update(id: string, dto: UpdateExternalAccessPermissionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    batchCreate(dtos: CreateExternalAccessPermissionDto[]): Promise<import("./external-access-permission.entity").ExternalAccessPermission[]>;
}
