import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateCategoryDTO {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsNumber()
	@IsNotEmpty()
	@IsPositive()
	difficultyLevel: number;
}

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) {}
