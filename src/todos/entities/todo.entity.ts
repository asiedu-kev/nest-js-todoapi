import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Column()
  title: string
  @Column()
  description: string
  @Column({ default: false })
  completed: boolean
  @CreateDateColumn()
  created!: Date
  @UpdateDateColumn()
  updated!: Date
  @DeleteDateColumn()
  deletedAt?: Date
}
