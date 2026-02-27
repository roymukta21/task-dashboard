//import ProjectCard from "./ProjectCard";
import { Plus } from "lucide-react";

const projects = [
  {
    title: "Develop API Endpoints",
    due: "Nov 26, 2024",
    color: "bg-blue-500",
  },
  {
    title: "Onboarding Flow",
    due: "Nov 28, 2024",
    color: "bg-teal-500",
  },
  {
    title: "Build Dashboard",
    due: "Nov 30, 2024",
    color: "bg-green-400",
  },
  {
    title: "Optimize Page Load",
    due: "Dec 5, 2024",
    color: "bg-yellow-400",
  },
  {
    title: "Cross-Browser Testing",
    due: "Dec 6, 2024",
    color: "bg-purple-500",
  },
];

const DashboardCards = () => {
  return (
    <div>
      {/* Project Card - 70% height */}
      <div className="flex-[7] mt-2 p-2">
        <div className="bg-white rounded-2xl shadow-md p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold text-gray-800">Project</h2>
            <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium border border-gray-300 rounded-2xl hover:bg-gray-100 transition">
              <Plus size={16} />
              New
            </button>
          </div>

          {/* Project List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl ${project.color}`} />

                {/* Text */}
                <div>
                  <h3 className="text-sm font-medium text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Due date: {project.due}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Time Tracker Card - 30% height */}
      <div className="p-2">
        <div className="flex-[3] bg-gradient-to-br from-green-950 to-green-800 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl ">
          <h3 className="font-semibold text-xl mb-3 tracking-wide items-start">
            Time Tracker
          </h3>
          <span className="text-3xl font-extrabold mb-5 tracking-tight">
            01:24:08
          </span>

          <div className="flex gap-4">
            {/* Pause Button */}
            <button className="bg-white text-green-800 p-3 rounded-2xl shadow-md hover:bg-green-50 hover:scale-110 transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 9v6m4-6v6"
                />
              </svg>
            </button>

            {/* Stop Button */}
            <button className="bg-red-600 p-3 rounded-2xl shadow-md hover:bg-red-700 hover:scale-110 transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 6h12v12H6z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default  DashboardCards;
