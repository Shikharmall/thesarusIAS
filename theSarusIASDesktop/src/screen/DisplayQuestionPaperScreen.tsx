import React from "react";
import { themeColor } from "../utils/Color";
import { ArrowLeftCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Option {
    label: string;
    isCorrect: boolean;
    image?: string;
}

interface Question {
    type: string;
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
        question: "What is the capital of France?",
        duration: "60",
        description: "",
        difficulty: "easy",
        options: [
            { label: "Berlin", isCorrect: false },
            { label: "Paris", isCorrect: true },
            { label: "Rome", isCorrect: false },
            { label: "Madrid", isCorrect: false },
        ],
        solution: "Paris is the capital city of France.",
    },
    {
        type: "multiCorrect",
        question: "Which of the following are programming languages?",
        duration: "90",
        description: "",
        difficulty: "easy",
        options: [
            { label: "Python", isCorrect: true },
            { label: "Java", isCorrect: true },
            { label: "HTML", isCorrect: false },
            { label: "C++", isCorrect: true },
        ],
        solution: "Python, Java, and C++ are programming languages. HTML is a markup language.",
    },
    {
        type: "matchTheFollowing",
        question: "Match the following countries with their capitals:",
        duration: "120",
        description: "",
        difficulty: "medium",
        options: [
            { label: "India - New Delhi", isCorrect: true },
            { label: "Japan - Tokyo", isCorrect: true },
            { label: "USA - Washington D.C.", isCorrect: true },
            { label: "UK - London", isCorrect: true },
        ],
        solution: "Each pair matches correctly.",
    },
    {
        type: "paragraph",
        question: "Read the passage and answer the following question.",
        duration: "180",
        description:
            "The industrial revolution was a period of rapid industrial growth that began in Britain during the 18th century and spread to other parts of the world...",
        difficulty: "medium",
        options: [],
        solution:
            "The Industrial Revolution marked a major turning point in history; almost every aspect of daily life was influenced.",
    },
];

const DisplayQuestionPaperScreen: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6 m-5 border-t-5 border-[#0ab7f3]">
            {/* Header */}
            <header className="flex items-center justify-between pb-3">
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
                   Questions Paper
                </h1>
                <div></div>
            </header>

            {questions?.map((q, index) => (
                <div key={index} className="mb-8 pb-6 border-b border-gray-200">
                    {/* Question */}
                    <h2 className="text-lg font-semibold mb-2">
                        {index + 1}.{" "}
                        <span
                            dangerouslySetInnerHTML={{ __html: q.question }}
                        />
                    </h2>

                    {/* Description / Paragraph type */}
                    {q.description && (
                        <p className="mb-4 text-gray-600">{q.description}</p>
                    )}

                    {/* Options */}
                    {["singleCorrect", "multiCorrect"].includes(q.type) && (
                        <ul className="space-y-2 ml-6">
                            {q.options.map((opt, optIndex) => (
                                <li key={optIndex} className="flex items-center gap-2">
                                    <span className="font-medium">
                                        {String.fromCharCode(65 + optIndex)}.
                                    </span>
                                    <span>{opt.label}</span>
                                    {opt.image && (
                                        <img
                                            src={opt.image}
                                            alt={`Option ${optIndex + 1}`}
                                            className="w-10 h-10 object-contain"
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Match the Following (simple table format) */}
                    {q.type === "matchTheFollowing" && (
                        <table className="w-full border mt-4">
                            <tbody>
                                {q.options.map((opt, optIndex) => (
                                    <tr key={optIndex} className="border">
                                        <td className="p-2 border-r font-semibold">
                                            {String.fromCharCode(65 + optIndex)}
                                        </td>
                                        <td className="p-2">{opt.label}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {/* Solution (optional in question paper) */}
                    {/* <div className="mt-4 text-sm text-green-700">
            <strong>Solution:</strong>{" "}
            <span dangerouslySetInnerHTML={{ __html: q.solution }} />
          </div> */}
                </div>
            ))}
        </div>
    );
};

export default DisplayQuestionPaperScreen;
