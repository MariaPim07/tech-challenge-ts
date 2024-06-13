import { Client } from "../entities/client";

export interface IClientRepository {
    save(client: Client): Promise<Client>;
}