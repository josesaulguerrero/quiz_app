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
					url: configService.get('DATABASE_URL'),
					synchronize: false,
					autoLoadEntities: true,
					ssl: process.env.DYNO
						? {
								rejectUnauthorized: false,
						  }
						: false,
				};
			},
			inject: [ConfigService],
		}),
	],
	exports: [TypeOrmModule],
})
export class DatabaseModule {}
