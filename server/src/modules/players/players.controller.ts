import { Controller } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
	constructor(private readonly playersService: PlayersService) {}
}
