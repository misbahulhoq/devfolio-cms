import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Database, Mail, Lock, ArrowRight } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// 1. Define the validation schema
const registrationSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters." })
    .max(20, { message: "Username cannot exceed 20 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

type RegistrationFormValues = z.infer<typeof registrationSchema>;

export default function RegistrationForm() {
  // 2. Initialize the form
  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const { errors } = form.formState;

  // 3. Handle submission
  function onSubmit(data: RegistrationFormValues) {
    console.log("Form submitted:", data);
    // Add your API routing or context logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative z-10">
      <Card className="w-full max-w-[440px] shadow-lg border-border overflow-hidden relative">
        {/* Subtle top accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60" />

        <CardHeader className="text-center pb-6">
          <div className="mx-auto inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/50 border border-border mb-4 shadow-sm">
            <Database className="w-6 h-6 text-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">
            Create your account
          </CardTitle>
          <CardDescription className="text-sm">
            Precision content management starts here.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Username Field */}
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="relative ml-3 font-mono font-medium text-foreground before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-primary after:absolute after:-left-2.5 after:top-1/2 after:w-2.5 after:h-px after:bg-border after:-z-10"
              >
                Username
              </label>
              <div className="flex h-10 w-full items-center rounded-md border border-input bg-secondary/20 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200 overflow-hidden">
                <span className="flex items-center h-full px-3 text-sm text-muted-foreground border-r border-input bg-secondary/40 select-none">
                  devfoliocms.com/u/
                </span>
                <Input
                  id="username"
                  placeholder="johndoe"
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none bg-transparent px-3"
                  {...form.register("username")}
                />
              </div>
              {errors.username && (
                <p className="text-sm font-medium text-destructive px-3">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="relative ml-3 font-mono font-medium text-foreground before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-primary after:absolute after:-left-2.5 after:top-1/2 after:w-2.5 after:h-px after:bg-border after:-z-10"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10 bg-secondary/20 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 transition-all duration-200"
                  {...form.register("email")}
                />
              </div>
              {errors.email && (
                <p className="text-sm font-medium text-destructive px-3">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="relative ml-3 font-mono font-medium text-foreground before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-primary after:absolute after:-left-2.5 after:top-1/2 after:w-2.5 after:h-px after:bg-border after:-z-10"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 bg-secondary/20 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 transition-all duration-200"
                  {...form.register("password")}
                />
              </div>
              {errors.password && (
                <p className="text-sm font-medium text-destructive px-3">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Form Actions */}
            <div className="pt-2 flex flex-col gap-4">
              <Button
                type="submit"
                className="w-full font-mono font-bold active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Create Account
                <ArrowRight className="w-4 h-4" />
              </Button>
              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-foreground font-semibold hover:underline decoration-primary decoration-2 underline-offset-4 transition-all"
                >
                  Sign in
                </a>
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="justify-center pt-2 pb-6">
          <p className="text-center text-xs text-muted-foreground/70 max-w-xs">
            By registering, you agree to our{" "}
            <a
              href="#"
              className="hover:text-foreground transition-colors underline"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="hover:text-foreground transition-colors underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
