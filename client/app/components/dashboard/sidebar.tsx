import {
  Award,
  Briefcase,
  FileText,
  FolderOpen,
  HelpCircle,
  Settings,
  X,
} from "lucide-react";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";

const mainLinks = [
  { to: "/dashboard", label: "Projects", icon: FolderOpen },
  { to: "/dashboard/skills", label: "Skills", icon: Award },
  { to: "/dashboard/experience", label: "Experience", icon: Briefcase },
  { to: "/dashboard/settings", label: "Profile Settings", icon: Settings },
];

const footerLinks = [
  { to: "/docs", label: "Documentation", icon: FileText },
  { to: "/support", label: "Support", icon: HelpCircle },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 left-[min(280px,calc(100vw-2rem))] z-40 bg-background/20 backdrop-blur-[1px] transition-opacity duration-300 lg:hidden",
          {
            "opacity-100 pointer-events-auto": isOpen,
            "opacity-0 pointer-events-none": !isOpen,
          },
        )}
        onClick={onToggle}
      />

      <nav
        className={cn(
          "bg-background fixed left-0 top-0 z-50 flex h-dvh w-[min(280px,calc(100vw-2rem))] flex-col overflow-y-auto border-r border-border px-4 py-5 transition-transform duration-300 sm:py-6 lg:w-[280px]",
          "lg:translate-x-0",
          {
            "translate-x-0": isOpen,
            "-translate-x-full": !isOpen,
          },
        )}
      >
        {/* Header */}
        <div className="mb-8 flex items-center justify-between gap-3 sm:mb-10">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md text-xl font-bold text-primary-foreground">
              <img src="/logo.svg" alt="DevFolio CMS" className="h-9" />
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-lg font-bold leading-tight sm:text-xl">
                DevFolio CMS
              </span>
              <span className="truncate text-sm text-muted-foreground">
                Personal Workspace
              </span>
            </div>
          </div>
          <button
            onClick={onToggle}
            className="rounded-md p-1 text-muted-foreground hover:text-foreground lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Main Navigation */}
        <ul className="flex flex-1 flex-col gap-2">
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
                      className={cn("size-5 shrink-0", {
                        "text-primary": isActive,
                      })}
                    />
                    <span className="truncate text-sm">{link.label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Footer Navigation */}
        <div className="mt-auto border-t border-border pt-4">
          <ul className="flex flex-col gap-2">
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
                  <link.icon className="size-5 shrink-0" />
                  <span className="truncate text-sm">{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
