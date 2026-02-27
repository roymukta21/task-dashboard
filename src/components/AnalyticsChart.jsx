import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";
import { Video } from "lucide-react";
import axios from "axios";

const CustomBar = (props) => {
  const { x, y, width, height, payload } = props;
  const radius = width / 2;

  return (
    <g>
      {!payload.active ? (
        <rect x={x} y={y} width={width} height={height} rx={radius} fill="url(#stripe)" />
      ) : (
        <rect x={x} y={y} width={width} height={height} rx={radius} fill="#16a34a" />
      )}
      <text
        x={x + width / 2}
        y={y - 8}
        textAnchor="middle"
        fill="#374151"
        fontSize={12}
        fontWeight="600"
      >
        {payload.value}
      </text>
    </g>
  );
};

const AnalyticsSection = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://task-api-eight-flax.vercel.app/api/analytics")
      .then((res) => {
        // Map API response to chart data
        const formatted = res.data.map((item) => ({
          name: item.date,
          value: item.conversions,
          active: item.conversions > 30, // bars with conversions > 30 = green
        }));
        setChartData(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Analytics API Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3 mt-6">
      {/* Analytics Chart */}
      <div className="col-span-2 bg-[#f8fafc] p-6 rounded-2xl shadow-sm">
        <h3 className="mb-4 font-semibold text-gray-700">Project Analytics</h3>

        {loading ? (
          <div className="flex items-center justify-center h-64 text-gray-400">
            Loading chart...
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={chartData.length ? chartData : [{ name: "", value: 0, active: true }]}
            >
              {/* Stripe pattern */}
              <defs>
                <pattern
                  id="stripe"
                  patternUnits="userSpaceOnUse"
                  width="6"
                  height="6"
                  patternTransform="rotate(45)"
                >
                  <rect width="6" height="6" fill="#e5e7eb" />
                  <line x1="0" y1="0" x2="0" y2="6" stroke="#cbd5e1" strokeWidth="3" />
                </pattern>
              </defs>

              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#9ca3af" }} />
              <Bar dataKey="value" shape={<CustomBar />} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Reminders Card */}
      <div className="lg:col-span-1 bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium mb-2">Reminders</p>
          <h2 className="text-xl font-semibold text-emerald-800 leading-tight">
            Meeting with Arc Company
          </h2>
          <p className="text-gray-400 text-sm mt-2 mb-6">
            Time : 02.00 pm - 04.00 pm
          </p>
        </div>
        <button className="w-full flex items-center justify-center gap-2 p-2 bg-emerald-900 hover:bg-emerald-800 transition-all duration-300 text-white py-3 rounded-2xl font-medium shadow-md hover:shadow-lg">
          <Video size={18} />
          Start Meeting
        </button>
      </div>
    </div>
  );
};

export default AnalyticsSection;