import { Router } from "express";
import { UserController } from "../controller/user";

export const router = Router();

const { create } = new UserController();

router.post("/",create);
