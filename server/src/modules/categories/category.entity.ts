import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
//local modules
import { Question } from '../questions/question.entity';

@Entity()
export class Category {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 100, unique: true })
	name: string;

	@Column({ type: 'int', name: 'difficulty_level', unique: true })
	difficultyLevel: number;

	@OneToMany(() => Question, (question) => question.category)
	questions: Question[];
}
