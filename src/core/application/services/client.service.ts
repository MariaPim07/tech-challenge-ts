import { ClientEntity } from '../../../adapter/driven/db/entities/client.entity';
import { Client } from '../../domain/client';
import { IClientRepository } from '../ports/IClient.repository';

export class ClientService {
    constructor(private clientRepository: IClientRepository) {}

    async createClient(client: Client) {
        const clientEntity = new ClientEntity

        Object.assign(clientEntity, client);
        
        return await this.clientRepository.save(clientEntity)
    }
}