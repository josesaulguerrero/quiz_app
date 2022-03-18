import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreatePlayerDTO {
	@IsString()
	@IsNotEmpty()
	@Length(5, 255)
	name: string;
}
