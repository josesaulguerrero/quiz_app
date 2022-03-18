import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';

@Injectable()
export class PlayersService {
	constructor(
		@InjectRepository(Player)
		private readonly playerRepository: Repository<Player>,
	) {}
}
