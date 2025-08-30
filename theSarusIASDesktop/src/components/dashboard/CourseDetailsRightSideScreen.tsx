import { useState } from "react";
import {
  FileText,
  Play,
  HelpCircle,
  Star,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

type Tab = {
  id: string;
  label: string;
  icon: React.ElementType;
  content: React.ReactNode;
};

export default function CourseDetailsRightSideScreen() {
  const videos = [
    {
      id: 1,
      title: "Introduction to IAS GS Foundation",
      duration: "12:30",
      thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    },
    {
      id: 2,
      title: "Polity Basics - Demo Class",
      duration: "18:45",
      thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
    },
    {
      id: 3,
      title: "Modern History Overview",
      duration: "10:05",
      thumbnail: "https://img.youtube.com/vi/XC0Gsk4sP6E/hqdefault.jpg",
    },
  ];

  const tabs: Tab[] = [
    {
      id: "features",
      label: "Features",
      icon: FileText,
      content: (
        <div>
          <h2 className="text-lg font-semibold mb-2">✨ Course Features</h2>
          <p className="text-gray-600">All course features will be listed here.</p>
        </div>
      ),
    },
    {
      id: "schedule",
      label: "Schedule & Syllabus",
      icon: Calendar,
      content: (
        <div>
          <h2 className="text-lg font-semibold mb-2">📅 Schedule & Syllabus</h2>
          <div className="space-y-2">
            <div className="p-3 bg-gray-50 border rounded-lg">Week 1: Introduction & Basics</div>
            <div className="p-3 bg-gray-50 border rounded-lg">Week 2: Deep Dive into Modules</div>
            <div className="p-3 bg-gray-50 border rounded-lg">Week 3: Assessments & Practice</div>
          </div>
        </div>
      ),
    },
    {
      id: "demo",
      label: "Demo Video",
      icon: Play,
      content: (
        <div>
          <h2 className="text-lg font-semibold mb-4">🎥 Demo Videos</h2>
          <div className="divide-y divide-gray-200">
            {videos.map((video) => (
              <Link to={'/video'}
                key={video.id}
                className="flex items-center gap-4 py-3 hover:bg-gray-50 rounded-lg px-2 cursor-pointer transition"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-24 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-800">{video.title}</h3>
                  <p className="text-xs text-gray-500">{video.duration}</p>
                </div>
                <Play size={20} className="text-blue-600 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "faq",
      label: "FAQs",
      icon: HelpCircle,
      content: (
        <div>
          <h2 className="text-lg font-semibold mb-2">❓ Frequently Asked Questions</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>What is included in this course?</li>
            <li>How long do I have access?</li>
            <li>Is there a refund policy?</li>
          </ul>
        </div>
      ),
    },
    {
      id: "feedback",
      label: "Feedback",
      icon: Star,
      content: (
        <div>
          <h2 className="text-lg font-semibold mb-2">⭐ Feedback</h2>
          <textarea
            placeholder="Write your feedback..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-200"
            rows={4}
          />
          <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Submit Feedback
          </button>
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200 overflow-x-auto bg-gray-50 rounded-t-lg">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 cursor-pointer 
                ${activeTab === tab.id
                  ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                  : "text-gray-500 hover:text-gray-700"
                }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-6 bg-white rounded-b-lg shadow-md mt-0">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
