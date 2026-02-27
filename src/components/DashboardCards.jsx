export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

      {/* Team Collaboration */}
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">Team Collaboration</h3>
          <button className="px-3 py-1 border border-green-600 text-green-600 rounded-full hover:bg-green-50 transition">
            + Add Member
          </button>
        </div>

        <ul className="space-y-3">
          {[
            { name: "Alexandra Deff", task: "Github Project Repository", status: "Completed", color: "green" },
            { name: "Edwin Adenike", task: "Integrate User Authentication System", status: "In Progress", color: "yellow" },
            { name: "Isaac Oluwatemilorun", task: "Develop Search and Filter Functionality", status: "Pending", color: "red" },
            { name: "David Oshodi", task: "Responsive Layout for Homepage", status: "In Progress", color: "yellow" },
          ].map((member, i) => (
            <li key={i} className="flex items-center gap-3">
              <img
                src={`https://i.pravatar.cc/40?img=${i + 10}`}
                alt={member.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <p className="font-medium">{member.name}</p>
                <p className="text-gray-500 text-sm">{member.task}</p>
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full
                ${member.color === "green" ? "bg-green-100 text-green-700" :
                member.color === "yellow" ? "bg-yellow-100 text-yellow-700" :
                "bg-red-100 text-red-700"}`}>
                {member.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Project Progress */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
        <h3 className="font-semibold text-lg mb-4">Project Progress</h3>
        <div className="w-36 h-36">
          {/* Replace with Recharts or placeholder */}
          <div className="relative w-full h-full rounded-full bg-gray-200">
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-green-600 clip-path-circle" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-800">41%</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-4 text-sm text-gray-600">
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-600 rounded-full"></span>Completed</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-900 rounded-full"></span>In Progress</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-gray-300 rounded-full"></span>Pending</span>
        </div>
      </div>

      {/* Time Tracker */}
      <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-white">
        <h3 className="font-semibold text-lg mb-2">Time Tracker</h3>
        <span className="text-3xl font-bold mb-4">01:24:08</span>
        <div className="flex gap-4">
          <button className="bg-white text-green-700 p-3 rounded-full hover:scale-105 transition">
            {/* Pause Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
            </svg>
          </button>
          <button className="bg-red-600 p-3 rounded-full hover:scale-105 transition">
            {/* Stop Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6h12v12H6z" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}