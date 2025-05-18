import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('task_risk_links')
export class TaskRiskLink {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  taskId: number;

  @Column()
  riskId: number;

  @Column({ nullable: true })
  createdBy?: string;

  @Column({ default: false })
  aiSuggested: boolean;

  @Column({ default: false })
  userConfirmed: boolean;

  @Column({ type: 'timestamp', nullable: true })
  lastValidated?: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
