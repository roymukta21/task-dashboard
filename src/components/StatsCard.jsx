import { motion } from "framer-motion";

const StatsCard = ({ title, value, green }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`p-6 rounded-2xl ${
        green
          ? "bg-gradient-to-br from-green-900 to-emerald-700 text-white"
          : "bg-[#f8fafc]"
      }`}
    >
      <h3 className="text-sm">{title}</h3>
      <h1 className="text-3xl font-bold mt-2">{value}</h1>
    </motion.div>
  );
};

export default StatsCard;
