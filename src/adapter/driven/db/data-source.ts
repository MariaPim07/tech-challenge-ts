import { DataSource, DataSourceOptions } from 'typeorm';
import { ClientEntity } from './entities/client.entity';
import { ProductEntity } from './entities/product.entity';
import { OrderEntity } from './entities/order.entity';
import { PaymentEntity } from './entities/payment.entity';

const config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'tech-challenge',
    username: 'postgres',
    password: 'postgres',
    entities: [ClientEntity, PaymentEntity, ProductEntity, OrderEntity],
    migrations: ['src/adapter/driven/db/migrations/*.ts'],
    migrationsTableName: 'typeorm_migrations',
    logging: false,
    synchronize: false,
    migrationsRun: true,
    extra: {
    charset: 'utf8',
    },
} as DataSourceOptions;

const datasource = new DataSource(config);
datasource.initialize();

export default datasource;