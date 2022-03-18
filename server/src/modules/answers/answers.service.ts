import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answer } from './answer.entity';

@Injectable()
export class AnswersService {
	constructor(
		@InjectRepository(Answer)
		private readonly answersRepository: Repository<Answer>,
	) {}
}
