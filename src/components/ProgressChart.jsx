import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

const ProgressChart = () => {
  const [percentage, setPercentage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [overview, setOverview] = useState(null);

  useEffect(() => {
    axios
      .get("https://task-api-eight-flax.vercel.app/api/overview")
      .then((res) => {
        const total = Number(res.data.totalUsers) || 0;
        const active = Number(res.data.activeUsers) || 0;

        const percent = total === 0 ? 0 : Math.round((active / total) * 100);

        setPercentage(percent);
        setOverview(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setPercentage(0);
        setLoading(false);
      });
  }, []);

  const data = [
    { name: "Completed", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  // Dummy team members
  const teamMembers = [
    {
      name: "Alexandra Deff",
      task: "Github Project Repository",
      status: "Completed",
      color: "bg-green-100 text-green-700",
      avatar: "https://i.pravatar.cc/40?img=10",
    },
    {
      name: "Edwin Adenike",
      task: "Integrate User Authentication System",
      status: "In Progress",
      color: "bg-yellow-100 text-yellow-700",
      avatar: "https://i.pravatar.cc/40?img=11",
    },
    {
      name: "Isaac Oluwatemilorun",
      task: "Develop Search and Filter Functionality",
      status: "Pending",
      color: "bg-red-100 text-red-700",
      avatar: "https://i.pravatar.cc/40?img=12",
    },
    {
      name: "David Oshodi",
      task: "Responsive Layout for Homepage",
      status: "In Progress",
      color: "bg-yellow-100 text-yellow-700",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 mt-6">

      {/* Team Collaboration Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 w-full md:w-1/2">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">Team Collaboration</h3>
          <button className="px-3 py-1 border border-green-600 text-green-600 rounded-2xl hover:bg-green-50 transition">
            + Add Member
          </button>
        </div>

        <ul className="space-y-3">
          {teamMembers.map((member, index) => (
            <li key={index} className="flex items-center gap-3">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-10 h-10 rounded-2xl"
              />
              <div className="flex-1">
                <p className="font-medium">{member.name}</p>
                <p className="text-gray-500 text-sm">{member.task}</p>
              </div>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-2xl ${member.color}`}
              >
                {member.status}
              </span>
            </li>
          ))}
        </ul>

        {/* Optional: Show total/active users from API */}
        {overview && (
          <p className="text-gray-500 text-sm mt-3">
            Total Users: {overview.totalUsers || 0}, Active Users: {overview.activeUsers || 0}
          </p>
        )}
      </div>

      {/* Progress Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm">
        <h3 className="text-gray-700 font-semibold mb-4">Project Progress</h3>

        {loading ? (
          <p className="text-gray-500 text-center py-10">Loading...</p>
        ) : (
          <div className="relative w-full h-[220px]">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  innerRadius="70%"
                  outerRadius="90%"
                  stroke="none"
                  cornerRadius={15}
                >
                  <Cell fill="#166534" /> {/* Completed */}
                  <Cell fill="#e5e7eb" /> {/* Remaining */}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold text-gray-900">{percentage}%</h2>
              <p className="text-sm text-gray-500">Project Completion</p>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-800 rounded-2xl"></span>
            Completed
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-300 rounded-2xl"></span>
            Remaining
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;