import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskRiskLinkDto } from './create-task-risk-link.dto';

export class UpdateTaskRiskLinkDto extends PartialType(CreateTaskRiskLinkDto) {}
