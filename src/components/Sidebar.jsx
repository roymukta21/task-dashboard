import React from "react";
import {
  LayoutDashboard,
  ListTodo,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  X,
} from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay (Mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`
          fixed md:static top-0 left-0 h-full w-72 bg-[#f1f5f9] p-6 rounded-r-3xl
          flex flex-col justify-between z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Mobile Close Button */}
        <div className="md:hidden flex justify-end mb-4">
          <X
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Top Section */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <img src="/logo.png" alt="Logo" className="w-10 h-10" />
            <h1 className="text-xl font-bold text-gray-800">Donezo</h1>
          </div>

          <p className="text-xs text-gray-400 mb-4">MENU</p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-green-100 text-green-700 p-3 rounded-xl font-medium">
              <LayoutDashboard size={20} />
              Dashboard
            </div>

            <div className="flex items-center gap-3 text-gray-500 p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
              <ListTodo size={20} />
              Tasks
            </div>

            <div className="flex items-center gap-3 text-gray-500 p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
              <Calendar size={20} />
              Calendar
            </div>

            <div className="flex items-center gap-3 text-gray-500 p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
              <BarChart3 size={20} />
              Analytics
            </div>

            <div className="flex items-center gap-3 text-gray-500 p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
              <Users size={20} />
              Team
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-8 mb-4">GENERAL</p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-500 p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
              <Settings size={20} />
              Settings
            </div>

            <div className="flex items-center gap-3 text-gray-500 p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
              <HelpCircle size={20} />
              Help
            </div>

            <div className="flex items-center gap-3 text-gray-500 p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
              <LogOut size={20} />
              Logout
            </div>
          </div>
        </div>

        {/* Bottom Card */}
        <div className="bg-gradient-to-br from-green-900 to-green-700 text-white p-5 rounded-2xl mt-8">
          <h3 className="font-semibold text-lg mb-2">
            Download our Mobile App
          </h3>
          <p className="text-xs mb-4 opacity-80">
            Get easy in another way
          </p>
          <button className="w-full bg-green-500 hover:bg-green-600 transition py-2 rounded-xl text-sm font-medium">
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;