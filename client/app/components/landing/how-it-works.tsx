import { Database, SquareTerminal, UserRoundPlus } from "lucide-react";

const steps = [
  {
    title: "Register",
    description:
      "Create an account and set up your portfolio profile in minutes.",
    icon: UserRoundPlus,
  },
  {
    title: "Add your data",
    description:
      "Enter projects, skills, and experience. Add links, tech stacks, and images once. Update anywhere.",
    icon: Database,
  },
  {
    title: "Fetch via API",
    description:
      "Query your data from any frontend. No authentication required for public endpoints.",
    icon: SquareTerminal,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="border-t border-border py-20">
      <h2 className="mb-12 text-3xl font-bold text-foreground">How it works</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <StepCard
              key={step.title}
              {...step}
              serial={index + 1}
              Icon={Icon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksSection;

function StepCard({
  Icon,
  title,
  description,
}: {
  serial: number;
  Icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className={"bg-card p-6 border rounded-lg"}>
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
