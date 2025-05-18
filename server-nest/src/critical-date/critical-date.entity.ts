import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('critical_dates')
export class CriticalDate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  status: string;

  @Column({ nullable: true })
  entity?: string;

  @Column({ nullable: true })
  department?: string;

  @Column({ nullable: true })
  state?: string;

  @Column({ type: 'float', nullable: true })
  contractValue?: number;

  @Column({ nullable: true })
  criticalIssue?: string;

  @Column({ nullable: true })
  criticalIssueDescription?: string;

  @Column({ nullable: true })
  reminderType?: string;

  @Column({ nullable: true })
  projectName?: string;

  @Column({ nullable: true })
  projectAddress?: string;

  @Column({ nullable: true })
  agreementType?: string;

  @Column({ type: 'timestamp', nullable: true })
  agreementDate?: Date;

  @Column({ nullable: true })
  agreementReference?: string;

  @Column({ type: 'timestamp' })
  dueDate: Date;

  @Column({ nullable: true })
  reminderScheduling?: string;

  @Column({ nullable: true })
  occurrenceFrequency?: string;

  @Column({ type: 'timestamp', nullable: true })
  occurrenceStartDate?: Date;

  @Column({ type: 'timestamp', nullable: true })
  occurrenceLastNotificationDate?: Date;

  @Column({ type: 'int', nullable: true })
  reminder1Days?: number;

  @Column({ type: 'int', nullable: true })
  reminder2Days?: number;

  @Column({ type: 'int', nullable: true })
  reminder3Days?: number;

  @Column({ type: 'int', nullable: true })
  reminder4Days?: number;

  @Column({ type: 'int', nullable: true })
  postTriggerDateReminderDays?: number;

  @Column({ type: 'boolean', default: false })
  hasRelatedClause?: boolean;

  @Column({ nullable: true })
  relatedClauseAndContractDetails?: string;

  @Column({ nullable: true })
  relatedClauseAction?: string;

  @Column({ nullable: true })
  relatedAgreementType?: string;

  @Column({ type: 'timestamp', nullable: true })
  relatedAgreementDate?: Date;

  @Column({ nullable: true })
  blueCHPResponsiblePerson?: string;

  @Column({ nullable: true })
  blueCHPManager?: string;

  @Column({ nullable: true })
  externalResponsiblePartyEmail?: string;

  @Column('text', { array: true, nullable: true })
  emails?: string[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ type: 'int', nullable: true })
  createdBy?: number;

  @Column({ type: 'int', nullable: true })
  lastModifiedBy?: number;
}
