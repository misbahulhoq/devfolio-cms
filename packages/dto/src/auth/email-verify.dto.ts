import { z } from "zod"; // or 'zod/v4'

export const emailVerifySchema = z.object({
  token: z
    .hex("Token must be a valid hex string")
    .length(64, "Token must be 64 characters long"),
});

export type EmailVerifyDto = z.infer<typeof emailVerifySchema>;
