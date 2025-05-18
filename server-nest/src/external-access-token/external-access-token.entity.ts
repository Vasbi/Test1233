import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('external_access_tokens')
export class ExternalAccessToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  token: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  organization?: string;

  @Column({ nullable: true })
  purpose?: string;

  @Column()
  accessType: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'timestamp' })
  expiresAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: true })
  createdBy?: number;

  @Column({ type: 'timestamp', nullable: true })
  lastUsedAt?: Date;

  @Column({ nullable: true })
  ipAddress?: string;

  @Column({ default: 0 })
  accessCount: number;
}
