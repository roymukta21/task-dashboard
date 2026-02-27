import { Search } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-80">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search task"
          className="bg-transparent outline-none ml-2 w-full"
        />
      </div>

      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="rounded-full"
        />
      </div>
    </div>
  );
}