import {MigrationInterface, QueryRunner} from "typeorm";

export class addedNewFieldOnPlayer1647622319151 implements MigrationInterface {
    name = 'addedNewFieldOnPlayer1647622319151'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "player" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "player" DROP COLUMN "created_at"`);
    }

}
