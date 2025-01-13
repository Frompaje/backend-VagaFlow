import { beforeEach, describe, expect, test } from "vitest";
import { JobRepositoy } from "..";
import { mock } from "vitest-mock-extended";
import { mockRepository } from "./mock";

describe("Job Repository", () => {
  let repository: JobRepositoy;

  beforeEach(() => {
    repository = mock<JobRepositoy>(mockRepository);
  });

  test("Should create a job", async () => {
    const input = {
      recruiterName: "Jane Doe",
      position: "Software Engineer",
      message: "We are excited to invite you to join our team!",
      company: "TechCorp",
      companyLink: "https://www.techcorp.com",
      vacancyLink: "https://www.techcorp.com/careers/software-engineer",
      recruiterProfileLink: "https://www.linkedin.com/in/janedoe",
      userId:"12-31-3dsa-ed"
    };

    await repository.create(input);

    expect(repository.create).toBeCalledTimes(1);
    expect(repository.create).toBeCalledWith(input);
  });
});
