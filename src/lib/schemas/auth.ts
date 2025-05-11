import { z } from "zod"

export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
  expiresInMins: z.number().default(30),
})

export type LoginFormData = z.infer<typeof loginSchema>
