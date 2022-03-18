import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import {
	IsBoolean,
	IsNotEmpty,
	IsString,
	ValidateNested,
} from 'class-validator';
import { Question } from '../questions/question.entity';

export class CreateAnswerDTO {
	@IsString()
	@IsNotEmpty()
	content: string;

	@IsBoolean()
	@IsNotEmpty()
	isCorrect: boolean;

	@ValidateNested()
	@Type(() => Question)
	question: Question;
}

export class UpdateAnswerDTO extends PartialType(CreateAnswerDTO) {}
