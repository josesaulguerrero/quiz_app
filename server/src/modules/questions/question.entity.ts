import {
	Column,
	Entity,
	ManyToOne,
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

	@ManyToOne(() => Category, (category) => category.questions)
	category: Category;

	@OneToMany(() => Answer, (answer) => answer.id, {
		onDelete: 'CASCADE',
	})
	answers: Answer[];
}
