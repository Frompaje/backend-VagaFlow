import { Router } from "express";
import { JobController } from "../controller";

const jobRouter = Router();
const { create } = new JobController();

jobRouter.post("/", create);
export default jobRouter;
