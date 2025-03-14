import { Pool } from 'pg';

require('dotenv').config();

//Create a PostgresSQL connection pool
const pool = new Pool({
    connectionTimeoutMillis: 5000,
    connectionString: process.env.DATABASE_URL //Connection string for Database connection
});

export default pool;