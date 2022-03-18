import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDTO, UpdateCategoryDTO } from './category.dto';
//local modules
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
	constructor(
		@InjectRepository(Category)
		private readonly categoriesRepository: Repository<Category>,
	) {}

	findAll(): Promise<Category[]> {
		return this.categoriesRepository.find({
			relations: ['questions'],
		});
	}

	async findOneById(categoryId: number): Promise<Category> {
		const category = await this.categoriesRepository.findOne(categoryId, {
			relations: ['questions', 'questions.answers'],
		});
		if (!category) {
			throw new NotFoundException('Category not found...');
		}
		return category;
	}

	create(categoryData: CreateCategoryDTO): Promise<Category> {
		const newCategory = this.categoriesRepository.create(categoryData);
		return this.categoriesRepository.save(newCategory);
	}

	async update(
		categoryId: number,
		updatedData: UpdateCategoryDTO,
	): Promise<Category> {
		const category = await this.findOneById(categoryId);
		const updatedCategory = { ...category, ...updatedData };
		return this.categoriesRepository.save(updatedCategory);
	}

	async delete(categoryId): Promise<Category> {
		const category = await this.findOneById(categoryId);
		await this.categoriesRepository.delete(categoryId);
		return category;
	}
}
