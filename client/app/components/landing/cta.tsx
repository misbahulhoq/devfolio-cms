import { ArrowRight } from "lucide-react";
import React from "react";

const CTASection = () => {
  return (
    <section className="border-t border-border py-20">
      <div className="rounded-lg bg-primary/5 border border-primary/20 p-12 text-center">
        <h2 className="text-3xl font-bold text-foreground">
          Ready to own your portfolio data?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Start building in seconds. Public API endpoints. No credit card
          required.
        </p>
        <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90">
          Get Started <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default CTASection;
