import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  // auth
  route("signup", "routes/signup.tsx"),
  route("signin", "routes/signin.tsx"),
  route("forgot-password", "routes/forgot-password.tsx"),

  route("privacy", "routes/privacy.tsx"),
  route("terms-of-service", "routes/terms.tsx"),

  // dashboard
  layout("routes/dashboard/layout.tsx", [
    route("dashboard", "routes/dashboard/index.tsx"),

    route("dashboard/projects", "routes/dashboard/projects/index.tsx"),
  ]),
] satisfies RouteConfig;
