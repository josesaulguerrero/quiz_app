import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from '../questions/question.entity';

@Entity()
export class Category {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 100 })
	name: string;

	@OneToMany(() => Question, (question) => question.category)
	questions: Question[];
}
