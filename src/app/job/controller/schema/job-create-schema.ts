import { z } from "zod";

export const CreateJobSchema = z.object({
  recruiterName: z.string(),
  message: z.string(),
  company: z.string(),
  position:z.string(),
  companyLink: z.string(),
  vacancyLink: z.string(),
  recruiterProfileLink: z.string(),
  userId: z.string(),
});
