import { Request, Response } from "express";
import { UserCreateSchema } from "./schema/user-create-schema";
import { UserRepositories } from "../../../app/user/repository";
import { PrismaService } from "../../database";
import { CreateUserUseCase } from "../../../app/user/usecase/create-user-usecase";

export class UserController {
  async create(req: Request, res: Response) {
    const { email, name, password } = UserCreateSchema.parse(req.body);

    const prismaService = new PrismaService();
    const repository = new UserRepositories(prismaService);
    const useCase = new CreateUserUseCase(repository);

    await useCase.execute({ name, email, password });

    res.status(201).send("Usuário criado com sucesso");
  }
}
