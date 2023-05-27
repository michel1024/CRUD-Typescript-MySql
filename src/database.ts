import { createPool } from "mysql2/promise";

export async function connect(){
    const connection = await createPool({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        database: process.env.DB_NAME || "ts_mysql",
        password: process.env.DB_PASSWORD || "",
        connectionLimit: 10
    });

    return connection;
}