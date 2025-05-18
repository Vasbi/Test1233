import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('critical_date_documents')
export class CriticalDateDocument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  criticalDateId: number;

  @Column()
  documentId: number;

  @Column()
  relationshipType: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
