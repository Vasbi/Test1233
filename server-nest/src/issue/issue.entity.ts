import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('issues')
export class Issue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  priorityRank: number;

  @Column()
  uniqueId: string;

  @Column({ nullable: true })
  riskId?: string;

  @Column()
  issueDate: string;

  @Column()
  raisedBy: string;

  @Column()
  ownedBy: string;

  @Column()
  issueEvent: string;

  @Column()
  issueEffect: string;

  @Column({ nullable: true })
  resolution?: string;

  @Column()
  category: string;

  @Column()
  impact: number;

  @Column()
  status: string;

  @Column()
  assignedTo: string;

  @Column({ nullable: true })
  closedDate?: string;

  @Column({ nullable: true })
  comments?: string;

  @Column({ nullable: true })
  criticalDateId?: number;

  @Column({ nullable: true })
  dueDate?: string;

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
