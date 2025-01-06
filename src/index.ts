import express from "express";
import { env } from "./infra/env/env";
import { logger } from "./infra/logger";
import { router } from "./infra/router";

const app = express();

app.use(express.json());

app.use(router)

app.listen(env.PORT, () => logger.info("Server is running"));
