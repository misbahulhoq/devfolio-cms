import { apiClient } from "@/lib/api-client";

export function useVerifyEmail() {
  return {
    verifyEmail: async (token: string) => {
      await apiClient.post("/auth/verify-email", { token });
    },
    resendVerificationEmail: async () => {
      await apiClient.post("/auth/resend-verification-email");
    },
  };
}
