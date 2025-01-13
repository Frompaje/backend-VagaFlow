import { PrismaService } from "../../../infra/database";
import { CreateInput } from "./types/create-job-types";
import { ListInput } from "./types/list-job-types";

export class JobRepositoy {
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: CreateInput) {
    await this.prismaService.job.create({
      data: {
        recruiterName: input.recruiterName,
        company: input.company,
        companyLink: input.companyLink,
        message: input.message,
        position: input.position,
        recruiterProfileLink: input.recruiterProfileLink,
        vacancyLink: input.vacancyLink,
        userId: input.userId,
      },
    });
  }

  async list(userId: string, data: ListInput) {
    return await this.prismaService.job.findMany({
      where: {
        userId,
        OR: [
          "recruiterName",
          "position",
          "message",
          "company",
          "companyLink",
          "vacancyLink",
          "recruiterProfileLink",
        ].map((value) => ({
          [value]: {
            contains: data.search,
            mode: "insensitive",
          },
        })),
      },
      take: data.take,
      skip: (data.page - 1) * data.take,
      select: {
        id: true,
        recruiterName: true,
        position: true,
        message: true,
        company: true,
        companyLink: true,
        vacancyLink: true,
        recruiterProfileLink: true,
      },
    });
  }

  count(userId: string, search?: string):Promise<Number> {
    return this.prismaService.job.count({
      where: {
        userId,
        OR: [
          "recruiterName",
          "position",
          "message",
          "company",
          "companyLink",
          "vacancyLink",
          "recruiterProfileLink",
        ].map((value) => ({
          [value]: {
            contains:search,
            mode: "insensitive",
          },
        })),
      },
    });
  }
}
