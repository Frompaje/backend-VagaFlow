import { PrismaService } from "../../../infra/database";
import { Input } from "./types/create-job-types";

export class JobRepositoy {
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: Input) {
    await this.prismaService.job.create({
      data: {
        recruiterName: input.recruiterName,
        company: input.company,
        companyLink: input.companyLink,
        message: input.message,
        position: input.position,
        recruiterProfileLink: input.recruiterProfileLink,
        vacancyLink: input.vacancyLink,
        userId:input.userId
      },
    });
  }
}
