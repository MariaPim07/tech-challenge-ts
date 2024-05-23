import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PaymentStatusEnum } from "../../../../core/domain/enums/paymentStatus.enum";
import { PaymentEnum } from "../../../../core/domain/enums/payment.enum";

@Entity("payment")
export class PaymentEntity {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column()
    order!: number;

    @Column()
    totalValue!: number;

    @Column()
    payment!: PaymentEnum;

    @Column()
    paymentStatus!: PaymentStatusEnum
}