import DashboardLayout from "../../layout/DashboardLayout";
import AnalyticsChart from "../components/AnalyticsChart";
import DashboardCards from "../components/DashboardCards";
import ProgressChart from "../components/ProgressChart";
import StatsCard from "../components/StatsCard";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="bg-gray-100 rounded-3xl p-6 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatsCard title="Total Projects" value="24" green />
          <StatsCard title="Ended Projects" value="10" />
          <StatsCard title="Running Projects" value="12" />
          <StatsCard title="Pending Projects" value="2" />
        </div>

        <div className="flex">
          {/* Left Column */}
          <div className="grid">
            <AnalyticsChart />
            <ProgressChart />
          </div>
          <DashboardCards />
        </div>
      </div>
    </DashboardLayout>
  );
};
export default Dashboard;
