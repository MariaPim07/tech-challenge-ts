import { Client } from "../../entities/client";
import { HttpException } from "../../HttpException";
import { IClientRepository } from "../../repository/IClient.repository";

export class CreateClientUseCase {
    constructor(private readonly clientRepository: IClientRepository) {}

    async execute(client: Client): Promise<Client> {
        if ((client.name && client.email) || (client.cpf && this.validateCpf(client.cpf.toString())))
            return await this.clientRepository.save(client);

        throw new HttpException(400, "Cliente não identificado.");
    }

    private validateCpf(cpf: string) {
        cpf = cpf.replace(/[^\d]/g, '');

        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
            throw new HttpException(400, "CPF inválido.");
        }

        let sum = 0;
        for (var i = 0; i < 9; i++) {
            sum += parseInt(cpf.charAt(i)) * (10 - i);
        }
        
        let rest = 11 - (sum % 11);
        let firstVerifyingDigit = (rest === 10 || rest === 11) ? 0 : rest;

        if (firstVerifyingDigit !== parseInt(cpf.charAt(9))) {
            throw new HttpException(400, "CPF inválido.");
        }

        sum = 0;
        for (var i = 0; i < 10; i++) {
            sum += parseInt(cpf.charAt(i)) * (11 - i);
        }

        rest = 11 - (sum % 11);
        var secondVerifyingDigit = (rest === 10 || rest === 11) ? 0 : rest;

        if (secondVerifyingDigit !== parseInt(cpf.charAt(10))) {
            throw new HttpException(400, "CPF inválido.");
        }

        return true;
    }
}