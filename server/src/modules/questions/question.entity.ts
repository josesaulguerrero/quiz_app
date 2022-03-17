import {
	Column,
	Entity,
	ManyToMany,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
//local modules
import { Answer } from '../answers/answer.entity';
import { Category } from '../categories/category.entity';

@Entity()
export class Question {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'text' })
	content: string;

	@ManyToMany(() => Category, (category) => category.questions)
	category: Category;

	@OneToMany(() => Answer, (answer) => answer.id)
	answers: Answer[];
}
