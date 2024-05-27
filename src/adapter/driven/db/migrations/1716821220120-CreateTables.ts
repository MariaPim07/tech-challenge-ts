import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1716821220120 implements MigrationInterface {
    name = 'CreateTables1716821220120'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" RENAME COLUMN "client" TO "clientId"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "clientId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_9b27855a9c2ade186e5c55d1ec3" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_9b27855a9c2ade186e5c55d1ec3"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "clientId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" RENAME COLUMN "clientId" TO "client"`);
    }

}
