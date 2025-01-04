import express from "express";
import { env } from "./infra/env/env";
import { logger } from "./infra/logger";

const app = express();

app.use(express.json());

app.listen(env.PORT, () => logger.info("Server is running"));
