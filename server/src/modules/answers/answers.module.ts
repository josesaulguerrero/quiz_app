import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//local modules
import { Answer } from './answer.entity';
import { AnswersController } from './answers.controller';
import { AnswersService } from './answers.service';

@Module({
	imports: [TypeOrmModule.forFeature([Answer])],
	controllers: [AnswersController],
	providers: [AnswersService],
})
export class AnswersModule {}
