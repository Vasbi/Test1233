// DTO for creating an external access permission
import { IsInt, IsOptional, IsBoolean } from 'class-validator';

export class CreateExternalAccessPermissionDto {
  @IsInt()
  tokenId: number;

  @IsOptional()
  @IsInt()
  criticalDateId?: number;

  @IsOptional()
  @IsInt()
  projectId?: number;

  @IsOptional()
  @IsBoolean()
  canView?: boolean = true;

  @IsOptional()
  @IsBoolean()
  canEdit?: boolean = false;
}
