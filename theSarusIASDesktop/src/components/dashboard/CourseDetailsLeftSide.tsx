import { useNavigate } from "react-router-dom";
import {
  FileText,
  Play,
  HelpCircle,
  Star,
  Calendar,
  ClipboardList,
} from "lucide-react";

export default function CourseDetailsLeftSideScreen() {
  const navigate = useNavigate();

  const featureItems = [
    { id: 1, title: "Features", icon: FileText, color: "#4A90E2", url: "/course/video" },
    { id: 2, title: "Demo Class", icon: Play, color: "#50C878", url: "/course/video" },
    { id: 3, title: "FAQs", icon: HelpCircle, color: "#FFB347", url: "/course/video" },
    { id: 4, title: "Submit Feedback", icon: Star, color: "#FF6B6B", url: "/course/video" },
    { id: 5, title: "Schedule & Syllabus", icon: Calendar, color: "#4ECDC4", url: "/course/video" },
    //{ id: 6, title: "My Class", icon: Folder, color: "#95A5A6", url: "/course/video" },
    //{ id: 7, title: "Test Series", icon: Library, color: "#E67E22", url: "/course/video" },
    //{ id: 8, title: "Submit Answer", icon: CheckCircle, color: "#9B59B6", url: "/course/video" },
    { id: 7, title: "Class Test", icon: ClipboardList, color: "#3498DB", url: "/course/video" },
  ];

  const FeatureCard = ({ item }: { item: any }) => {
    const Icon = item.icon;
    return (
      <button
        className="bg-white rounded-xl p-2 flex flex-col items-center w-[30%] mb-4 shadow-md hover:shadow-lg transition"
      //onClick={() => navigate(item.url)}
      >
        <div
          className="w-8 h-8 rounded-full flex justify-center items-center mb-2"
          style={{ backgroundColor: `${item.color}20` }}
        >
          <Icon size={20} color={item.color} />
        </div>
        <p className="text-xs text-gray-800 font-medium text-center">{item.title}</p>
      </button>
    );
  };

  return (

    <div className="flex-1 overflow-y-auto p-3">
      {/* Course Card */}
      <div className="bg-sky-400 rounded-xl p-4 mb-6">
        <div className="flex flex-row justify-between items-start mb-3">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">IAS GS Foundation</h2>
            <p className="text-sm text-gray-700">Batch - 32B</p>
          </div>
          <div className="bg-white px-2 py-1 rounded-md">
            <span className="text-xs text-red-600 font-semibold">Live</span>
          </div>
        </div>

        <div className="flex flex-row mb-4">
          <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded mr-2">
            🔴 Live
          </span>
          <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
            English
          </span>
        </div>

        <div className="bg-white/30 rounded-lg p-3">
          <div className="flex flex-row justify-between mb-1">
            <span className="text-sm text-gray-800">Weekly</span>
            <span className="text-sm text-gray-800 font-semibold">36 Months</span>
          </div>
          <div className="flex flex-row justify-between mb-1">
            <span className="text-sm text-gray-800">Category</span>
            <span className="text-sm text-gray-800 font-semibold">Online</span>
          </div>
          <div className="flex flex-row justify-between mb-1">
            <span className="text-sm text-gray-800">Price</span>
            <div className="flex flex-row ">
              <span className="text-sm text-gray-800 font-semibold">₹ 80,000</span>
              <span className="text-sm line-through text-gray-400 mx-1">₹ 1,00,000</span>
              <span className="text-sm font-medium text-green-600">20%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="flex flex-row flex-wrap justify-between mb-6">
        {featureItems.map((item) => (
          <FeatureCard key={item.id} item={item} />
        ))}
      </div>
    </div>

  );
}
