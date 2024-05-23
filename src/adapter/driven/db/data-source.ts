import { DataSource, DataSourceOptions } from 'typeorm';
import { ClientEntity } from './entities/client.entity';
import { ProductEntity } from './entities/product.entity';
import { OrderEntity } from './entities/order.entity';

const config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'tech-challenge',
    username: 'postgres',
    password: 'postgres',
    entities: [ClientEntity, PaymentEntity, ProductEntity, OrderEntity],
    migrations: ['dist/adapter/driven/db/migrations/*.js'],
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