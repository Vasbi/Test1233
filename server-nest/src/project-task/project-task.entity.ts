import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('project_tasks')
export class ProjectTask {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  projectId: number;

  @Column()
  taskId: string;

  @Column()
  taskName: string;

  @Column({ type: 'float', default: 0 })
  percentComplete: number;

  @Column({ nullable: true })
  startDate?: string;

  @Column({ nullable: true })
  finishDate?: string;

  @Column({ type: 'float', nullable: true })
  duration?: number;

  @Column({ nullable: true })
  predecessors?: string;

  @Column({ nullable: true })
  successors?: string;

  @Column({ default: false })
  milestoneFlag: boolean;

  @Column({ nullable: true })
  priority?: number;

  @Column({ nullable: true })
  resources?: string;

  @Column({ nullable: true })
  notes?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  uploadedAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  lastUpdatedAt: Date;

  @Column({ nullable: true })
  uploadedBy?: string;

  @Column({ default: false })
  excluded: boolean;
}
