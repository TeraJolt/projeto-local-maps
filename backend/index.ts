import "reflect-metadata";
import express from 'express';
import {createConnection} from "typeorm";
import cors from "cors";
import * as StoreController from './src/controller/StoreController';
import { Store } from "./src/entity/Store";

const PORT = 3000;


async function startup() {
    await createConnection();
    const app = express();

    app.use(express.json());
    app.use(cors());

    app.post("/store", StoreController.save);
    app.get("/store", StoreController.getAll);

    app.listen(PORT, () => {
        console.log('App running on port: ' + PORT)
    })
}

startup();