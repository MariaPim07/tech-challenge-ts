import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1716265081326 implements MigrationInterface {
    name = 'CreateTables1716265081326'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "category" character varying NOT NULL, "price" character varying NOT NULL, "description" character varying NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
