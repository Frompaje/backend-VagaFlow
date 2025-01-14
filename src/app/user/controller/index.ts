import { Request, Response } from "express";
import { UserCreateSchema } from "./schema/user-create-schema";
import { UserRepositories } from "../repository";
import { PrismaService } from "../../../infra/database";
import { CreateUserUseCase } from "../usecase/create-user-usecase";
import { userLoginSchema } from "./schema/user-login-schema";
import { LoginUserUseCase } from "../usecase/login-user-usecase";
import * as jwt from "jsonwebtoken";
import { env } from "../../../infra/env/env";

export class UserController {
  async create(req: Request, res: Response) {
    const { email, name, password } = UserCreateSchema.parse(req.body);

    const prismaService = new PrismaService();
    const repository = new UserRepositories(prismaService);
    const useCase = new CreateUserUseCase(repository);

    await useCase.execute({ name, email, password });

    res.status(201).send("Usuário criado com sucesso");
  }

  async login(req: Request, res: Response) {
    const { email, password } = userLoginSchema.parse(req.body);

    const prismaService = new PrismaService();
    const repository = new UserRepositories(prismaService);
    const usecase = new LoginUserUseCase(repository);

    const user = await usecase.execute({ email, password });

    const token = jwt.sign(
      {
        sub: {
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
          },
        },
      },
      env.SECRET_JWT
    );

    res.status(200).send({
      user: user.name,
      token,
    });
  }
}
