import { Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectHome = () => {
  return (
    <main className="w-full min-w-0">
      {/* Page Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          Manage your portfolio projects and case studies.
        </p>
      </div>

      {/* Empty State Container */}
      <div className="mx-auto mt-10 flex w-full max-w-4xl flex-col items-center justify-center rounded-lg border border-border bg-card p-6 text-center shadow-sm sm:mt-16 sm:p-10 lg:mt-24 lg:p-12">
        {/* Technical Graphic Placeholder */}
        <div className="relative mb-6 size-24 opacity-70 sm:size-32">
          <svg
            className="size-full"
            fill="none"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="hsl(var(--border))"
              strokeDasharray="4 4"
              strokeWidth="1"
            />
            <rect
              x="35"
              y="45"
              width="30"
              height="20"
              rx="2"
              stroke="hsl(var(--border))"
              strokeWidth="1"
            />
            <path
              d="M40 50h20M40 55h10"
              stroke="hsl(var(--border))"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <circle cx="50" cy="35" r="4" fill="hsl(var(--primary))" />
            <path d="M50 39v6" stroke="hsl(var(--border))" strokeWidth="1" />
          </svg>
        </div>

        <h2 className="mb-3 text-xl font-semibold sm:text-2xl">
          No projects found
        </h2>
        <p className="mb-8 max-w-md text-sm text-muted-foreground sm:text-base">
          Your workspace is currently empty. Start by creating a new project to
          showcase your work or import from an existing repository.
        </p>

        <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Button className="font-medium">
            <Plus data-icon="inline-start" />
            Create Project
          </Button>
          <Button variant="outline" className="font-medium">
            <Download data-icon="inline-start" />
            Import Data
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ProjectHome;
