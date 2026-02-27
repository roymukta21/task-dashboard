import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "S", value: 30 },
  { name: "M", value: 60 },
  { name: "T", value: 40 },
  { name: "W", value: 80 },
  { name: "T2", value: 50 },
  { name: "F", value: 70 },
  { name: "S2", value: 45 },
];

export default function AnalyticsChart() {
  return (
    <div className="bg-[#f8fafc] p-6 rounded-2xl">
      <h3 className="mb-4 font-semibold">Project Analytics</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <Bar dataKey="value" fill="#16a34a" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}