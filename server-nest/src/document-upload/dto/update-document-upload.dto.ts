import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentUploadDto } from './create-document-upload.dto';

export class UpdateDocumentUploadDto extends PartialType(
  CreateDocumentUploadDto,
) {}
