import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ArrowLeft, MailCheck } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from "../shared/logo";
import { Link } from "react-router";

// 1. Define the validation schema
const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  // 2. Initialize the form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // 3. Handle submission
  function onSubmit(data: ForgotPasswordValues) {
    setSubmittedEmail(data.email);
    setIsSubmitted(true);
    // Add your API call here to actually send the reset link
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background p-4 relative antialiased">
      {/* Background Pattern - using semantic border variables instead of hardcoded RGBA */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          backgroundPosition: "center top",
          opacity: 0.3,
        }}
      />

      {/* Main Container */}
      <main className="w-full max-w-[440px] flex flex-col items-center relative z-10">
        {/* Card Container */}
        <Card className="w-full p-8 md:p-12 relative overflow-hidden shadow-lg border-border bg-card">
          {/* Decorative Tech Corner */}
          <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-border/50 flex items-end justify-start p-1">
            <div className="w-1 h-1 bg-border rounded-full" />
          </div>

          {/* Conditional Rendering based on state */}
          {!isSubmitted ? (
            /* View 1: Request Reset */
            <div className="flex flex-col animate-in fade-in zoom-in-95 duration-300 gap-y-2">
              <div className="flex justify-center">
                <Logo />
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-2 text-center">
                Reset your password
              </h2>
              <p className="text-muted-foreground mb-8 text-sm text-center">
                Enter your email address and we'll send you a link to reset your
                password.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-4"
              >
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-xs text-muted-foreground uppercase tracking-wider"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@devfolio.io"
                    className="bg-secondary/20 focus-visible:ring-2 focus-visible:ring-primary/20 transition-all placeholder:text-muted-foreground/50"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm font-medium text-destructive px-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full font-mono mt-4 flex items-center justify-center gap-2 group transition-all"
                >
                  Send Reset Link
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border/50 text-center">
                <Link
                  to="/signin"
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center justify-center gap-1 group"
                >
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to Signin</span>
                </Link>
              </div>
            </div>
          ) : (
            /* View 2: Success (Confirmation) */
            <div className="flex flex-col items-center text-center animate-in slide-in-from-right-4 fade-in duration-300">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mb-4 text-primary">
                <MailCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Check your email
              </h2>
              <p className="text-muted-foreground mb-8 text-sm">
                If an account exists for{" "}
                <span className="text-foreground font-mono font-medium">
                  {submittedEmail}
                </span>
                , you will receive a password reset link shortly.
              </p>

              <Button
                variant="outline"
                className="w-full font-mono flex items-center justify-center hover:bg-secondary transition-colors"
                onClick={() => {
                  // Reset state if they want to try another email
                  setIsSubmitted(false);
                }}
              >
                Back to Login
              </Button>
            </div>
          )}
        </Card>
      </main>
    </div>
  );
}
