import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        {/* Left: Text */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Your portfolio data in one place.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Write once, deploy everywhere. Store your projects, skills, and
            experience in DevFolio CMS. Fetch it via API—no auth, no hassle.
          </p>
          <Button asChild className="mt-8" size={"lg"}>
            <Link to="/signup">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Right: Live Example */}
        <div className="rounded-lg border border-border bg-card p-6 overflow-hidden">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            API Response
          </p>
          <pre className="mt-4 overflow-x-auto font-mono text-xs text-foreground">
            {`{
  "project": {
    "title": "DevFolio CMS",
    "description": "API-first portfolio backend",
    "tech": ["TypeScript", "React", "PostgreSQL"],
    "link": "https://devfolio.app",
    "deployed": true
  }
}`}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
