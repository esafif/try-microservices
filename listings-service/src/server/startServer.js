import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import accessEnv from "#root/helpers/accessEnv";

const PORT = accessEnv("PORT", 7100);

const app = express()

app.use(
    cors({
        origin: (origin, cb) => cb(null, true),
        credentials: true
    })
);

app.listen(PORT, "0.0.0.0", () =>{
    console.info(`Listings seervices listening on ${PORT}`)
})