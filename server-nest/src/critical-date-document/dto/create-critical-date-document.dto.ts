import { IsNumber, IsString } from 'class-validator';

export class CreateCriticalDateDocumentDto {
  @IsNumber()
  criticalDateId: number;

  @IsNumber()
  documentId: number;

  @IsString()
  relationshipType: string;
}
