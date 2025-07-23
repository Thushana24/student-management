"use client";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      {/* Sidebar */}
      <div className="hidden md:block w-64 fixed h-full">
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
