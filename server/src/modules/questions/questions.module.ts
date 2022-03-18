import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//local modules
import { Question } from './question.entity';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { AnswersModule } from '../answers/answers.module';
import { CategoriesModule } from '../categories/categories.module';

@Module({
	imports: [
		AnswersModule,
		CategoriesModule,
		TypeOrmModule.forFeature([Question]),
	],
	providers: [QuestionsService],
	controllers: [QuestionsController],
})
export class QuestionsModule {}
