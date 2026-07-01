import {
  FolderOpen,
  Award,
  Briefcase,
  Key,
  Settings,
  FileText,
  HelpCircle,
  Search,
  Bell,
  Plus,
  Download,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ProjectsDashboard() {
  return (
    <div className="bg-background text-foreground min-h-screen relative overflow-hidden">
      {/* Data Loom Background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* SideNavBar */}
      <nav className="bg-muted/20 w-[280px] h-screen fixed left-0 top-0 border-r border-border flex flex-col py-6 px-4 z-20">
        {/* Header */}
        <div className="mb-10 flex items-center gap-4">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold shrink-0">
            DF
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-tight">
              DevFolio CMS
            </span>
            <span className="text-sm text-muted-foreground">
              Personal Workspace
            </span>
          </div>
        </div>

        {/* Main Navigation */}
        <ul className="flex-1 space-y-2">
          {/* Projects (Active) */}
          <li>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-3 rounded-md text-foreground font-bold border-l-2 border-primary bg-primary/10 active:scale-[0.98] transition-transform duration-150"
            >
              <FolderOpen className="w-5 h-5 text-primary" />
              <span className="text-sm">Projects</span>
            </a>
          </li>
          {/* Skills */}
          <li>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-3 rounded-md text-muted-foreground font-medium hover:bg-accent hover:text-foreground transition-colors active:scale-[0.98] duration-150"
            >
              <Award className="w-5 h-5" />
              <span className="text-sm">Skills</span>
            </a>
          </li>
          {/* Experience */}
          <li>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-3 rounded-md text-muted-foreground font-medium hover:bg-accent hover:text-foreground transition-colors active:scale-[0.98] duration-150"
            >
              <Briefcase className="w-5 h-5" />
              <span className="text-sm">Experience</span>
            </a>
          </li>
          {/* API Keys */}
          <li>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-3 rounded-md text-muted-foreground font-medium hover:bg-accent hover:text-foreground transition-colors active:scale-[0.98] duration-150"
            >
              <Key className="w-5 h-5" />
              <span className="text-sm">API Keys</span>
            </a>
          </li>
          {/* Profile Settings */}
          <li>
            <a
              href="#"
              className="flex items-center gap-3 py-2 px-3 rounded-md text-muted-foreground font-medium hover:bg-accent hover:text-foreground transition-colors active:scale-[0.98] duration-150"
            >
              <Settings className="w-5 h-5" />
              <span className="text-sm">Profile Settings</span>
            </a>
          </li>
        </ul>

        {/* Footer Navigation */}
        <div className="mt-auto border-t border-border pt-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 py-2 px-3 rounded-md text-muted-foreground font-medium hover:bg-accent hover:text-foreground transition-colors active:scale-[0.98] duration-150"
              >
                <FileText className="w-5 h-5" />
                <span className="text-sm">Documentation</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 py-2 px-3 rounded-md text-muted-foreground font-medium hover:bg-accent hover:text-foreground transition-colors active:scale-[0.98] duration-150"
              >
                <HelpCircle className="w-5 h-5" />
                <span className="text-sm">Support</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* TopAppBar */}
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-16 w-[calc(100%-280px)] fixed top-0 right-0 border-b border-border flex items-center justify-between px-8 z-10 transition-colors">
        {/* Left Nav Links */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-4">
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Analytics
            </a>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground active:opacity-80">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground active:opacity-80">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-md bg-secondary ml-2 border border-border flex items-center justify-center overflow-hidden">
            <img
              src="/placeholder-avatar.jpg"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <Button className="ml-4 gap-2 font-medium">
            <Plus className="w-4 h-4" />
            New Project
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="ml-[280px] mt-16 p-8 min-h-[calc(100vh-64px)] relative z-10">
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
            Your workspace is currently empty. Start by creating a new project
            to showcase your work or import from an existing repository.
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
    </div>
  );
}
