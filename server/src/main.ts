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
	await app.listen(parseInt(process.env.PORT), () => {
		console.log(`app running at port ${process.env.PORT}`);
	});
}
bootstrap();
