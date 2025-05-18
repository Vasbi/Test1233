import { PartialType } from '@nestjs/mapped-types';
import { CreateCriticalDateDto } from './create-critical-date.dto';

export class UpdateCriticalDateDto extends PartialType(CreateCriticalDateDto) {}
