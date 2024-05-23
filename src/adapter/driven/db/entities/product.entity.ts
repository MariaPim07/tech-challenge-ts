import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("product")
export class ProductEntity {
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