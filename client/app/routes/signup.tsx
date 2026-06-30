import RegistrationForm from "@/components/auth/signup-form";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register | Devfolio CMS" },
    {
      name: "description",
      content: "A central place for your portfolio contents",
    },
  ];
}

const Signup = () => {
  return <RegistrationForm />;
};

export default Signup;
