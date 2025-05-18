import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ExternalAccessToken } from '../external-access-token/external-access-token.entity';
import { CriticalDate } from '../critical-date/critical-date.entity';
import { Project } from '../project/project.entity';

@Entity('external_access_permissions')
export class ExternalAccessPermission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tokenId: number;

  @Column({ nullable: true })
  criticalDateId?: number;

  @Column({ nullable: true })
  projectId?: number;

  @Column({ default: true })
  canView: boolean;

  @Column({ default: false })
  canEdit: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => ExternalAccessToken, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tokenId' })
  token: ExternalAccessToken;

  @ManyToOne(() => CriticalDate, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'criticalDateId' })
  criticalDate?: CriticalDate;

  @ManyToOne(() => Project, { nullable: true })
  @JoinColumn({ name: 'projectId' })
  project?: Project;
}
