import RegistrationForm from "@/components/auth/signup-form";
import type { Route } from "../+types/home";
import { makeTitle } from "@/lib/meta";

export function meta({}: Route.MetaArgs) {
  return [
    { title: makeTitle("Register") },
    {
      name: "description",
      content: "Register to your Devfolio CMS account",
    },
  ];
}

const Signup = () => {
  return <RegistrationForm />;
};

export default Signup;
