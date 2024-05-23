import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1716345682243 implements MigrationInterface {
    name = 'CreateTables1716345682243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "client" integer NOT NULL, "hamburger" integer NOT NULL, "accompaniment" integer NOT NULL, "drink" integer NOT NULL, "dessert" integer NOT NULL, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "order"`);
    }

}
