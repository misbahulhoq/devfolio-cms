import type { Route } from "./+types/home";
import LandingPage from "~/pages/landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Devfolio CMS" },
    {
      name: "description",
      content: "A central place for your portfolio contents",
    },
  ];
}

export default function Home() {
  return <LandingPage />;
}
