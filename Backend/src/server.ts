import express, { Express, Response } from "express";
import dotenv from "dotenv";
import bodyParser = require("body-parser");
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";
import resolvers from "./resolvers/resolvers";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;
//const db_port = process.env.DB_PORT || 5432;

app.use(bodyParser.json());

app.get("/", (_, res: Response) => {
    res.send("MoneyContour Server");
});

//Setup graphql schema
app.use("/graphql", graphqlHTTP ({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
    customFormatErrorFn: (err) => ({
        message: err.message,
        locations: err.locations,
        stack: process.env.NODE_ENV === "development" ? err.stack : null
    })
}))

//Test the database connection
/* pool.query('SELECT * FROM Profile')
    .then((res) => console.log(res.rows))
    .catch((err) => console.error('Error executing query', err.stack));
 */
/* async function testDB() {
    try {
        const result = await pool.query("SELECT * FROM Profile");
        console.log("Database connected! Sample data:", result.rows);
    } catch (err) {
        console.error("Error executing query", err);
    }
}
testDB(); */

app.listen(port, () => {
    console.log(`[server]: running at https://localhost:${port}/graphql`);
})


