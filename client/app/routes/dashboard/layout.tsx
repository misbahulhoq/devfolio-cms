import { Outlet, useLocation } from "react-router";
import Sidebar from "@/components/dashboard/sidebar";
import TopAppBar from "@/components/dashboard/top-app-bar";
import { useState, useEffect } from "react";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Close sidebar on route change on mobile
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="bg-background text-foreground relative isolate min-h-dvh overflow-x-hidden">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(false)} />
      <TopAppBar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />

      <main className="relative z-10 mt-16 min-h-[calc(100dvh-4rem)] min-w-0 p-4 transition-all duration-300 sm:p-6 lg:ml-[280px] lg:p-8">
        <div className="mx-auto w-full max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
