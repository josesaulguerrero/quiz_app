import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1647616364392 implements MigrationInterface {
	name = 'init1647616364392';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "difficulty" character varying NOT NULL, CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), CONSTRAINT "UQ_82cb7b9acf8279d2a4aa77177c8" UNIQUE ("difficulty"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE TABLE "question" ("id" SERIAL NOT NULL, "content" text NOT NULL, "category_id" integer, CONSTRAINT "UQ_f33a823a5dbb55c92394454e2cf" UNIQUE ("content"), CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE TABLE "answer" ("id" SERIAL NOT NULL, "content" character varying(255) NOT NULL, "isCorrect" boolean NOT NULL, "question_id" integer, CONSTRAINT "PK_9232db17b63fb1e94f97e5c224f" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`ALTER TABLE "question" ADD CONSTRAINT "FK_5fd605f755be75e9ea3ee3fdc18" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
		);
		await queryRunner.query(
			`ALTER TABLE "answer" ADD CONSTRAINT "FK_c3d19a89541e4f0813f2fe09194" FOREIGN KEY ("question_id") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "answer" DROP CONSTRAINT "FK_c3d19a89541e4f0813f2fe09194"`,
		);
		await queryRunner.query(
			`ALTER TABLE "question" DROP CONSTRAINT "FK_5fd605f755be75e9ea3ee3fdc18"`,
		);
		await queryRunner.query(`DROP TABLE "answer"`);
		await queryRunner.query(`DROP TABLE "question"`);
		await queryRunner.query(`DROP TABLE "category"`);
	}
}
