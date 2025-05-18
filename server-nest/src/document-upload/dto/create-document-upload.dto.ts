import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateDocumentUploadDto {
  @IsString()
  filename: string;

  @IsString()
  originalFilename: string;

  @IsString()
  filePath: string;

  @IsNumber()
  fileSize: number;

  @IsString()
  mimeType: string;

  @IsOptional()
  @IsNumber()
  uploadedBy?: number;
}
