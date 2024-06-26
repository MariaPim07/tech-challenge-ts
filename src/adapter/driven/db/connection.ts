import { DataSourceOptions, DataSource } from "typeorm";
import { ClientEntity } from "./entities/client.entity";
import { OrderEntity } from "./entities/order.entity";
import { PaymentEntity } from "./entities/payment.entity";
import { ProductEntity } from "./entities/product.entity";

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