import LoginForm from "@/components/auth/login-form";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login | Devfolio CMS" },
    {
      name: "description",
      content: "Login to your Devfolio CMS account",
    },
  ];
}

const Signin = () => {
  return <LoginForm />;
};

export default Signin;
