import { Router } from "express";
import { JobController } from "../controller";
import { AuthMiddleware } from "../../../infra/middlewares/auth";

const jobRouter = Router();
const { create } = new JobController();
const { verifyToken } = new AuthMiddleware();

jobRouter.post("/", verifyToken, create);

export default jobRouter;
