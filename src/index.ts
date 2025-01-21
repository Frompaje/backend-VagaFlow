import express from "express";
import { env } from "./infra/env/env";
import { logger } from "./infra/logger";
import { rootRouter } from "./infra/router";
import cors from "cors";


const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

rootRouter(app);

app.listen(env.PORT, () => logger.info("Server is running"));
