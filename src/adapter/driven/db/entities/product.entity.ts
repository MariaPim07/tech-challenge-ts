import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("product")
export class ProductEntity {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column()
    name!: string;

    @Column()
    category!: string;

    @Column()
    price!: string;

    @Column()
    description!: string;

    @Column()
    image!: string;
}