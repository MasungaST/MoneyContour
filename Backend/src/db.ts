import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
require('dotenv').config();

//Create a PostgresSQL connection pool
const pool = new Pool({
    user: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.HOST,
    database: process.env.DB_NAME,
    port: parseInt(process.env.PORT || '5432'),
    connectionTimeoutMillis: 5000,
    connectionString: process.env.DB_CONNECTION_STRING
});

export default pool;