import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { OrderStatusEnum } from "../../../../core/domain/enums/orderStatus.enum";

@Entity("order")
export class OrderEntity {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column()
    client!: number;

    @Column()
    hamburger!: number;
    
    @Column()
    accompaniment!: number;
    
    @Column()
    drink!: number;
    
    @Column()
    dessert!: number;

    @Column()
    status!: OrderStatusEnum;
}