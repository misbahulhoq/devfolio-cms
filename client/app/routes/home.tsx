import { makeTitle } from "@/lib/meta";
import type { Route } from "./+types/home";
import LandingPage from "@/pages/landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: makeTitle() },
    {
      name: "description",
      content: "A central place for your portfolio contents",
    },
  ];
}

export default function Home() {
  return <LandingPage />;
}
