import {
  FolderOpen,
  Award,
  Briefcase,
  Settings,
  FileText,
  HelpCircle,
} from "lucide-react";
import { NavLink } from "react-router";

const mainLinks = [
  { to: "/dashboard/projects", label: "Projects", icon: FolderOpen },
  { to: "/dashboard/skills", label: "Skills", icon: Award },
  { to: "/dashboard/experience", label: "Experience", icon: Briefcase },
  { to: "/dashboard/settings", label: "Profile Settings", icon: Settings },
];

const footerLinks = [
  { to: "/docs", label: "Documentation", icon: FileText },
  { to: "/support", label: "Support", icon: HelpCircle },
];

export default function Sidebar() {
  return (
    <nav className="bg-muted/20 w-[280px] h-screen fixed left-0 top-0 border-r border-border flex flex-col py-6 px-4 z-20">
      {/* Header */}
      <div className="mb-10 flex items-center gap-4">
        <div className="w-10 h-10 rounded-md flex items-center justify-center text-primary-foreground text-xl font-bold shrink-0">
          <img src="/logo.svg" alt="DevFolio CMS" className="h-9" />
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
        {mainLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-3 py-2 px-3 rounded-md active:scale-[0.98] duration-150 ${
                  isActive
                    ? "text-foreground font-bold border-l-2 border-primary bg-primary/10 transition-transform"
                    : "text-muted-foreground font-medium hover:bg-accent hover:text-foreground transition-colors"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <link.icon
                    className={`w-5 h-5 ${isActive ? "text-primary" : ""}`}
                  />
                  <span className="text-sm">{link.label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Footer Navigation */}
      <div className="mt-auto border-t border-border pt-4">
        <ul className="space-y-2">
          {footerLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 py-2 px-3 rounded-md font-medium hover:bg-accent hover:text-foreground transition-colors active:scale-[0.98] duration-150 ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`
                }
              >
                <link.icon className="w-5 h-5" />
                <span className="text-sm">{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
