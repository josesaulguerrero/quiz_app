import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnswerDTO } from './answer.dto';
import { Answer } from './answer.entity';

@Injectable()
export class AnswersService {
	constructor(
		@InjectRepository(Answer)
		private readonly answersRepository: Repository<Answer>,
	) {}

	async findOne(answerId): Promise<Answer> {
		const answer = await this.answersRepository.findOne(answerId);
		if (!answer) {
			throw new NotFoundException('Answer not found...');
		}
		return answer;
	}

	async create(answerData: CreateAnswerDTO): Promise<Answer> {
		const newAnswer = this.answersRepository.create(answerData);
		return this.answersRepository.save(newAnswer);
	}
}
