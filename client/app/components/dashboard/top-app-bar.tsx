import { Search, Bell, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TopAppBar() {
  return (
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
  );
}
