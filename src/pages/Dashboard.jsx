import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import API from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
    tasks: 0,
    projects: 0,
    completed: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/api/dashboard");
        setStats(res.data);
      } catch (error) {
        console.log("Error fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard title="Total Tasks" value={stats.tasks} />
            <StatsCard title="Total Projects" value={stats.projects} />
            <StatsCard title="Completed Tasks" value={stats.completed} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;