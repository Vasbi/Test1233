import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('risks')
export class Risk {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  priorityRank: number;

  @Column()
  riskId: string;

  @Column({ nullable: true })
  issueId?: string;

  @Column()
  openDate: string;

  @Column()
  raisedBy: string;

  @Column()
  ownedBy: string;

  @Column()
  riskCause: string;

  @Column()
  riskEvent: string;

  @Column()
  riskEffect: string;

  @Column()
  riskCategory: string;

  @Column('float')
  probability: number;

  @Column()
  impact: number;

  @Column()
  riskRating: number;

  @Column('float', { nullable: true })
  adjustedRiskRating?: number;

  @Column()
  riskStatus: string;

  @Column()
  responseType: string;

  @Column()
  mitigation: string;

  @Column()
  prevention: string;

  @Column({ nullable: true })
  comment?: string;

  @Column({ default: 'default' })
  registerType: string;

  @Column({ default: 'default' })
  department: string;

  @Column({ nullable: true })
  actionBy?: string;

  @Column({ nullable: true })
  dueDate?: string;

  @Column({ nullable: true })
  contingency?: string;

  @Column({ nullable: true })
  responseOwner?: string;

  @Column({ nullable: true })
  statusChangeDate?: string;

  @Column({ nullable: true })
  criticalDateId?: number;

  @Column({ default: false })
  includeCost: boolean;

  @Column('float', { nullable: true })
  optimisticCost?: number;

  @Column('float', { nullable: true })
  mostLikelyCost?: number;

  @Column('float', { nullable: true })
  pessimisticCost?: number;

  @Column('float', { nullable: true })
  expectedCost?: number;

  @Column('float', { nullable: true })
  emv?: number;

  @Column({ nullable: true })
  costAllocationModel?: string;

  @Column({ nullable: true })
  contractDetails?: string;

  @Column({ nullable: true })
  dayType?: string;

  @Column('float', { nullable: true })
  optimisticDuration?: number;

  @Column('float', { nullable: true })
  mostLikelyDuration?: number;

  @Column('float', { nullable: true })
  pessimisticDuration?: number;

  @Column('float', { nullable: true })
  expectedDuration?: number;

  @Column('float', { nullable: true })
  calculatedBusinessDays?: number;

  @Column('float', { nullable: true })
  calculatedCalendarDays?: number;

  @Column('float', { nullable: true })
  probabilityAdjustedDuration?: number;

  @Column({ nullable: true })
  delayDuration?: number;

  @Column({ nullable: true })
  delayClassification?: string;

  @Column({ default: false })
  criticalPathImpact: boolean;

  @Column({ nullable: true })
  floatConsumption?: number;

  @Column({ nullable: true })
  initialRiskRating?: number;

  @Column({ nullable: true })
  residualRiskRating?: number;

  @Column()
  projectId: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
