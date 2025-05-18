import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('document_uploads')
export class DocumentUpload {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  originalFilename: string;

  @Column()
  filePath: string;

  @Column()
  fileSize: number;

  @Column()
  mimeType: string;

  @Column({ nullable: true })
  uploadedBy?: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  uploadedAt: Date;

  @Column({ default: 'pending' })
  analysisStatus: string;

  @Column({ nullable: true, type: 'text' })
  analysisResults?: string;

  @Column({ nullable: true })
  analysisCompletedAt?: string;
}
