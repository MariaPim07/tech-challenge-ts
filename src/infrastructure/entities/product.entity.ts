import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../../domain/entities/product";

@Entity("product")
export class ProductEntity implements Product {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column({nullable: false})
    name!: string;

    @Column({nullable: false})
    category!: string;

    @Column({type:"float", nullable: false})
    price!: number;

    @Column()
    description!: string;
}