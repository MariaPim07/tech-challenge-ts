import { Router } from "express";
import { ClientService } from "../../../core/application/services/client.service";
import { ClientRepository } from "../../driven/repository/client.repository";
import { ClientController } from "../controller/client.controller";

const clientRouter = Router();

const clientRepository = new ClientRepository;
const clientService = new ClientService(clientRepository);
const clientController = new ClientController(clientService);

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