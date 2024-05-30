import { Order } from './../../../../core/domain/models/order';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from './order.entity';

@Entity("payment")
export class PaymentEntity {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @OneToOne(() => OrderEntity, order => order.payment)
    @JoinColumn()
    order!: OrderEntity;

    @Column({type: "float", nullable: false})
    totalPrice!: number;

    @Column()
    paymentMethod!: string;

    @Column({nullable: false})
    paymentStatus!: string;
}