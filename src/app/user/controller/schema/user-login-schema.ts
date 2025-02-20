import z from "zod";

export const userLoginSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty(),
});
