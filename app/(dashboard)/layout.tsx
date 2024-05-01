import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      {/* side bar */}
      <div className="hidden md:h-full md:flex md:flex-col md:w-72 md:fixed md:inset-y-0 md:bg-white">
        <div>
          <Sidebar />
        </div>
      </div>
      {/* main component */}
      <main className="md:pl-72 bg-white h-screen">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
