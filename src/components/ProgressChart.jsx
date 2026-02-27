import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";
import { div } from "framer-motion/client";

const ProgressChart = () => {
  const [percentage, setPercentage] = useState(0);

 useEffect(() => {
  axios
    .get("https://task-api-eight-flax.vercel.app/api/overview")
    .then((res) => {
      const total = Number(res.data.totalUsers) || 0;
      const active = Number(res.data.activeUsers) || 0;

      if (total === 0) {
        setPercentage(0);
      } else {
        const percent = Math.round((active / total) * 100);
        setPercentage(percent);
      }
    })
    .catch((err) => {
      console.error("API Error:", err);
      setPercentage(0);
    });
}, []);

  const data = [
    { name: "Completed", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-3 mt-3">

      {/* Team Collaboration Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 w-full md:w-1/2">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">Team Collaboration</h3>
          <button className="px-3 py-1 border border-green-600 text-green-600 rounded-2xl hover:bg-green-50 transition">
            + Add Member
          </button>
        </div>

        <ul className="space-y-3">
          {/* Member 1 */}
          <li className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40?img=10"
              alt="Alexandra Deff"
              className="w-10 h-10 rounded-2xl"
            />
            <div className="flex-1">
              <p className="font-medium">Alexandra Deff</p>
              <p className="text-gray-500 text-sm">Github Project Repository</p>
            </div>
            <span className="text-xs font-semibold px-2 py-1 rounded-2xl bg-green-100 text-green-700">
              Completed
            </span>
          </li>

          {/* Member 2 */}
          <li className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40?img=11"
              alt="Edwin Adenike"
              className="w-10 h-10 rounded-2xl"
            />
            <div className="flex-1">
              <p className="font-medium">Edwin Adenike</p>
              <p className="text-gray-500 text-sm">
                Integrate User Authentication System
              </p>
            </div>
            <span className="text-xs font-semibold px-2 py-1 rounded-2xl bg-yellow-100 text-yellow-700">
              In Progress
            </span>
          </li>

          {/* Member 3 */}
          <li className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40?img=12"
              alt="Isaac Oluwatemilorun"
              className="w-10 h-10 rounded-2xl"
            />
            <div className="flex-1">
              <p className="font-medium">Isaac Oluwatemilorun</p>
              <p className="text-gray-500 text-sm">
                Develop Search and Filter Functionality
              </p>
            </div>
            <span className="text-xs font-semibold px-2 py-1 rounded-2xl bg-red-100 text-red-700">
              Pending
            </span>
          </li>

          {/* Member 4 */}
          <li className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40?img=13"
              alt="David Oshodi"
              className="w-10 h-10 rounded-2xl"
            />
            <div className="flex-1">
              <p className="font-medium">David Oshodi</p>
              <p className="text-gray-500 text-sm">Responsive Layout for Homepage</p>
            </div>
            <span className="text-xs font-semibold px-2 py-1 rounded-2xl bg-yellow-100 text-yellow-700">
              In Progress
            </span>
          </li>
        </ul>
      </div>
       
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm">

      <h3 className="text-gray-700 font-semibold mb-4">
        Project Progress
      </h3>

      <div className="relative w-full h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
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
              <Cell fill="#1f7a4c" />
              <Cell fill="#e5e7eb" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {percentage}%
          </h2>
          <p className="text-sm text-gray-500">
            Project Completion
          </p>
        </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs sm:text-sm text-gray-600">
      {/* Completed */}
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-green-700 rounded-2xl"></span>
        <span>Completed</span>
      </div>

      {/* In Progress */}
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-green-900 rounded-2xl"></span>
        <span>In Progress</span>
      </div>

      {/* Pending */}
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-gray-300 rounded-2xl border border-gray-400"></span>
        <span>Pending</span>
      </div>
    </div>
      </div>
    </div>
    </div>
  );
};

export default ProgressChart;