import { Router } from "express";
import { ClientService } from "../../../core/application/services/client.service";
import { ClientRepository } from "../../driven/repository/client.repository";
import { ClientController } from "./client.controller";

const clientRouter = Router();

const clientRepository = new ClientRepository;
const clientService = new ClientService(clientRepository);
const clientController = new ClientController(clientService);

clientRouter.post("/", (req, res) => clientController.createClient(req, res));

export default clientRouter;