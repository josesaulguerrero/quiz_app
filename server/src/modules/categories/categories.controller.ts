import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDTO, UpdateCategoryDTO } from './category.dto';

@Controller('categories')
export class CategoriesController {
	constructor(private readonly categoriesService: CategoriesService) {}

	@Get()
	findAll() {
		return this.categoriesService.findAll();
	}

	@Get(':categoryId')
	findOne(@Param('categoryId', ParseIntPipe) categoryId: number) {
		return this.categoriesService.findOneById(categoryId, true);
	}

	@Post()
	create(@Body() categoryData: CreateCategoryDTO) {
		return this.categoriesService.create(categoryData);
	}

	@Patch(':categoryId')
	update(
		@Param('categoryId', ParseIntPipe) categoryId: number,
		@Body() updatedData: UpdateCategoryDTO,
	) {
		return this.categoriesService.update(categoryId, updatedData);
	}

	@Delete(':categoryId')
	delete(@Param('categoryId', ParseIntPipe) categoryId: number) {
		return this.categoriesService.delete(categoryId);
	}
}
