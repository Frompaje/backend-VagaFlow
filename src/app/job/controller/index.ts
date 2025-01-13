import { PrismaService } from "../../../infra/database";
import { JobRepositoy } from "../repository";
import { CreateJobUseCase } from "../usecase/create-job-usecase";
import { CreateJobSchema } from "./schema/job-create-schema";
import { Request, Response } from "express";

export class JobController {
  async create(req: Request, res: Response) {
    const body = CreateJobSchema.parse(req.body);

    const database = new PrismaService()
    const repository = new JobRepositoy(database)
    const usecase = new CreateJobUseCase(repository)

    await usecase.execute(body)
    
    res.status(201).send("Job Criado com sucesso!")
  }
}
