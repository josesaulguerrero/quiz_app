import {
	Column,
	Entity,
	JoinColumn,
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

	@Column({ type: 'text', unique: true, nullable: false })
	content: string;

	@ManyToOne(() => Category, (category) => category.questions)
	@JoinColumn({ name: 'category_id' })
	category: Category;

	@OneToMany(() => Answer, (answer) => answer.question, {
		onDelete: 'CASCADE',
	})
	answers: Answer[];
}
