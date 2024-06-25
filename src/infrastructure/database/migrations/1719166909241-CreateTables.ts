import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1719166909241 implements MigrationInterface {
    name = 'CreateTables1719166909241'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "name" character varying, "email" character varying, "cpf" character varying, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "category" character varying NOT NULL, "price" double precision NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "clientId" integer, "hamburgerId" integer, "accompanimentId" integer, "drinkId" integer, "dessertId" integer, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment" ("id" SERIAL NOT NULL, "totalPrice" double precision NOT NULL, "paymentMethod" character varying NOT NULL, "paymentStatus" character varying NOT NULL, "orderId" integer, CONSTRAINT "REL_d09d285fe1645cd2f0db811e29" UNIQUE ("orderId"), CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_9b27855a9c2ade186e5c55d1ec3" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_9d44e1494dc59ac0ae0f46493d1" FOREIGN KEY ("hamburgerId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_5d78ad80d76678824cd8f13cc7d" FOREIGN KEY ("accompanimentId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_e4b3e81d6fa66594a500e3a2eb2" FOREIGN KEY ("drinkId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_00b064bc45c7d4949d74e2dcf50" FOREIGN KEY ("dessertId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_d09d285fe1645cd2f0db811e293" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_d09d285fe1645cd2f0db811e293"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_00b064bc45c7d4949d74e2dcf50"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_e4b3e81d6fa66594a500e3a2eb2"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_5d78ad80d76678824cd8f13cc7d"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_9d44e1494dc59ac0ae0f46493d1"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_9b27855a9c2ade186e5c55d1ec3"`);
        await queryRunner.query(`DROP TABLE "payment"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
