import { Router } from "express";
import { ClientRepository } from "../../infrastructure/repository/client.repository";
import { ClientController } from "../controller/client.controller";
import { CreateClientUseCase } from "../../domain/usecase/client/createClient.usecase";

const clientRouter = Router();

const clientRepository = new ClientRepository;

const createClientUseCase = new CreateClientUseCase(clientRepository);

const clientController = new ClientController(createClientUseCase);

clientRouter.post("/", (req, res) => {
    // #swagger.tags = ['Cliente']
    // #swagger.description = salva informações do cliente (validação de CPF).
    /*  #swagger.parameters['body'] = {
            in: 'body',
            schema: {
                "name": "Nome Cliente",
                "email": "client@email.com",
                "cpf": ""
            }
    } */
    // #swagger.responses[200] = { description: 'Cliente cadastrado com sucesso.' }
    // #swagger.responses[400] = { description: 'Cliente não identificado.' }
    // #swagger.responses[4XX] = { description: 'CPF inválido.' }
    // #swagger.responses[500] = { description: 'Erro interno do servidor.' }
    return clientController.createClient(req, res);
});

export default clientRouter;