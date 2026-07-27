// packages/dto/src/auth/register.dto.ts
import { z } from "zod/v3"; // or 'zod/v4'

export const USERNAME_PATTERN = /^[a-z0-9][a-z0-9-]{1,28}[a-z0-9]$/;
export const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters." })
    .max(20, { message: "Username cannot exceed 20 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email cannot exceed 100 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export type RegisterDto = z.infer<typeof registerSchema>;

// export { USERNAME_PATTERN, PASSWORD_PATTERN };
