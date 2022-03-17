import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Random {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: '255' })
	name: string;
}
