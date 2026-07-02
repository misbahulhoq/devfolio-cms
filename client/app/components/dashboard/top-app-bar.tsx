import { Search, Plus, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TopAppBarProps {
  onToggleSidebar: () => void;
}

export default function TopAppBar({ onToggleSidebar }: TopAppBarProps) {
  return (
    <header
      className={cn(
        "bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed left-0 right-0 top-0 z-20 flex h-16 items-center justify-between gap-3 border-b border-border px-3 backdrop-blur transition-all duration-300 sm:px-6 lg:left-[280px] lg:px-8",
      )}
    >
      {/* Left Nav Links */}
      <div className="flex min-w-0 items-center gap-3 sm:gap-6">
        <button
          onClick={onToggleSidebar}
          className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground active:opacity-80 lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu className="size-5" />
        </button>
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
      <div className="flex shrink-0 items-center gap-1 sm:gap-2">
        <button
          className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground active:opacity-80"
          aria-label="Search"
        >
          <Search className="size-5" />
        </button>
        <div className="ml-1 flex size-8 items-center justify-center overflow-hidden rounded-md border border-border bg-secondary sm:ml-2">
          <img
            src="/placeholder-avatar.jpg"
            alt="User Avatar"
            className="size-full object-cover"
          />
        </div>
        <Button className="ml-2 hidden font-medium sm:flex lg:ml-4">
          <Plus data-icon="inline-start" />
          New Project
        </Button>
      </div>
    </header>
  );
}
