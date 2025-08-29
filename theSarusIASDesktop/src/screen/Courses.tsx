// src/pages/QuestionCards.tsx
import { Plus, Edit2, Trash2 } from "lucide-react";
import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";

interface Question {
  id: number;
  text: string;
  type: string;
  difficulty: "Easy" | "Medium" | "Hard";
  reviewers: string[];
  createdAt: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "In an Agile environment, what is the main...",
    type: "Single-select",
    difficulty: "Easy",
    reviewers: ["A"],
    createdAt: "2h ago",
  },
  {
    id: 2,
    text: "In an Agile environment, what is the main...",
    type: "Multi-select",
    difficulty: "Medium",
    reviewers: ["A", "B"],
    createdAt: "2h ago",
  },
  {
    id: 3,
    text: "_____ is responsible for measuring the...",
    type: "Paragraph",
    difficulty: "Hard",
    reviewers: ["A"],
    createdAt: "2h ago",
  },
  {
    id: 4,
    text: "Write 200 words short essay on American...",
    type: "Fill in the blanks",
    difficulty: "Hard",
    reviewers: ["A", "B"],
    createdAt: "2h ago",
  },
];

const CoursesScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <SideBar />

      <main className="flex-1 ml-50 mt-15">
        <Header />
        <h1 className="text-2xl font-bold mb-6">Question Bank</h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {questions.map((q) => (
            <div
              key={q.id}
              className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs text-gray-400">Created {q.createdAt}</span>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${q.difficulty === "Easy"
                    ? "bg-green-100 text-green-700"
                    : q.difficulty === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                    }`}
                >
                  {q.difficulty}
                </span>
              </div>

              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {q.text}
              </h2>

              <p className="text-sm text-gray-500 mb-4">{q.type}</p>

              {/* Reviewers */}
              <div className="flex items-center gap-2 mb-4">
                {q.reviewers.map((r, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-gray-700"
                  >
                    {r}
                  </div>
                ))}
                <button className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200">
                  <Plus size={18} />
                </button>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3">
                <button className="text-blue-600 hover:text-blue-800">
                  <Edit2 size={18} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Create Question Button */}
        <div className="mt-8 flex justify-center">
          <button className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-full shadow hover:bg-purple-700">
            <Plus size={18} /> Create Question
          </button>
        </div>

      </main>
    </div>
  );
};

export default CoursesScreen;
