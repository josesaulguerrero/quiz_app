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
		methods: 'GET,HEAD,PATCH,POST,DELETE',
		allowedHeaders:
			'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
	});
	await app.listen(parseInt(process.env.PORT), () => {
		console.log(`app running at port ${process.env.PORT}`);
	});
}
bootstrap();
