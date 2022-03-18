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

	async createMany(answersData: CreateAnswerDTO[]) {
		const answers: Answer[] = answersData.map(
			(answerData): Answer => this.answersRepository.create(answerData),
		);
		return await this.saveMany(answers);
	}

	saveMany(answers: Answer[]) {
		const savedAnswers = answers.map((answer) =>
			this.answersRepository.save(answer),
		);
		return Promise.all(savedAnswers).then((answers) => {
			return answers.map((answer) => {
				delete answer.question;
				return answer;
			});
		});
	}
}
