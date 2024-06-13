import { Repository } from "typeorm";
import { ClientEntity } from "../entities/client.entity";
import connection from "../database/connection";
import { IClientRepository } from "../../domain/repository/IClient.repository";

export class ClientRepository implements IClientRepository {
    private clientRepository: Repository<ClientEntity>;
    
    constructor() {
        this.clientRepository = connection.getRepository(ClientEntity);
    }

    async save(clientEntity: ClientEntity): Promise<ClientEntity> {
        return await this.clientRepository.save(clientEntity);
    }
}