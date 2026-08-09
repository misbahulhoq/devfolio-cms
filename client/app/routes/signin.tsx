import LoginForm from "@/components/auth/login-form";
import type { Route } from "./+types/home";
import { makeTitle } from "@/lib/meta";

export function meta({}: Route.MetaArgs) {
  return [
    { title: makeTitle("Signin") },
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
