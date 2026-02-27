import DashboardLayout from "../../layout/DashboardLayout";
import AnalyticsChart from "../components/AnalyticsChart";
import DashboardCards from "../components/DashboardCards";
import ProgressChart from "../components/ProgressChart";
import StatsCard from "../components/StatsCard";
import TimeTracker from "../components/TimeTracker";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-4 gap-6 mb-6">
        <StatsCard title="Total Projects" value="24" green />
        <StatsCard title="Ended Projects" value="10" />
        <StatsCard title="Running Projects" value="12" />
        <StatsCard title="Pending Projects" value="2" />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <AnalyticsChart />
        <ProgressChart />
        <TimeTracker />
      </div>
    </DashboardLayout>
  );
}