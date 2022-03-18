import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
//local modules
import { Question } from '../questions/question.entity';

@Entity()
export class Answer {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 255, nullable: false })
	content: string;

	@Column({ type: 'boolean', nullable: false })
	isCorrect: boolean;

	@ManyToOne(() => Question, (question) => question.answers)
	@JoinColumn({ name: 'question_id' })
	question: Question;
}
