import PrivacyPolicyPage from "@/pages/privacy";

import type { Route } from "./+types/home";
import { makeTitle } from "@/lib/meta";

export function meta({}: Route.MetaArgs) {
  return [
    { title: makeTitle("Privacy Policy") },
    {
      name: "description",
      content: "Login to your Devfolio CMS account",
    },
  ];
}

export default function Privacy() {
  return <PrivacyPolicyPage />;
}
