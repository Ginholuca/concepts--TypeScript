import express from "express";

import { helloDude } from "./routes";

const app = express();

app.get("/", helloDude);

app.listen(3333);
