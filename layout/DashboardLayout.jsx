import { useState } from "react";
//import Sidebar from "../components/Sidebar";
import Topbar from "../src/components/Topbar";
import Sidebar from "../src/components/Sidebar";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#f4f6f8] min-h-screen p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-3xl shadow-sm flex relative">

        {/* Mobile Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed lg:static z-50 h-full transition-all duration-300
          ${open ? "left-0" : "-left-64"}
          lg:left-0`}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 w-full">
          <Topbar toggleSidebar={() => setOpen(true)} />
          {children}
        </div>
      </div>
    </div>
  );
}