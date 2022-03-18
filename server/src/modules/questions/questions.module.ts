import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//local modules
import { Question } from './question.entity';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { AnswersModule } from '../answers/answers.module';

@Module({
	imports: [AnswersModule, TypeOrmModule.forFeature([Question])],
	providers: [QuestionsService],
	controllers: [QuestionsController],
})
export class QuestionsModule {}
