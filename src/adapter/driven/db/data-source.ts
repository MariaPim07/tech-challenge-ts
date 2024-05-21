import { DataSource, DataSourceOptions } from 'typeorm';
import { ClientEntity } from './entities/client.entity';

const config = {
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    database: 'tech-challenge',
    username: 'postgres',
    password: 'postgres',
    entities: [ClientEntity],
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