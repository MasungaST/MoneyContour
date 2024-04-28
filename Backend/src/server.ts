import express, { Express, Request, Response } from"express";
import dotenv from "dotenv";
import pool from "./db";
import bodyParser = require("body-parser");
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";
import resolvers from "./resolvers/resolvers";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (res: Response) => {
    res.send("MoneyContour Server");
});

//Setup graphql schema
app.use("/graphql", graphqlHTTP ({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

//Test the database connection
pool.connect((err) => {
    if (err) {
        console.error('Error connection to the MoneyContour database:', err);
    } else {
        console.log("Connected to the MoneyContour database");
    }
})

app.listen(port, () => {
    console.log(`[server]: running at https://localhost:${port}/graphql`);
})


