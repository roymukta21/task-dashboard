import { LayoutDashboard, ListTodo, Calendar, BarChart3 } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#f8fafc] p-6 rounded-l-3xl">
      <h1 className="text-2xl font-bold text-green-600 mb-10">Donezo</h1>

      <div className="space-y-4">
        <div className="flex items-center gap-3 bg-green-100 text-green-700 p-3 rounded-xl">
          <LayoutDashboard size={20} />
          Dashboard
        </div>

        <div className="flex items-center gap-3 text-gray-500 p-3">
          <ListTodo size={20} />
          Tasks
        </div>

        <div className="flex items-center gap-3 text-gray-500 p-3">
          <Calendar size={20} />
          Calendar
        </div>

        <div className="flex items-center gap-3 text-gray-500 p-3">
          <BarChart3 size={20} />
          Analytics
        </div>
      </div>
    </div>
  );
}