import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//local modules
import { AnswersService } from '../answers/answers.service';
import { CategoriesService } from '../categories/categories.service';
import { CreateQuestionDTO } from './question.dto';
import { CreateAnswerDTO } from '../answers/answer.dto';
import { Question } from './question.entity';

@Injectable()
export class QuestionsService {
	constructor(
		@InjectRepository(Question)
		private readonly questionRepository: Repository<Question>,
		private readonly answersService: AnswersService,
		private readonly categoriesService: CategoriesService,
	) {}

	findAll(): Promise<Question[]> {
		return this.questionRepository.find({
			relations: ['answers'],
		});
	}

	async findOneById(questionId: number): Promise<Question> {
		const question = await this.questionRepository.findOne(questionId, {
			relations: ['answers'],
		});
		if (!question) {
			throw new NotFoundException('Question not found...');
		}
		return question;
	}

	async create(questionData: CreateQuestionDTO): Promise<Question> {
		const newQuestion = this.questionRepository.create(questionData);
		newQuestion.category = await this.categoriesService.findOneById(
			questionData.categoryId,
		);
		const savedQuestion = await this.questionRepository.save(newQuestion);
		//now we add the answers to the already existing question
		const answersData: CreateAnswerDTO[] = questionData.answers.map(
			(answerData) => ({
				...answerData,
				question: savedQuestion,
			}),
		);
		savedQuestion.answers = await this.answersService.createMany(answersData);
		return this.questionRepository.save(savedQuestion);
	}
}
