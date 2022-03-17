import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
//local modules
import { DatabaseModule } from '../database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
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
