import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import {
	ArrayMaxSize,
	ArrayMinSize,
	IsArray,
	IsNotEmpty,
	IsNumber,
	IsPositive,
	IsString,
} from 'class-validator';
import { CreateAnswerDTO } from '../answers/answer.dto';

export class CreateQuestionDTO {
	@IsString()
	@IsNotEmpty()
	content: string;

	@IsNumber()
	@IsPositive()
	@IsNotEmpty()
	categoryId: number;

	@IsArray()
	@ArrayMaxSize(4)
	@ArrayMinSize(4)
	@IsNotEmpty()
	@Type(() => CreateAnswerDTO)
	answersIds: number[];
}

export class UpdateQuestionDTO extends PartialType(CreateQuestionDTO) {}
