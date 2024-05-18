import { DataSource } from "typeorm";

const dataSource: DataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "tech-challenge",
    entities: ["src/adapter/driven/db/entities/**/*.ts"],
    migrations: ["src/adapter/driven/db/migrations/**/*.ts"],
})

export default dataSource;