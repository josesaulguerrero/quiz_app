import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//local modules
import { Answer } from './answer.entity';
import { AnswersService } from './answers.service';

@Module({
	imports: [TypeOrmModule.forFeature([Answer])],
	providers: [AnswersService],
	exports: [AnswersService],
})
export class AnswersModule {}
