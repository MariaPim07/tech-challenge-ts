import { ClientEntity } from '../../../adapter/driven/db/entities/client.entity';
import { HttpException } from '../../HttpException';
import { Client } from '../../domain/client';
import { IClientRepository } from '../ports/IClient.repository';

export class ClientService {
    constructor(private clientRepository: IClientRepository) {}

    async createClient(client: Client) {
        if (client.name && client.email)
            return await this.saveClient(client);
        else if (client.cpf)
            return await this.saveCpf(client);

        throw new HttpException(400, "Cliente não identificado.");
    }

    private async saveClient(client: Client) {
        const clientEntity = new ClientEntity

        clientEntity.name = client.name;
        clientEntity.email = client.email;

        return await this.clientRepository.save(clientEntity);
    }

    private async saveCpf(client: Client) {
        const clientEntity = new ClientEntity;

        if (!this.validateCpf) throw new HttpException(400, "CPF inválido.");

        clientEntity.cpf = client.cpf;

        return await this.clientRepository.save(clientEntity);
    }

    private validateCpf(cpf: string) {
        cpf = cpf.replace(/[^\d]/g, '');

        if (cpf.length !== 11) {
            return false;
        }

        if (/^(\d)\1{10}$/.test(cpf)) {
            return false;
        }

        let sum = 0;
        for (var i = 0; i < 9; i++) {
            sum += parseInt(cpf.charAt(i)) * (10 - i);
        }
        
        let rest = 11 - (sum % 11);
        let firstVerifyingDigit = (rest === 10 || rest === 11) ? 0 : rest;

        if (firstVerifyingDigit !== parseInt(cpf.charAt(9))) {
            return false;
        }

        sum = 0;
        for (var i = 0; i < 10; i++) {
            sum += parseInt(cpf.charAt(i)) * (11 - i);
        }

        rest = 11 - (sum % 11);
        var secondVerifyingDigit = (rest === 10 || rest === 11) ? 0 : rest;

        if (secondVerifyingDigit !== parseInt(cpf.charAt(10))) {
            return false;
        }

        return true;
    }
}