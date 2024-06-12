import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PaymentEntity } from "./payment.entity";
import { ProductEntity } from "../../../../infrastructure/entities/product.entity";
import { ClientEntity } from "./client.entity";

@Entity("order")
export class OrderEntity {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @ManyToOne(() => ClientEntity)
    @JoinColumn()
    client!: ClientEntity;

    @ManyToOne(() => ProductEntity)
    @JoinColumn()
    hamburger!: ProductEntity;

    @ManyToOne(() => ProductEntity)
    @JoinColumn()
    accompaniment!: ProductEntity;

    @ManyToOne(() => ProductEntity)
    @JoinColumn()
    drink!: ProductEntity;

    @ManyToOne(() => ProductEntity)
    @JoinColumn()
    dessert!: ProductEntity;

    @Column({nullable: false})
    status!: string;

    @OneToOne(() => PaymentEntity, payment => payment.order, { cascade: true })
    payment!: PaymentEntity;
}