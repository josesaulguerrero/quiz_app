import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateAnswerDTO {
	@IsString()
	@IsNotEmpty()
	content: string;

	@IsBoolean()
	@IsNotEmpty()
	isCorrect: boolean;
}

export class UpdateAnswerDTO extends PartialType(CreateAnswerDTO) {}
