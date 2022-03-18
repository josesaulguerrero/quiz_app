import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlayerDTO } from './player.dto';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
	constructor(private readonly playersService: PlayersService) {}

	@Get()
	findAll() {
		return this.playersService.findAll();
	}

	@Post()
	create(@Body() playerData: CreatePlayerDTO) {
		return this.playersService.create(playerData);
	}
}
