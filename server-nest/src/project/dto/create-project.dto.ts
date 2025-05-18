import { IsString, IsOptional } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  name: string;

  @IsString()
  registerName: string;

  @IsOptional()
  @IsString()
  financialOption?: string;

  @IsString()
  projectManager: string;

  @IsString()
  registerDate: string;

  @IsString()
  organization: string;
}
