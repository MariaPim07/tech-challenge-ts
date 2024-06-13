import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "../../domain/entities/client";

@Entity("client")
export class ClientEntity implements Client {
    @PrimaryGeneratedColumn("increment")
    id!: number;
    
    @Column({nullable: true})
    name!: string;

    @Column({nullable: true})
    email!: string;

    @Column({nullable: true})
    cpf!: string;
}
