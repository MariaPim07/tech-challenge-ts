import { DataSourceOptions, DataSource } from "typeorm";
import { ClientEntity } from "../entities/client.entity";
import { PaymentEntity } from "../../adapter/driven/db/entities/payment.entity";
import { ProductEntity } from "../entities/product.entity";
import { OrderEntity } from "../entities/order.entity";

const config = {
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    database: 'tech-challenge',
    username: 'postgres',
    password: 'postgres',
    entities: [ClientEntity, PaymentEntity, ProductEntity, OrderEntity]
} as DataSourceOptions;

const connection = new DataSource(config);
connection.initialize();

export default connection;