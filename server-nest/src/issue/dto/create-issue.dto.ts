import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class CreateIssueDto {
  @IsNumber()
  priorityRank: number;

  @IsString()
  uniqueId: string;

  @IsOptional()
  @IsString()
  riskId?: string;

  @IsString()
  issueDate: string;

  @IsString()
  raisedBy: string;

  @IsString()
  ownedBy: string;

  @IsString()
  issueEvent: string;

  @IsString()
  issueEffect: string;

  @IsOptional()
  @IsString()
  resolution?: string;

  @IsString()
  category: string;

  @IsNumber()
  impact: number;

  @IsString()
  status: string;

  @IsString()
  assignedTo: string;

  @IsOptional()
  @IsString()
  closedDate?: string;

  @IsOptional()
  @IsString()
  comments?: string;

  @IsOptional()
  @IsNumber()
  criticalDateId?: number;

  @IsOptional()
  @IsString()
  dueDate?: string;

  @IsBoolean()
  includeCost: boolean;

  @IsOptional()
  @IsNumber()
  optimisticCost?: number;

  @IsOptional()
  @IsNumber()
  mostLikelyCost?: number;

  @IsOptional()
  @IsNumber()
  pessimisticCost?: number;

  @IsOptional()
  @IsNumber()
  expectedCost?: number;

  @IsOptional()
  @IsNumber()
  emv?: number;

  @IsOptional()
  @IsString()
  costAllocationModel?: string;

  @IsOptional()
  @IsString()
  contractDetails?: string;

  @IsOptional()
  @IsString()
  dayType?: string;

  @IsOptional()
  @IsNumber()
  optimisticDuration?: number;

  @IsOptional()
  @IsNumber()
  mostLikelyDuration?: number;

  @IsOptional()
  @IsNumber()
  pessimisticDuration?: number;

  @IsOptional()
  @IsNumber()
  expectedDuration?: number;

  @IsOptional()
  @IsNumber()
  calculatedBusinessDays?: number;

  @IsOptional()
  @IsNumber()
  calculatedCalendarDays?: number;

  @IsOptional()
  @IsNumber()
  probabilityAdjustedDuration?: number;

  @IsOptional()
  @IsNumber()
  delayDuration?: number;

  @IsOptional()
  @IsString()
  delayClassification?: string;

  @IsBoolean()
  criticalPathImpact: boolean;

  @IsOptional()
  @IsNumber()
  floatConsumption?: number;

  @IsOptional()
  @IsNumber()
  initialRiskRating?: number;

  @IsOptional()
  @IsNumber()
  residualRiskRating?: number;

  @IsNumber()
  projectId: number;
}
