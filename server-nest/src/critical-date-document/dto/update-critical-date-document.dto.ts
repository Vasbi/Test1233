import { PartialType } from '@nestjs/mapped-types';
import { CreateCriticalDateDocumentDto } from './create-critical-date-document.dto';

export class UpdateCriticalDateDocumentDto extends PartialType(
  CreateCriticalDateDocumentDto,
) {}
