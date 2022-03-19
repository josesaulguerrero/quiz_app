import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreatePlayerDTO } from './player.dto';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
	constructor(private readonly playersService: PlayersService) {}

	@Get()
	findAll(@Query('name') name: string) {
		return this.playersService.findAll(name);
	}

	@Post()
	create(@Body() playerData: CreatePlayerDTO) {
		return this.playersService.create(playerData);
	}
}
