import {
  IsString,
  IsEmail,
  IsOptional,
  IsBoolean,
  IsNumber,
} from 'class-validator';

export class CreateExternalAccessTokenDto {
  @IsString()
  token: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  organization?: string;

  @IsOptional()
  @IsString()
  purpose?: string;

  @IsString()
  accessType: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsString()
  expiresAt: string;

  @IsOptional()
  @IsNumber()
  createdBy?: number;

  @IsOptional()
  @IsString()
  lastUsedAt?: string;

  @IsOptional()
  @IsString()
  ipAddress?: string;

  @IsOptional()
  @IsNumber()
  accessCount?: number;
}
