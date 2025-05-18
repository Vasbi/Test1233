// DTO for updating an external access permission
import { PartialType } from '@nestjs/mapped-types';
import { CreateExternalAccessPermissionDto } from './create-external-access-permission.dto';

export class UpdateExternalAccessPermissionDto extends PartialType(CreateExternalAccessPermissionDto) {}
