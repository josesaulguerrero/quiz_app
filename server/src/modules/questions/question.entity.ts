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

	@ManyToOne(() => Category, (category) => category.questions, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	@JoinColumn({ name: 'category_id' })
	category: Category;

	@OneToMany(() => Answer, (answer) => answer.question)
	answers: Answer[];
}
