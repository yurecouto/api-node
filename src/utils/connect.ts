import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mongodb",
    database: "Cluster0",
    url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWD}@cluster0.u6kjbgw.mongodb.net/?retryWrites=true&w=majority`,
    synchronize: true,
    logging: ['query', 'error'],
    entities: [
        "./src/schemas/*.ts"
    ],
    migrations: [],
    subscribers: [],
});
