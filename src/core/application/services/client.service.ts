import { Client } from '../../domain/client';
import { IClientRepository } from '../ports/IClient.repository';

export class ClientService {
    constructor(private clientRepository: IClientRepository) {}

    validateClient(client: Client) {
       throw new Error('not implemented.')
    }
}