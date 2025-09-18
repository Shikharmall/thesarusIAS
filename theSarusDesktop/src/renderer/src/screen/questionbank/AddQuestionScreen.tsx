import { useState } from "react";
import JoditEditor from "jodit-react";
import { ArrowLeftCircle, Plus, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Option, Question } from "../../utils/types/questionbank";
import { themeColor } from "../../utils/constant/Color";

// Helper to create default options
const defaultOptions = (): Option[] =>
    Array(4).fill({ label: "", isCorrect: false });

const AddQuestionScreen = () => {
    const navigate = useNavigate();

    const difficultyOptions: { value: Question["difficulty"]; label: string; color: string }[] =
        [
            { value: "easy", label: "Easy", color: "#10B981" },
            { value: "medium", label: "Medium", color: "#F59E0B" },
            { value: "hard", label: "Hard", color: "#EF4444" },
        ];

    const [questions, setQuestions] = useState<Question[]>([
        {
            question: "",
            difficulty: "easy",
            options: defaultOptions(),
            solution: "",
        },
    ]);

    const handleChange = <K extends keyof Question>(
        index: number,
        field: K,
        value: Question[K]
    ) => {
        setQuestions((prev) =>
            prev.map((q, i) => (i === index ? { ...q, [field]: value } : q))
        );
    };

    const handleOptionChange = (
        qIndex: number,
        optIndex: number,
        field: keyof Option,
        value: Option[keyof Option]
    ) => {
        setQuestions((prev) =>
            prev.map((q, i) =>
                i === qIndex
                    ? {
                        ...q,
                        options: q.options.map((opt, j) =>
                            j === optIndex ? { ...opt, [field]: value } : opt
                        ),
                    }
                    : q
            )
        );
    };

    const handleSingleCorrect = (qIndex: number, optIndex: number) => {
        setQuestions((prev) =>
            prev.map((q, i) =>
                i === qIndex
                    ? {
                        ...q,
                        options: q.options.map((opt, j) => ({
                            ...opt,
                            isCorrect: j === optIndex,
                        })),
                    }
                    : q
            )
        );
    };

    const addSection = () => {
        setQuestions([
            ...questions,
            {
                question: "",
                difficulty: "easy",
                options: defaultOptions(),
                solution: "",
            },
        ]);
    };

    const removeSection = (index: number) => {
        setQuestions(questions.filter((_, i) => i !== index));
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 p-5">
            <div className="bg-white rounded-md shadow-md p-6 mx-auto border-t-5 border-[#0ab7f3] w-full">
                <header className="flex items-center justify-between py-3">
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
                        Add Questions
                    </h1>
                    <div></div>
                </header>

                <h2 className="text-lg my-4">Enter the details to add questions</h2>

                <div className="space-y-8">
                    {questions.map((question, index) => (
                        <div key={index} className="relative border-b pb-6">
                            {/* Index + Difficulty */}
                            <div className="flex flex-row justify-between items-center">
                                <p style={{ color: themeColor?.primary }}>{index + 1}.</p>
                                <div className="flex gap-3">
                                    {difficultyOptions.map((opt) => {
                                        const isSelected = question.difficulty === opt.value;
                                        return (
                                            <label
                                                key={opt.value}
                                                className="relative cursor-pointer px-4 py-1.5 rounded-xl border text-sm transition"
                                                style={{
                                                    borderColor: isSelected ? opt.color : "#d1d5db",
                                                    backgroundColor: isSelected ? `${opt.color}20` : "#fff",
                                                }}
                                                onClick={() =>
                                                    handleChange(index, "difficulty", opt.value)
                                                }
                                            >
                                                <input
                                                    type="radio"
                                                    name={`difficulty-${index}`}
                                                    value={opt.value}
                                                    checked={isSelected}
                                                    readOnly
                                                    className="hidden"
                                                />
                                                <motion.span
                                                    animate={{ color: isSelected ? opt.color : "#6b7280" }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {opt.label}
                                                </motion.span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Question Text */}
                            <div className="my-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Question
                                </label>
                                <JoditEditor
                                    value={question.question}
                                    tabIndex={1}
                                    config={{
                                        readonly: false,
                                        placeholder: "Type question...",
                                    }}
                                    onBlur={(newContent) =>
                                        handleChange(index, "question", newContent)
                                    }
                                />
                            </div>

                            {/* Options */}
                            <div className="my-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Options (also select correct option)
                                </label>
                                {question.options.map((opt, optIndex) => (
                                    <div key={optIndex} className="flex flex-row items-start gap-2 my-2">
                                        <input
                                            type="radio"
                                            name={`option-${index}`}
                                            checked={opt.isCorrect}
                                            onChange={() => handleSingleCorrect(index, optIndex)}
                                            className="w-5 h-5 accent-green-600 cursor-pointer mt-2"
                                        />

                                        <div className="flex-1">
                                            <JoditEditor
                                                value={opt.label}
                                                config={{ readonly: false, placeholder: `Option ${optIndex + 1}...` }}
                                                tabIndex={1}
                                                onBlur={(newContent) =>
                                                    handleOptionChange(index, optIndex, "label", newContent)
                                                }
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>


                            {/* Solution */}
                            <div className="my-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Solution
                                </label>
                                <JoditEditor
                                    value={question.solution}
                                    config={{ readonly: false, placeholder: "Type solution..." }}
                                    tabIndex={1}
                                    onBlur={(newContent) =>
                                        handleChange(index, "solution", newContent)
                                    }
                                />
                            </div>

                            {/* Remove Question */}
                            {questions.length > 1 && (
                                <button
                                    onClick={() => removeSection(index)}
                                    className="absolute -top-0 right-60 ml-2 p-2 text-red-600 hover:bg-red-100 rounded-full cursor-pointer"
                                >
                                    <Trash size={16} />
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* Add Section */}
                <div className="flex justify-end mt-6">
                    <button
                        onClick={addSection}
                        className="mt-2 px-3 py-2 rounded text-white text-sm flex items-center gap-1 cursor-pointer"
                        style={{ backgroundColor: themeColor?.primary, color: "#fff" }}
                    >
                        <Plus size={14} /> Add Question
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddQuestionScreen;
