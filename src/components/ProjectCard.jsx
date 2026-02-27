import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://task-api-eight-flax.vercel.app/api/products")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-gray-800">Project</h2>
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium border border-gray-300 rounded-2xl hover:bg-gray-100 transition">
          <Plus size={16} />
          New
        </button>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500" />
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
  );
};

export default ProjectCard;