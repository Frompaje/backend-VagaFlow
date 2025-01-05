import { beforeEach, describe, expect, test, vi } from "vitest";
import { UserRepositories } from "..";
import { mock } from "vitest-mock-extended";
import { mockRepository } from "./mock";
import { response } from "express";

describe("Repositoy User", () => {
  let repository: UserRepositories;

  beforeEach(() => {
    repository = mock<UserRepositories>(mockRepository);
  });

  test("[Sucess] Should have found an user", async () => {
    const response = {
      id: "user-id-123",
      name: "john doe",
      password: "123QWE!@#",
      email: "example@gmail.com ",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    vi.spyOn(repository, "findByEmail").mockResolvedValueOnce(response);
    const input = {
      email: "example@email.com",
    };

    const sut = await repository.findByEmail(input.email);

    expect(repository.findByEmail).toBeCalledTimes(1);
    expect(sut).toEqual(response);
  });
});
