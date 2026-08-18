import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  // auth
  route("signup", "routes/auth/signup.tsx"),
  route("signin", "routes/auth/signin.tsx"),
  route("forgot-password", "routes/auth/forgot-password.tsx"),
  route("verify-email", "routes/auth/verify-email.tsx"),
  route("resend-verification-link", "routes/auth/resend-verification-link.tsx"),

  route("privacy", "routes/privacy.tsx"),
  route("terms-of-service", "routes/terms.tsx"),

  // dashboard
  layout("routes/dashboard/layout.tsx", [
    route("dashboard", "routes/dashboard/index.tsx"),

    route("dashboard/projects", "routes/dashboard/projects/index.tsx"),
  ]),
] satisfies RouteConfig;
