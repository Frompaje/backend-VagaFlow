import { beforeEach, describe, expect, test, vi } from "vitest";
import { UserRepositories } from "../../repository";
import { CreateUserUseCase } from "../create-user-usecase";
import { mock } from "vitest-mock-extended";
import { mockRepository } from "../../repository/test/mock";
import { UserAlreadyExistsError } from "../../../../shared/error/user-already-exists-error";

describe("User UseCase", () => {
  let repository: UserRepositories;
  let usecase: CreateUserUseCase;

  beforeEach(() => {
    repository = mock<UserRepositories>(mockRepository);
    usecase = new CreateUserUseCase(repository);
  });

  test("[Sucess] Should be create an user ", async () => {
    const input = {
      name: "John Doe",
      email: "email@example.com",
      password: "asdQWE123!@#",
    };

    vi.spyOn(usecase, "execute");
    await usecase.execute(input);

    expect(usecase.execute).toBeCalledTimes(1);
  });

  test("[Fail] Show an error if the user already exists", async () => {
    const input = {
      name: "John Doe",
      email: "example@gmail.com",
      password: "asdQWE123!@#",
    };

    const outputRepository = {
      id: "user-id-123",
      name: "john doe",
      password: "123QWE!@#",
      email: "example@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    vi.spyOn(repository, "findByEmail").mockResolvedValueOnce(outputRepository);

    expect(async () => await usecase.execute(input)).rejects.toThrow(
      UserAlreadyExistsError
    );
  });
});
