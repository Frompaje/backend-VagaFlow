import { Router } from "express";
import { UserController } from "../../../infra/controller/user";

const userRouter = Router();

const { create } = new UserController();


userRouter.post("/signUp",create)


export default userRouter
