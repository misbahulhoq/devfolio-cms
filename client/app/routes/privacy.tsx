import PrivacyPolicyPage from "@/pages/privacy";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy | Devfolio CMS" },
    {
      name: "description",
      content: "Login to your Devfolio CMS account",
    },
  ];
}

export default function Privacy() {
  return <PrivacyPolicyPage />;
}
