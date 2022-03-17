import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			useFactory: (configService: ConfigService) => {
				return {
					type: 'postgres',
					host: configService.get('DB_HOST'),
					port: configService.get('DB_PORT'),
					username: configService.get('DB_USER'),
					password: configService.get('DB_PASSWORD'),
					database: configService.get('DB_NAME'),
					synchronize: false,
					autoLoadEntities: true,
				};
			},
			inject: [ConfigService],
		}),
	],
	exports: [TypeOrmModule],
})
export class DatabaseModule {}
