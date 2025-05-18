import { IsString, IsOptional, IsNumber, IsBoolean, IsDate } from 'class-validator';

export class CreateRiskDto {
  @IsNumber()
  priorityRank: number;

  @IsString()
  riskId: string;

  @IsOptional()
  @IsString()
  issueId?: string;

  @IsString()
  openDate: string;

  @IsString()
  raisedBy: string;

  @IsString()
  ownedBy: string;

  @IsString()
  riskCause: string;

  @IsString()
  riskEvent: string;

  @IsString()
  riskEffect: string;

  @IsString()
  riskCategory: string;

  @IsNumber()
  probability: number;

  @IsNumber()
  impact: number;

  @IsNumber()
  riskRating: number;

  @IsOptional()
  @IsNumber()
  adjustedRiskRating?: number;

  @IsString()
  riskStatus: string;

  @IsString()
  responseType: string;

  @IsString()
  mitigation: string;

  @IsString()
  prevention: string;

  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @IsString()
  registerType?: string;

  @IsOptional()
  @IsString()
  department?: string;

  @IsOptional()
  @IsString()
  actionBy?: string;

  @IsOptional()
  @IsString()
  dueDate?: string;

  @IsOptional()
  @IsString()
  contingency?: string;

  @IsOptional()
  @IsString()
  responseOwner?: string;

  @IsOptional()
  @IsString()
  statusChangeDate?: string;

  @IsOptional()
  @IsNumber()
  criticalDateId?: number;

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

export {};
