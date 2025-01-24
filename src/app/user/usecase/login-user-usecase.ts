import { compareSync } from "bcryptjs";
import { UserRepositories } from "../repository";
import { UserInvalidData } from "../../../shared/error/user-invalid-data-error";
import { UserPasswordNotMatchedError } from "../../../shared/error/user-password-not-matched-error.ts.";

export class LoginUserUseCase {
  constructor(private readonly repository: UserRepositories) {}

  async execute({ email, password }: Input) {
    if (!email || !password) {
      throw new UserInvalidData();
    }

    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new UserInvalidData();
    }

    const isSamePassword = compareSync(password, user.password);

    if (!isSamePassword) {
      throw new UserPasswordNotMatchedError();
    }

    return user;
  }
}

type Input = {
  email: string;
  password: string;
};
