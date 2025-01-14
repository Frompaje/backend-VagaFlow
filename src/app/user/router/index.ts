import { Router } from "express";
import { UserController } from "../controller";

const userRouter = Router();

const { create, login } = new UserController();

userRouter.post("/signUp", create);
userRouter.post("/signIn", login);

export default userRouter;
