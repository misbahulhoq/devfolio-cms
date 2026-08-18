import { makeTitle } from "@/lib/meta";
import TermsOfServicePage from "@/components/pages/terms";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: makeTitle("Terms") },
    {
      name: "description",
      content: "Terms of Service for DevFolio CMS",
    },
  ];
}

export default function Terms() {
  return <TermsOfServicePage />;
}
