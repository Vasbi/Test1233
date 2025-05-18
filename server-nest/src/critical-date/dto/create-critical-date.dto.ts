import { IsString, IsOptional, IsNumber, IsDate, IsArray, IsBoolean } from 'class-validator';

export class CreateCriticalDateDto {
  @IsString()
  title: string;

  @IsString()
  status: string;

  @IsOptional()
  @IsString()
  entity?: string;

  @IsOptional()
  @IsString()
  department?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsNumber()
  contractValue?: number;

  @IsOptional()
  @IsString()
  criticalIssue?: string;

  @IsOptional()
  @IsString()
  criticalIssueDescription?: string;

  @IsOptional()
  @IsString()
  reminderType?: string;

  @IsOptional()
  @IsString()
  projectName?: string;

  @IsOptional()
  @IsString()
  projectAddress?: string;

  @IsOptional()
  @IsString()
  agreementType?: string;

  @IsOptional()
  @IsDate()
  agreementDate?: Date;

  @IsOptional()
  @IsString()
  agreementReference?: string;

  @IsDate()
  dueDate: Date;

  @IsOptional()
  @IsString()
  reminderScheduling?: string;

  @IsOptional()
  @IsString()
  occurrenceFrequency?: string;

  @IsOptional()
  @IsDate()
  occurrenceStartDate?: Date;

  @IsOptional()
  @IsDate()
  occurrenceLastNotificationDate?: Date;

  @IsOptional()
  @IsNumber()
  reminder1Days?: number;

  @IsOptional()
  @IsNumber()
  reminder2Days?: number;

  @IsOptional()
  @IsNumber()
  reminder3Days?: number;

  @IsOptional()
  @IsNumber()
  reminder4Days?: number;

  @IsOptional()
  @IsNumber()
  postTriggerDateReminderDays?: number;

  @IsOptional()
  @IsBoolean()
  hasRelatedClause?: boolean;

  @IsOptional()
  @IsString()
  relatedClauseAndContractDetails?: string;

  @IsOptional()
  @IsString()
  relatedClauseAction?: string;

  @IsOptional()
  @IsString()
  relatedAgreementType?: string;

  @IsOptional()
  @IsDate()
  relatedAgreementDate?: Date;

  @IsOptional()
  @IsString()
  blueCHPResponsiblePerson?: string;

  @IsOptional()
  @IsString()
  blueCHPManager?: string;

  @IsOptional()
  @IsString()
  externalResponsiblePartyEmail?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  emails?: string[];
}
