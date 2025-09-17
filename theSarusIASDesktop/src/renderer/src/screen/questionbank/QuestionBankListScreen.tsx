import { Edit, Eye, Plus, SlidersHorizontal, Trash, Upload } from "lucide-react";
import { useState } from "react";
import SideBar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";
import SubHeader from "../../components/common/SubHeader";
import { useNavigate } from "react-router-dom";
import FilterModal from "../../components/common/FIlterModal";
import type { Question } from "../../utils/types/questionbank";
import { themeColor } from "../../utils/constant/Color";

const QuestionBankListScreen = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const [questions] = useState<Question[]>([
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
    ]);

    const difficultyBadge = (level: string) => {
        const styles: Record<string, string> = {
            Easy: "bg-green-100 text-green-700",
            Medium: "bg-yellow-100 text-yellow-700",
            Hard: "bg-red-100 text-red-700",
        };
        return (
            <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${styles[level] || ""
                    }`}
            >
                {level}
            </span>
        );
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <main className="flex-1 ml-50 p-8 mt-15 space-y-6">
                <Header />
                <SubHeader title="Question Bank" isBack={true} isAdd={false} />

                {/* Actions */}
                <div className="flex flex-wrap justify-between items-center gap-3">
                    <button
                        onClick={() => navigate("/addQuestion")}
                        className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:scale-105 hover:shadow-lg"
                        style={{
                            backgroundColor: themeColor?.primary,
                            borderColor: themeColor?.primary,
                        }}
                    >
                        <Plus size={18} /> NEW QUESTION
                    </button>

                    <button
                        className="flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium shadow-sm transition hover:bg-gray-50 hover:shadow-md"
                        style={{ color: themeColor?.primary, borderColor: themeColor?.primary }}
                    >
                        <Upload size={18} /> IMPORT QUESTIONS
                    </button>
                </div>

                {/* Search & Filters */}
                <div className="flex flex-wrap items-center gap-3">
                    <input
                        type="text"
                        placeholder="🔍 Search for questions here..."
                        className="flex-1 min-w-[240px] rounded-full border px-4 py-2 shadow-sm bg-white focus:ring-2 focus:ring-[#0ab7f3] focus:outline-none transition"
                    />

                    <button
                        className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-gray-50 hover:shadow-md"
                        style={{ color: themeColor?.primary, borderColor: themeColor?.primary }}
                        onClick={() => setOpen(true)}
                    >
                        <SlidersHorizontal size={14} /> Filter
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-100 text-sm text-gray-600 sticky top-0 z-10">
                            <tr>
                                <th className="p-4 font-medium">S.No</th>
                                <th className="p-4 font-medium">Question</th>
                                <th className="p-4 font-medium">Type</th>
                                <th className="p-4 font-medium">Difficulty</th>
                                <th className="p-4 font-medium text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {questions?.map((q, idx) => (
                                <tr
                                    key={q.id}
                                    className="border-t hover:bg-gray-50 transition duration-200"
                                >
                                    <td className="p-4">{idx + 1}</td>
                                    <td className="p-4">
                                        <div className="font-medium text-gray-800">{q.text}</div>
                                        <div className="text-xs text-gray-400">Created {q.createdAt}</div>
                                    </td>
                                    <td className="p-4">{q.type}</td>
                                    <td className="p-4">{difficultyBadge(q.difficulty)}</td>
                                    <td className="p-4 flex items-center justify-center gap-3">
                                        <button
                                            className="p-2 rounded-full hover:bg-blue-50 transition"
                                            title="View Question"
                                        >
                                            <Eye size={18} className="text-blue-600" />
                                        </button>
                                        <button
                                            className="p-2 rounded-full hover:bg-gray-100 transition"
                                            title="Edit Question"
                                        >
                                            <Edit size={18} color={themeColor?.primary} />
                                        </button>
                                        <button
                                            className="p-2 rounded-full hover:bg-red-50 transition"
                                            title="Delete Question"
                                        >
                                            <Trash size={18} className="text-red-600" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            <FilterModal isOpen={open} onClose={() => setOpen(false)} />
        </div>
    );
};

export default QuestionBankListScreen;
