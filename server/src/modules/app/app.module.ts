import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AnswersModule } from '../answers/answers.module';
import { CategoriesModule } from '../categories/categories.module';
import { DatabaseModule } from '../database/database.module';
import { QuestionsModule } from '../questions/questions.module';
//local modules
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		QuestionsModule,
		AnswersModule,
		CategoriesModule,
		DatabaseModule,
		ConfigModule.forRoot({
			envFilePath: '.env',
			isGlobal: true,
			validationSchema: Joi.object({
				DATABASE_URL: Joi.string().uri().required(),
				PORT: Joi.number(),
			}),
			validationOptions: {
				allowUnknown: true,
				abortEarly: false,
			},
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
