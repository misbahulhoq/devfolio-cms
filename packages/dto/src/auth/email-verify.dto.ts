import { z } from "zod/v3"; // or 'zod/v4'

export const emailVerifySchema = z.object({
  token: z.string(),
});
