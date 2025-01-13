import { Express } from "express";
import userRouter from "../../app/user/router";
import jobRouter from "../../app/job/router";

export function rootRouter(app: Express) {
  app.use("/user", userRouter);
  app.use("/job", jobRouter);
}
