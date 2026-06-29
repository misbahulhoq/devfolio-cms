import CTASection from "~/components/landing/cta";
import ExampleSection from "~/components/landing/example";
import HeroSection from "~/components/landing/hero";
import HowItWorksSection from "~/components/landing/how-it-works";
import IncludedSection from "~/components/landing/included";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <HeroSection />

        <HowItWorksSection />

        {/* Real Example */}
        <ExampleSection />

        {/* What's Included */}
        <IncludedSection />

        {/* Final CTA */}
        <CTASection />
      </main>
    </div>
  );
}
