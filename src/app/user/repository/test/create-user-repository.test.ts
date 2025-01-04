import { describe, test, expect, vi, beforeEach } from "vitest";
import { UserRepositories } from "..";
import { mockRepository } from "./mock";
import { mock } from "vitest-mock-extended";

describe("Repository User", () => {
  let repository: UserRepositories;

  beforeEach(() => {
    repository = mock<UserRepositories>(mockRepository);
  });

  test("[Sucess] Shoud be create a user", async () => {
    const input = {
      name: "John Doe",
      email: "example@email.com",
      password: "password",
    };

    await repository.create(input);

    expect(repository.create).toBeCalledTimes(1);
  });
});
