import { IsNumber, IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateTaskRiskLinkDto {
  @IsNumber()
  taskId: number;

  @IsNumber()
  riskId: number;

  @IsOptional()
  @IsString()
  createdBy?: string;

  @IsOptional()
  @IsBoolean()
  aiSuggested?: boolean;

  @IsOptional()
  @IsBoolean()
  userConfirmed?: boolean;
}
