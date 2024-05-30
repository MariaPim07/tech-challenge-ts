import { ClientService } from "../../../core/application/services/client.service";
import { Request, Response } from "express";

export class ClientController {
    constructor(private readonly clientService: ClientService) {}

    async createClient(req: Request, res: Response) {
        const client = req.body;
        try {
            await this.clientService.createClient(client);
            return res.status(200).json("Cliente cadastrado com sucesso.");
        } catch {
            return res.status(500).json("Ocorreu um erro ao cadastrar o cliente.");
        }
    }
}