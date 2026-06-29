import React from "react";

const HowItWorksSection = () => {
  return (
    <section className="border-t border-border py-20">
      <h2 className="mb-12 text-3xl font-bold text-foreground">How it works</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {/* Step 1 */}
        <div>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-semibold text-primary">
            1
          </div>
          <h3 className="font-semibold text-foreground">Register</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Create an account and set up your portfolio profile in minutes.
          </p>
        </div>

        {/* Step 2 */}
        <div>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-semibold text-primary">
            2
          </div>
          <h3 className="font-semibold text-foreground">Add your data</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Enter projects, skills, and experience. Add links, tech stacks, and
            images once. Update anywhere.
          </p>
        </div>

        {/* Step 3 */}
        <div>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-semibold text-primary">
            3
          </div>
          <h3 className="font-semibold text-foreground">Fetch via API</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Query your data from any frontend. No authentication required for
            public endpoints.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
