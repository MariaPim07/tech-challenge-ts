import { Repository } from "typeorm";
import { IClientRepository } from "../../../core/application/ports/IClient.repository";
import { ClientEntity } from "../db/entities/client.entity";
import dataSource from "../db/data-source";

export class ClientRepository implements IClientRepository {
    private clientRepository: Repository<ClientEntity>;
    
    constructor() {
        this.clientRepository = dataSource.getRepository(ClientEntity);
    }

    async save(clientEntity: ClientEntity): Promise<ClientEntity> {
        return await this.clientRepository.save(clientEntity);
    }
}