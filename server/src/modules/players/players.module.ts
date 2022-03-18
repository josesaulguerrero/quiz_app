import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//local modules
import { Player } from './player.entity';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

@Module({
	imports: [TypeOrmModule.forFeature([Player])],
	controllers: [PlayersController],
	providers: [PlayersService],
})
export class PlayersModule {}
