import {
	Body,
	Controller,
	Get,
	Param,
	ParseIntPipe,
	Post,
} from '@nestjs/common';
import { CreateQuestionDTO } from './question.dto';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
	constructor(private readonly questionsService: QuestionsService) {}

	@Get()
	findAll() {
		return this.questionsService.findAll();
	}

	@Get(':questionId')
	findOneById(@Param('questionId', ParseIntPipe) questionId: number) {
		return this.questionsService.findOneById(questionId);
	}

	@Post()
	create(@Body() questionData: CreateQuestionDTO) {
		return this.questionsService.create(questionData);
	}
}
