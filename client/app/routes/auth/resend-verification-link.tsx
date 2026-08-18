import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiClient } from "@/lib/api-client";
import { useMutation } from "@tanstack/react-query";
import type { SubmitEventHandler } from "react";

const RequestVerificationLink = () => {
  const { mutateAsync } = useMutation({
    mutationFn: async (email: string) => {
      await apiClient.post("/auth/resend-verification-email", { email });
    },
    onError: () => {},
  });
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const email = e.currentTarget.email.value;
      await mutateAsync(email);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <section>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <Input className="mb-2" placeholder="Enter your email" name="email" />
          <Button className="ml-auto">Resend</Button>
        </form>
      </section>
    </div>
  );
};

export default RequestVerificationLink;
