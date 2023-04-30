import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn()
  created: Date;

  @Column()
  title: string;

  @Column()
  description: string;
}
