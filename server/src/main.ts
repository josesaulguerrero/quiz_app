import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			forbidUnknownValues: true,
		}),
	);
	app.enableCors({
		origin: (origin, callback) => callback(null, true),
		methods: '*',
		allowedHeaders: '*',
	});
	app.setGlobalPrefix('/api/v1');
	await app.listen(parseInt(process.env.PORT) || 3000, () => {
		console.log(`app running at port ${process.env.PORT}`);
	});
}
bootstrap();
