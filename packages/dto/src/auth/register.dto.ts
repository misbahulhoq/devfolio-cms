// packages/dto/src/auth/register.dto.ts
import { z } from "zod/v3"; // or 'zod/v4'

const USERNAME_PATTERN = /^[a-z0-9][a-z0-9-]{1,28}[a-z0-9]$/;
const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export const registerSchema = z.object({
  username: z
    .string()
    .regex(USERNAME_PATTERN, {
      message:
        "Username must be 3-20 characters, lowercase alphanumeric and hyphens only, cannot start or end with a hyphen, and no consecutive hyphens.",
    })
    .min(3, { message: "Username must be at least 3 characters." })
    .max(20, { message: "Username cannot exceed 20 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email cannot exceed 100 characters." }),
  password: z
    .string()
    .regex(PASSWORD_PATTERN, {
      message:
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.",
    })
    .min(8, { message: "Password must be at least 8 characters." })
    .max(72, { message: "Password cannot exceed 72 characters." }),
});

export type RegisterDto = z.infer<typeof registerSchema>;

export { USERNAME_PATTERN, PASSWORD_PATTERN };
