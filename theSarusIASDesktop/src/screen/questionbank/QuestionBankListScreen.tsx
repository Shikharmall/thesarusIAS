import { Edit, Plus, SlidersHorizontal, Trash, Upload } from "lucide-react";
import { useState } from "react";
import Header from "../../components/common/Header";
import SubHeader from "../../components/common/SubHeader";
import { useNavigate } from "react-router-dom";
import FilterModal from "../../components/common/FIlterModal";
import type { Question } from "../../utils/types/questionbank";
import { themeColor } from "../../utils/constant/Color";
import Sidebar from "../../components/common/Sidebar";

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

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 ml-50 p-6 mt-15">
                <Header />
                <SubHeader title="Question Bank" isBack={true} isAdd={false} />

                {/* Actions */}
                <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
                    {/* <button
                        onClick={() => navigate('/addQuestion')}
                        className="flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-medium shadow-sm transition hover:shadow-md cursor-pointer"
                        style={{ color: themeColor?.primary, borderColor: themeColor?.primary }}
                    >
                        <Plus size={18} /> NEW QUESTION
                    </button> */}

                    <button
                        onClick={() => navigate('/addQuestion')}
                        className="flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-medium shadow-sm transition hover:shadow-md cursor-pointer text-white"
                        style={{ backgroundColor: themeColor?.primary, borderColor: themeColor?.primary }}
                    >
                        <Plus size={18} /> NEW QUESTION
                    </button>

                    <button
                        className="flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-medium shadow-sm transition hover:shadow-md cursor-pointer"
                        style={{ color: themeColor?.primary, borderColor: themeColor?.primary }}
                    >
                        <Upload size={18} /> IMPORT QUESTIONS
                    </button>
                </div>

                {/* Search & Filters */}
                <div className="mb-6 flex flex-wrap items-center gap-3">
                    <input
                        type="text"
                        placeholder="Search for questions here"
                        className="flex-1 min-w-[200px] border rounded-lg px-4 py-2 focus:ring-1 focus:ring-[#0ab7f3] focus:border-none focus:outline-none"
                    />

                    <button
                        className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium shadow-sm transition hover:shadow-md cursor-pointer"
                        style={{ color: themeColor?.primary, borderColor: themeColor?.primary }}
                        onClick={() => setOpen(true)}
                    >
                        <SlidersHorizontal size={14} /> Filter
                    </button>

                    {/* <select
                        id="type"
                        name="type"
                        className="w-40 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Type
                        </option>
                        <option value="single">Single-select</option>
                        <option value="multi">Multi-select</option>
                        <option value="para">Paragraph</option>
                        <option value="fill">Fill in the blanks</option>
                    </select> */}

                    {/* <select
                        id="level"
                        name="level"
                        className="w-40 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                        defaultValue="all"
                    >
                        <option value="all">All Levels</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select> */}
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow">
                    <table className="w-full text-left">
                        <thead className="bg-gray-100 text-sm text-gray-600">
                            <tr>
                                <th className="p-3 font-medium">S.No</th>
                                <th className="p-3 font-medium">Question</th>
                                <th className="p-3 font-medium">Type</th>
                                <th className="p-3 font-medium">Difficulty</th>
                                {/* <th className="p-3 font-medium">Reviewers</th> */}
                                <th className="p-3 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {questions?.map((q, idx) => (
                                <tr
                                    key={q.id}
                                    className="border-t transition hover:bg-gray-50"
                                >
                                    <td className="p-3">{idx + 1}</td>
                                    <td className="p-3">
                                        <div className="font-medium text-gray-800">{q.text}</div>
                                        <div className="text-xs text-gray-400">
                                            Created {q.createdAt}
                                        </div>
                                    </td>
                                    <td className="p-3">{q.type}</td>
                                    <td
                                        className={`p-3 font-medium ${q.difficulty === "Easy"
                                            ? "text-green-600"
                                            : q.difficulty === "Medium"
                                                ? "text-yellow-600"
                                                : "text-red-600"
                                            }`}
                                    >
                                        {q.difficulty}
                                    </td>
                                    {/* <td className="p-3">
                                        <div className="flex items-center gap-2">
                                            {q.reviewers.map((r, i) => (
                                                <div
                                                    key={i}
                                                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-700"
                                                >
                                                    {r}
                                                </div>
                                            ))}
                                            <button className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition">
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                    </td> */}
                                    <td className="p-3 flex gap-3">
                                        <button className="transition cursor-pointer">
                                            <Edit size={18} color={themeColor?.primary} />
                                        </button>
                                        <button className="transition cursor-pointer">
                                            <Trash size={18} color="red" />
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
