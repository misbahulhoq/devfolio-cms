import { Link, redirect } from "react-router";
import { apiClient } from "@/lib/api-client";
import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { Button } from "@/components/ui/button";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const {
    mutate: verifyEmail,
    isPending,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: async () => {
      await apiClient.post("/auth/verify-email", { token });
    },
    onSuccess: () => {
      redirect("/login");
    },
  });

  useEffect(() => {
    verifyEmail();
  }, []);

  if (isPending) {
    return (
      <div className="h-screen py-5 px-8">
        <p className="font-bold text-center">Please wait. Verifying... </p>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="h-screen py-5 px-8">
        <p className="text-success font-bold text-center">
          Email verified successfully. Redirecting to login.
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen py-10 px-8">
        <p className="text-destructive font-bold text-center">
          Email verification failed
        </p>

        <div className="flex justify-center mt-4">
          <Button asChild className="mx-auto">
            <Link to="/request-verification-link" className="">
              Request a new link
            </Link>
          </Button>
        </div>
      </div>
    );
  }
};

export default VerifyEmail;
