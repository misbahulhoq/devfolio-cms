import { CheckCircle2 } from "lucide-react";
import React from "react";

const IncludedSection = () => {
  return (
    <section className="border-t border-border py-20">
      <h2 className="mb-8 text-3xl font-bold text-foreground">
        What's included
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          "Projects (images, links, tech stack)",
          "Skills (with proficiency levels)",
          "Work experience (roles, descriptions)",
          "Public API (no auth required)",
        ].map((item) => (
          <div
            key={item}
            className="flex gap-3 rounded-lg border border-border bg-card p-4"
          >
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
            <p className="text-sm font-medium text-foreground">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IncludedSection;
