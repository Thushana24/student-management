"use client";
import { ReactNode } from "react";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* Sidebar */}
      <div className="fixed hidden w-64 h-full md:block">
        <SideNav />
      </div>

      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
