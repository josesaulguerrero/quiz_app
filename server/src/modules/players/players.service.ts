import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlayerDTO } from './player.dto';
import { Player } from './player.entity';

@Injectable()
export class PlayersService {
	constructor(
		@InjectRepository(Player)
		private readonly playerRepository: Repository<Player>,
	) {}

	findAll(name) {
		const where = name ? { name } : {};
		return this.playerRepository.find({
			where,
		});
	}

	create(playerData: CreatePlayerDTO) {
		const newPlayer = this.playerRepository.create(playerData);
		return this.playerRepository.save(newPlayer);
	}
}
