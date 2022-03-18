import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Player {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: '255', unique: true, nullable: false })
	name: string;
}
