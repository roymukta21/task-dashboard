import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

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
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">Team Collaboration</h3>
          <button className="px-3 py-1 border border-green-600 text-green-600 rounded-2xl hover:bg-green-50 transition">
            + Add Member
          </button>
        </div>

      </div>

      {/* Progress Chart */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full max-w-sm mx-auto">
        <h3 className="text-gray-700 font-semibold mb-4 text-base sm:text-lg">
          Project Progress
        </h3>

        <div className="relative w-full h-[180px] sm:h-[220px]">
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

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {percentage}%
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Project Completion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;