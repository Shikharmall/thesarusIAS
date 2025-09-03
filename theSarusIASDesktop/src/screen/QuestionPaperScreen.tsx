// src/pages/QuestionPaperScreen.tsx
import { useState } from "react";
import { ArrowLeftCircle } from "lucide-react";
import { themeColor } from "../utils/Color";
import { useNavigate } from "react-router-dom";

interface Option {
    label: string;
    isCorrect: boolean;
    image?: string;
}

interface Question {
    type: "singleCorrect" | "multiCorrect" | "matchTheFollowing" | "paragraph";
    question: string;
    duration: string;
    description: string;
    difficulty: "easy" | "medium" | "hard";
    options: Option[];
    solution: string;
}

const questions: Question[] = [
    {
        type: "singleCorrect",
        question: "<p>What is the capital of the USA?</p>",
        duration: "30",
        description: "Geography basics",
        difficulty: "easy" as const,
        options: [
            { label: "New York", isCorrect: false },
            { label: "Washington D.C.", isCorrect: true },
            { label: "Los Angeles", isCorrect: false },
            { label: "Chicago", isCorrect: false },
        ],
        solution: "<p>The capital of the USA is <b>Washington D.C.</b></p>",
    },
    {
        type: "multiCorrect",
        question: "<p>Which of the following are programming languages?</p>",
        duration: "45",
        description: "Check all that apply",
        difficulty: "medium" as const,
        options: [
            { label: "Python", isCorrect: true },
            { label: "JavaScript", isCorrect: true },
            { label: "HTML", isCorrect: false },
            { label: "C++", isCorrect: true },
        ],
        solution:
            "<p>Python, JavaScript, and C++ are programming languages. HTML is a markup language.</p>",
    },
    {
        type: "paragraph",
        question: "<p>Explain the importance of photosynthesis.</p>",
        duration: "120",
        description: "Write a short note",
        difficulty: "easy" as const,
        options: [],
        solution:
            "<p>Photosynthesis is the process by which plants prepare food and release oxygen, crucial for life on Earth.</p>",
    },
    {
        type: "singleCorrect",
        question: "<p>2 + 2 × 2 = ?</p>",
        duration: "20",
        description: "Math order of operations",
        difficulty: "medium" as const,
        options: [
            { label: "6", isCorrect: true },
            { label: "8", isCorrect: false },
            { label: "4", isCorrect: false },
            { label: "2", isCorrect: false },
        ],
        solution: "<p>According to BODMAS, 2 + (2×2) = 6.</p>",
    },
    {
        type: "multiCorrect",
        question: "<p>Which of the following are planets in the solar system?</p>",
        duration: "40",
        description: "",
        difficulty: "easy" as const,
        options: [
            { label: "Earth", isCorrect: true },
            { label: "Mars", isCorrect: true },
            { label: "Pluto", isCorrect: false },
            { label: "Venus", isCorrect: true },
        ],
        solution:
            "<p>Earth, Mars, and Venus are planets. Pluto is classified as a dwarf planet.</p>",
    },
];


const QuestionPaperScreen = () => {
    const navigate = useNavigate();
    const [answers, setAnswers] = useState<Record<number, string[]>>({});
    const [showSolution, setShowSolution] = useState<Record<number, boolean>>({});

    const handleAnswerChange = (
        qIndex: number,
        optIndex: number,
        type: Question["type"]
    ) => {
        setAnswers((prev) => {
            const current = prev[qIndex] || [];
            if (type === "singleCorrect") {
                return { ...prev, [qIndex]: [String(optIndex)] };
            } else if (type === "multiCorrect") {
                return {
                    ...prev,
                    [qIndex]: current.includes(String(optIndex))
                        ? current.filter((v) => v !== String(optIndex))
                        : [...current, String(optIndex)],
                };
            }
            return prev;
        });
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 p-5">
            <div className="bg-white rounded-md shadow-md p-6 w-3xl mx-auto border-t-4 border-[#0ab7f3]">
                {/* Header */}
                <header className="flex items-center justify-between py-3 mb-4">
                    <ArrowLeftCircle
                        size={25}
                        color={themeColor?.secondary}
                        className="cursor-pointer"
                        onClick={() => navigate(-1)}
                    />
                    <h1
                        className="text-lg font-semibold text-gray-800"
                        style={{ color: themeColor?.primary }}
                    >
                        Question Paper
                    </h1>
                    <div></div>
                </header>

                <div className="space-y-8">
                    {questions.map((q, index) => (
                        <div
                            key={index}
                            className="border-b pb-6 last:border-none last:pb-0"
                        >
                            {/* Question header */}
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="font-medium text-gray-800">
                                    {index + 1}.{" "}
                                    <span
                                        dangerouslySetInnerHTML={{ __html: q.question }}
                                    />
                                </h2>
                                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                                    {q.difficulty.toUpperCase()}
                                </span>
                            </div>

                            {q.description && (
                                <p className="text-sm text-gray-600 mb-2">{q.description}</p>
                            )}

                            {/* Options */}
                            {["singleCorrect", "multiCorrect"].includes(q.type) && (
                                <div className="space-y-2 mt-2">
                                    {q.options.map((opt, optIndex) => (
                                        <label
                                            key={optIndex}
                                            className="flex items-center gap-2 cursor-pointer"
                                        >
                                            <input
                                                type={q.type === "singleCorrect" ? "radio" : "checkbox"}
                                                name={`q-${index}`}
                                                checked={answers[index]?.includes(String(optIndex)) || false}
                                                onChange={() =>
                                                    handleAnswerChange(index, optIndex, q.type)
                                                }
                                                className="w-4 h-4 accent-blue-600"
                                            />
                                            <span>{opt.label || `Option ${optIndex + 1}`}</span>
                                        </label>
                                    ))}
                                </div>
                            )}

                            {q.type === "paragraph" && (
                                <textarea
                                    placeholder="Write your answer..."
                                    className="w-full border rounded-lg p-2 mt-2 text-sm focus:ring-2 focus:ring-[#0ab7f3] focus:outline-none"
                                    rows={4}
                                    onChange={(e) =>
                                        setAnswers((prev) => ({ ...prev, [index]: [e.target.value] }))
                                    }
                                    value={answers[index]?.[0] || ""}
                                />
                            )}

                            {q.type === "matchTheFollowing" && (
                                <p className="text-sm text-gray-500 mt-2 italic">
                                    (Match the following type — render as needed)
                                </p>
                            )}

                            {/* Show Solution Button */}
                            {q.solution && (
                                <div className="mt-4">
                                    <button
                                        onClick={() =>
                                            setShowSolution((prev) => ({
                                                ...prev,
                                                [index]: !prev[index],
                                            }))
                                        }
                                        className="text-sm px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                                    >
                                        {showSolution[index] ? "Hide Solution" : "Show Solution"}
                                    </button>

                                    {showSolution[index] && (
                                        <div
                                            className="mt-2 text-sm text-green-700 p-3 border rounded-lg bg-green-50"
                                            dangerouslySetInnerHTML={{ __html: q.solution }}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuestionPaperScreen;
