import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//local modules
import { Category } from './category.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Category])],
})
export class CategoriesModule {}
