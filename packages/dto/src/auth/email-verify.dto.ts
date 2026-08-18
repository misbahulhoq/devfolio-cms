import { z } from "zod"; // or 'zod/v4'

export const emailVerifySchema = z.object({
  token: z
    .string("Token must be a string")
    .length(64, "Token must be 64 characters long"),
});

export type EmailVerifyDto = z.infer<typeof emailVerifySchema>;
