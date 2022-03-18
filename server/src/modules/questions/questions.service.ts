import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnswersService } from '../answers/answers.service';
import { Question } from './question.entity';

@Injectable()
export class QuestionsService {
	constructor(
		@InjectRepository(Question)
		private readonly questionRepository: Repository<Question>,
		private readonly answersService: AnswersService,
	) {}

	findAll(): Promise<Question[]> {
		return this.questionRepository.find({
			relations: ['answers'],
		});
	}
}
