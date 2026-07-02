import { Outlet } from "react-router";
import Sidebar from "@/components/dashboard/sidebar";
import TopAppBar from "@/components/dashboard/top-app-bar";

const DashboardLayout = () => {
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
      <Sidebar />
      <TopAppBar />
      <main className="ml-[280px] mt-16 p-8 min-h-[calc(100vh-64px)] relative z-10">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
