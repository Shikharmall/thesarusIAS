// src/pages/QuestionBank.tsx
import { Edit, Plus, Trash, Upload } from "lucide-react";
import { useState } from "react";
import SideBar from "../components/dashboard/SideBar";

interface Question {
    id: number;
    text: string;
    type: string;
    difficulty: "Easy" | "Medium" | "Hard";
    reviewers: string[];
    createdAt: string;
}

const QuestionBankScreen = () => {
    const [questions, setQuestions] = useState<Question[]>([
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
            <SideBar />

            {/* Main Content */}
            <main className="flex-1 ml-50 p-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Question Bank</h1>
                    <button className="flex items-center gap-2 text-purple-700 hover:text-purple-900">
                        <Upload /> Import questions
                    </button>
                </div>

                {/* Search */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search for questions here"
                        className="w-full max-w-md border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl shadow overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-100 text-sm text-gray-600">
                            <tr>
                                <th className="p-3">Sno</th>
                                <th className="p-3">Question</th>
                                <th className="p-3">Type</th>
                                <th className="p-3">Difficulty</th>
                                <th className="p-3">Reviewers</th>
                                <th className="p-3">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map((q, idx) => (
                                <tr key={q.id} className="border-t hover:bg-gray-50">
                                    <td className="p-3">{idx + 1}</td>
                                    <td className="p-3">
                                        <div>{q.text}</div>
                                        <div className="text-xs text-gray-400">Created {q.createdAt}</div>
                                    </td>
                                    <td className="p-3">{q.type}</td>
                                    <td className="p-3">{q.difficulty}</td>
                                    <td className="p-3 flex items-center gap-2">
                                        {q.reviewers.map((r, i) => (
                                            <div
                                                key={i}
                                                className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold"
                                            >
                                                {r}
                                            </div>
                                        ))}
                                        <button className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                            <Plus />
                                        </button>
                                    </td>
                                    <td className="p-3 flex gap-3">
                                        <button className="text-blue-600 hover:text-blue-800">
                                            <Edit />
                                        </button>
                                        <button className="text-red-600 hover:text-red-800">
                                            <Trash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Create question */}
                <div className="mt-6">
                    <button className="flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-900">
                        <Plus /> Create question
                    </button>
                </div>
            </main>
        </div>
    );
};

export default QuestionBankScreen;
