import { Repository } from "typeorm";
import { IClientRepository } from "../../../core/application/ports/IClient.repository";
import { ClientEntity } from "../db/entities/client.entity";
import connection from "../../../infrastructure/database/connection";

export class ClientRepository implements IClientRepository {
    private clientRepository: Repository<ClientEntity>;
    
    constructor() {
        this.clientRepository = connection.getRepository(ClientEntity);
    }

    async save(clientEntity: ClientEntity): Promise<ClientEntity> {
        return await this.clientRepository.save(clientEntity);
    }
}