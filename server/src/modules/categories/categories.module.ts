import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//local modules
import { Category } from './category.entity';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';

@Module({
	imports: [TypeOrmModule.forFeature([Category])],
	providers: [CategoriesService],
	controllers: [CategoriesController],
	exports: [CategoriesService],
})
export class CategoriesModule {}
