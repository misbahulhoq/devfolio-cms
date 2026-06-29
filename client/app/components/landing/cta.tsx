import { ArrowRight } from "lucide-react";

import { Link } from "react-router";
import { Button } from "@/components/ui/button";

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
        <Button asChild className="mt-8" size={"lg"}>
          <Link to="/signup">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
