import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartsPage: React.FC = () => {
  // Sample Data
  const progressData = [
    { week: "Week 1", score: 65 },
    { week: "Week 2", score: 72 },
    { week: "Week 3", score: 80 },
    { week: "Week 4", score: 90 },
  ];

  const onlineTestData = [
    { month: "June", tests: 10 },
    { month: "July", tests: 12 },
    { month: "August", tests: 13 },
    { month: "September", tests: 5 },
  ];

  return (
    <div className="px-6 py-10 bg-gray-100">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Line Chart */}
        <div className="bg-white rounded-sm shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Weekly Progress</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-sm shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Online Tests Statistics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={onlineTestData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="tests" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;
