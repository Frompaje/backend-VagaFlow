import { beforeEach, describe, expect, test, vi } from "vitest";
import { UserRepositories } from "../../repository";
import { LoginUserUseCase } from "../login-user-usecase";
import { mock } from "vitest-mock-extended";
import { mockRepository } from "../../repository/test/mock";
import { MakeUser } from "../../../../helper/mock/make-user";

describe("[USECASE] LOGIN USER", () => {
  let repository: UserRepositories;
  let usecase: LoginUserUseCase;

  let user = MakeUser();

  beforeEach(() => {
    repository = mock<UserRepositories>(mockRepository);
    usecase = new LoginUserUseCase(repository);
  });

  test("[SUCESS] Should return a user", async () => {
    const input = {
      email: "exammple@email.com",
      password: "asdQWE123!@#",
    };

    vi.spyOn(repository, "findByEmail").mockResolvedValueOnce(user);

    const output = await usecase.execute(input);

    expect(output).toBe(user);
  });

  test("[Fail] Should show error for invalid data", () => {
    const input = {
      email: "exammple@email.com",
      password: "asdQWE123!@#",
    };

    const output = usecase.execute(input);
    
    expect(output).rejects.toThrow("[ERROR-002] Dados Invalidos")
  });
});
