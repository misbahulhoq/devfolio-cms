import {
  FolderOpen,
  Award,
  Briefcase,
  Key,
  Settings,
  FileText,
  HelpCircle,
} from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="bg-muted/20 w-[280px] h-screen fixed left-0 top-0 border-r border-border flex flex-col py-6 px-4 z-20">
      {/* Header */}
      <div className="mb-10 flex items-center gap-4">
        <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold shrink-0">
          DF
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold leading-tight">DevFolio CMS</span>
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
  );
}
