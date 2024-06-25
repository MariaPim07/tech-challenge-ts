import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Order } from "../../domain/entities/order";
import { ClientEntity } from "./client.entity";
import { ProductEntity } from "./product.entity";
import { PaymentEntity } from "./payment.entity";

@Entity("order")
export class OrderEntity implements Order {
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

    @CreateDateColumn() 
    createdAt!: Date;
    
    @UpdateDateColumn() 
    updatedAt!: Date;
}