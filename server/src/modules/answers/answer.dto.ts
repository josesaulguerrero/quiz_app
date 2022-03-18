import { PartialType } from '@nestjs/mapped-types';
import {
	IsBoolean,
	IsNotEmpty,
	IsNumber,
	IsPositive,
	IsString,
} from 'class-validator';

export class CreateAnswerDTO {
	@IsString()
	@IsNotEmpty()
	content: string;

	@IsBoolean()
	@IsNotEmpty()
	isCorrect: boolean;

	@IsNumber()
	@IsNotEmpty()
	@IsPositive()
	questionId: number;
}

export class UpdateAnswerDTO extends PartialType(CreateAnswerDTO) {}
