import express, { Express, Request, Response } from "express"; // Removed express() from the import statement
import dotenv from "dotenv";
import bodyParser = require("body-parser");
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";
import resolvers from "./resolvers/resolvers";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.get("/", (_, res: Response) => {
    res.send("MoneyContour Server");
});

// Setup GraphQL schema
app.use("/graphql", graphqlHTTP ({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
    customFormatErrorFn: (err) => ({
        message: err.message,
        locations: err.locations,
        stack: process.env.NODE_ENV === "development" ? err.stack : null
    })
}));

// Simple error handling
app.use((err: any, _: Request, res: Response) => { 
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
    console.log(`[server]: running at https://localhost:${port}/graphql`);
});


