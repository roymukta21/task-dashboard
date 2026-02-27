import { Bell, MessageSquareReply, Search } from "lucide-react";

const Topbar = () => {
  
  const user = {
    displayName: "ToTa RC",
    email: "totarc@example.com",
    photoURL: "https://i.pravatar.cc/40",
  };

  return (
    <div className="flex justify-between items-center rounded-3xl mb-2 bg-gray-100  p-1">
      {/* Search Section */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-2xl w-80">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search task"
          className="bg-transparent outline-none ml-2 w-full"
        />
      </div>
      

      {/* Right Side User Info */}
      <div className="flex items-center gap-3 px-3 py-1 rounded-lg">

         {/* Message Icon */}
        <div className="relative cursor-pointer">
          <MessageSquareReply size={20} className="text-gray-600" />
          <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">
            2
          </span>
        </div>

        {/* Notification Icon */}
        <div className="relative cursor-pointer">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
            5
          </span>
        </div>

        <img
          src={user.photoURL}
          alt="avatar"
          className="w-10 h-10 rounded-2xl border-2 border-orange-100"
        />

        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-gray-800">
            {user.displayName}
          </span>
          <span className="text-xs text-gray-500">{user.email}</span>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
