import { logger } from "../../../infra/logger";
import { UserAlreadyExistsError } from "../../../shared/error/user-already-exists-error";
import { UserRepositories } from "../repository";
import { hashSync } from "bcryptjs";

export class CreateUserUseCase {
  constructor(private readonly repository: UserRepositories) {}

  async execute({ name, email, password }: Input) {
    const user = await this.repository.findByEmail(email);

    if (user) {
      logger.error("[ERROR-001] User já existe");
      throw new UserAlreadyExistsError();
    }

    const passwordHashed = hashSync(password, 8);

    await this.repository.create({ name, email, password: passwordHashed });
    logger.info("[ USECASE ] User created successfully");
  }
}

type Input = {
  email: string;
  password: string;
  name: string;
};
