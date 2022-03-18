import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//local modules
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
	constructor(
		@InjectRepository(Category)
		private readonly categoriesRepository: Repository<Category>,
	) {}
}
