import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ClientEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    cpf: string | undefined;
}
