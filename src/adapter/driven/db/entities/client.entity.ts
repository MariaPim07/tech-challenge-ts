import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("client")
export class ClientEntity {
    @PrimaryGeneratedColumn("increment")
    id!: number;
    
    @Column({nullable: true})
    name!: string;

    @Column({nullable: true})
    email!: string;

    @Column({nullable: true})
    cpf!: string;
}
