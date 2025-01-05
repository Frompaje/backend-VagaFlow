import { UserAlreadyExistsError } from "../../../shared/error/user-already-exists-error";
import { UserRepositories } from "../repository";

export class CreateUserUseCase {
  constructor(private readonly repository: UserRepositories) {}

  async execute({ name, email, password }: Input) {
    const user = await this.repository.findByEmail(email);

    if (user) {
      throw new UserAlreadyExistsError();
    }

    await this.repository.create({ name, email, password });
  }
}

type Input = {
  email: string;
  password: string;
  name: string;
};
