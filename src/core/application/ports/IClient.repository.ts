import { ClientEntity } from "../../../adapter/driven/db/entities/client.entity";

export interface IClientRepository {
    save(client: ClientEntity): Promise<ClientEntity>;
}