import {MigrationInterface, QueryRunner} from "typeorm";

export class modifiedCategoryEntity1647621217864 implements MigrationInterface {
    name = 'modifiedCategoryEntity1647621217864'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" RENAME COLUMN "difficulty" TO "difficulty_level"`);
        await queryRunner.query(`ALTER TABLE "category" RENAME CONSTRAINT "UQ_82cb7b9acf8279d2a4aa77177c8" TO "UQ_859ca5620a756570b89cf5584bb"`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "UQ_859ca5620a756570b89cf5584bb"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "difficulty_level"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "difficulty_level" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "UQ_859ca5620a756570b89cf5584bb" UNIQUE ("difficulty_level")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "UQ_859ca5620a756570b89cf5584bb"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "difficulty_level"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "difficulty_level" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "UQ_859ca5620a756570b89cf5584bb" UNIQUE ("difficulty_level")`);
        await queryRunner.query(`ALTER TABLE "category" RENAME CONSTRAINT "UQ_859ca5620a756570b89cf5584bb" TO "UQ_82cb7b9acf8279d2a4aa77177c8"`);
        await queryRunner.query(`ALTER TABLE "category" RENAME COLUMN "difficulty_level" TO "difficulty"`);
    }

}
