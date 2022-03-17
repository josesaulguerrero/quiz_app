import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import {
	IsArray,
	IsNotEmpty,
	IsNumber,
	IsPositive,
	IsString,
} from 'class-validator';

export class CreateQuestionDTO {
	@IsString()
	@IsNotEmpty()
	content: string;

	@IsNumber()
	@IsPositive()
	@IsNotEmpty()
	categoryId: number;

	@IsArray()
	@IsNotEmpty()
	@Type(() => Number)
	answersIds: number[];
}

export class UpdateQuestionDTO extends PartialType(CreateQuestionDTO) {}
