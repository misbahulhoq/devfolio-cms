import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, ArrowRight } from "lucide-react";

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
import Logo from "../shared/logo";
import { Link } from "react-router";

// 1. Define the validation schema
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  // 2. Initialize the form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 3. Handle submission
  function onSubmit(data: LoginFormValues) {
    console.log("Login submitted:", data);
    // Add your API routing or context logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden antialiased">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 40px 40px, hsl(var(--border)) 2px, transparent 2px), linear-gradient(to right, hsl(var(--secondary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--secondary)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "-2px -2px, 0 0, 0 0",
          maskImage:
            "radial-gradient(ellipse at center, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black, transparent 80%)",
        }}
      />

      {/* Main Content Canvas */}
      <main className="relative z-10 w-full max-w-[420px] p-4 md:p-0">
        <Card className="shadow-xl shadow-border/50">
          <CardHeader className="flex flex-col gap-2 items-center text-center pb-6">
            {/* Signature Loom Node Logo */}
            <div className="flex items-center gap-2 mb-1">
              <Logo />
            </div>
            <CardTitle className="text-2xl text-foreground">
              Login to your account
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Access your CMS dashboard and deployments.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                    placeholder="you@yours.com"
                    className="pl-10 bg-secondary/20 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 transition-all duration-200"
                    {...register("email")}
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
                <div className="flex justify-between items-end">
                  <label
                    htmlFor="password"
                    className="relative ml-3 font-mono font-medium text-foreground before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-primary after:absolute after:-left-2.5 after:top-1/2 after:w-2.5 after:h-px after:bg-border after:-z-10"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="font-mono text-xs text-primary hover:underline transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 bg-secondary/20 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 transition-all duration-200"
                    {...register("password")}
                  />
                </div>
                {errors.password && (
                  <p className="text-sm font-medium text-destructive px-3">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Action */}
              <Button
                type="submit"
                className="w-full font-mono mt-2 shadow-[0_0_12px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_16px_hsl(var(--primary)/0.5)] group transition-all"
              >
                Authenticate
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </CardContent>

          {/* Footer Meta Actions */}
          <CardFooter className="flex justify-center pt-4 border-t border-border mt-2">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-foreground hover:border-b-2 hover:border-primary transition-colors font-medium"
              >
                Create an account
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
