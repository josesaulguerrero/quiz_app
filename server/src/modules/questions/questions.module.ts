import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//local modules
import { Question } from './question.entity';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';

@Module({
	imports: [TypeOrmModule.forFeature([Question])],
	providers: [QuestionsService],
	controllers: [QuestionsController],
	exports: [],
})
export class QuestionsModule {}
