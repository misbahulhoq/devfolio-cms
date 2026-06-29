import { ArrowRight } from "lucide-react";
import React from "react";

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
          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90">
            Get Started <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Right: Live Example */}
        <div className="rounded-lg border border-border bg-card p-6">
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
