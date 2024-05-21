import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("client")
export class ClientEntity {
    @PrimaryGeneratedColumn("increment")
    id!: number;
    
    @Column({nullable: false})
    name!: string;

    @Column({nullable: false})
    email!: string;

    // @Column()
    // cpf: string | undefined;
}
