import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
//local modules
import { Question } from '../questions/question.entity';

@Entity()
export class Category {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 100 })
	name: string;

	@Column({ type: 'varchar' })
	difficulty: string;

	@OneToMany(() => Question, (question) => question.category)
	questions: Question[];
}
