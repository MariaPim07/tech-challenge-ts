import { CreateClientUseCase } from './../../domain/usecase/client/createClient.usecase';
import { Request, Response } from "express";

export class ClientController {
    constructor(private readonly createClientUseCase: CreateClientUseCase) {}

    async createClient(req: Request, res: Response) {
        const client = req.body;
        try {
            await this.createClientUseCase.execute(client);
            return res.status(200).json("Cliente cadastrado com sucesso.");
        } catch {
            return res.status(500).json("Ocorreu um erro ao cadastrar o cliente.");
        }
    }
}