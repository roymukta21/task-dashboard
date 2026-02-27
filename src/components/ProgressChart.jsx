import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const ProgressChart = () => {
  const percentage = 41;

  const data = [
    { name: "Completed", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  return (
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
            Project Ended
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs sm:text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-700 rounded-full"></span>
          Completed
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-900 rounded-full"></span>
          In Progress
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-300 rounded-full border border-gray-400"></span>
          Pending
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;