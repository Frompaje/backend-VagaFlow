import { Router } from "express";
import { UserController } from "../controller";

const userRouter = Router();

const { create } = new UserController();


userRouter.post("/signUp",create)


export default userRouter
