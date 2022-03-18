import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateQuestionDTO } from './question.dto';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
	constructor(private readonly questionsService: QuestionsService) {}

	@Get()
	findAll() {
		return this.questionsService.findAll();
	}

	@Post()
	create(@Body() questionData: CreateQuestionDTO) {
		return this.questionsService.create(questionData);
	}
}
