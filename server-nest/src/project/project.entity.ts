import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  registerName: string;

  @Column({ nullable: true })
  financialOption?: string;

  @Column()
  projectManager: string;

  @Column()
  registerDate: string;

  @Column()
  organization: string;
}
