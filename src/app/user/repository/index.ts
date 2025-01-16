import { PrismaService } from "../../../infra/database";

export class UserRepositories {
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: { name: string; email: string; password: string }) {
    await this.prismaService.user.create({
      data: {
        name: input.name,
        email: input.email,
        password: input.password,
      },
    });
  }

  async findByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    return user;
  }

  async findById(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }
}
