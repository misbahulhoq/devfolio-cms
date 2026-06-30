import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("signup", "routes/signup.tsx"),
  route("login", "routes/login.tsx"),
  route("privacy", "routes/privacy.tsx"),
  route("terms-of-service", "routes/terms.tsx"),
] satisfies RouteConfig;
