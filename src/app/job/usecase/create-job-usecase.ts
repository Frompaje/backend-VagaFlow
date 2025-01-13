import { JobRepositoy } from "../repository";

export class CreateJobUseCase {
  constructor(private readonly repository: JobRepositoy) {}

  async execute(input: Input) {
    await this.repository.create(input)
  }
}

type Input = {
  recruiterName: string;
  message: string;
  position: string;
  company: string;
  companyLink: string;
  vacancyLink: string;
  recruiterProfileLink: string;
  userId: string;
};
