import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Player {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: '255', unique: true, nullable: false })
	name: string;

	@CreateDateColumn({
		type: 'timestamptz',
		name: 'created_at',
		default: () => 'CURRENT_TIMESTAMP',
	})
	createdAt: Date;
}
