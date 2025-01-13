import express from "express";
import { env } from "./infra/env/env";
import { logger } from "./infra/logger";
import { rootRouter } from "./infra/router";

const app = express();

app.use(express.json());

rootRouter(app);

app.listen(env.PORT, () => logger.info("Server is running"));
