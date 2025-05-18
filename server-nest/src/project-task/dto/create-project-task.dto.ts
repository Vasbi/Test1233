import { IsNumber, IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateProjectTaskDto {
  @IsNumber()
  projectId: number;

  @IsString()
  taskId: string;

  @IsString()
  taskName: string;

  @IsNumber()
  percentComplete: number;

  @IsOptional()
  @IsString()
  startDate?: string;

  @IsOptional()
  @IsString()
  finishDate?: string;

  @IsOptional()
  @IsNumber()
  duration?: number;

  @IsOptional()
  @IsString()
  predecessors?: string;

  @IsOptional()
  @IsString()
  successors?: string;

  @IsOptional()
  @IsBoolean()
  milestoneFlag?: boolean;

  @IsOptional()
  @IsNumber()
  priority?: number;

  @IsOptional()
  @IsString()
  resources?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsString()
  uploadedBy?: string;

  @IsOptional()
  @IsBoolean()
  excluded?: boolean;
}
