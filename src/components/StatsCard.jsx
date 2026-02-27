function StatsCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold mt-2 text-green-600">
        {value}
      </p>
    </div>
  );
}

export default StatsCard;