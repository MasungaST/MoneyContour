import express, { Express, Request, Response } from"express";
import dotenv from "dotenv";
import pool from "./db";
import bodyParser = require("body-parser");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
    res.send("MoneyContour Server");
});

//Test the database connection
pool.connect((err, client, done) => {
    if (err) {
        console.error('Error connection to the MoneyContour database:', err);
    } else {
        console.log("Connected to the MoneyContour database");
    }
})

app.listen(port, () => {
    console.log(`[server]: running at https://localhost:${port}`);
})


