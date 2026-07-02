import { Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectHome = () => {
  return (
    <main className="">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Projects</h1>
        <p className="text-lg text-muted-foreground">
          Manage your portfolio projects and case studies.
        </p>
      </div>

      {/* Empty State Container */}
      <div className="w-full max-w-4xl mx-auto mt-24 flex flex-col items-center justify-center text-center p-12 border border-border rounded-lg bg-card shadow-sm">
        {/* Technical Graphic Placeholder */}
        <div className="w-32 h-32 mb-6 relative opacity-70">
          <svg
            className="w-full h-full"
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

        <h2 className="text-2xl font-semibold mb-3">No projects found</h2>
        <p className="text-base text-muted-foreground mb-8 max-w-md">
          Your workspace is currently empty. Start by creating a new project to
          showcase your work or import from an existing repository.
        </p>

        <div className="flex gap-4">
          <Button className="gap-2 font-medium">
            <Plus className="w-4 h-4" />
            Create Project
          </Button>
          <Button variant="outline" className="gap-2 font-medium">
            <Download className="w-4 h-4" />
            Import Data
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ProjectHome;
