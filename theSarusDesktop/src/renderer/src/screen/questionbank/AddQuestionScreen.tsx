import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { ArrowLeftCircle, Minus, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Option, QuestionTypes } from "../../utils/types/questionbank";
import { themeColor } from "../../utils/constant/Color";
// import { js_beautify } from "js-beautify";

interface Question {
    type: string;
    question: string;
    duration: string;
    description: string;
    difficulty: "easy" | "medium" | "hard";
    options: Option[];
    solution: string;
}

const AddQuestionScreen = () => {
    const navigate = useNavigate();
    const editor = useRef(null);

    const questionTypes: QuestionTypes[] = [
        { type: "singleCorrect", label: "Single Correct" },
        { type: "multiCorrect", label: "Multiple Correct" },
        { type: "matchTheFollowing", label: "Match the Following" },
        { type: "paragraph", label: "Paragraph" },
    ];

    const difficultyOptions: {
        value: "easy" | "medium" | "hard";
        label: string;
        color: string;
    }[] = [
            { value: "easy", label: "Easy", color: "green" },
            { value: "medium", label: "Medium", color: "yellow" },
            { value: "hard", label: "Hard", color: "red" },
        ];

    const [questions, setQuestions] = useState<Question[]>([
        {
            type: "singleCorrect",
            question: "",
            duration: "",
            description: "",
            difficulty: "easy",
            options: [
                { label: "", isCorrect: false },
                { label: "", isCorrect: false },
                { label: "", isCorrect: false },
                { label: "", isCorrect: false },
            ],
            solution: "",
        },
    ]);

    /** Generic change handler */
    const handleChange = <K extends keyof Question>(
        index: number,
        field: K,
        value: Question[K]
    ) => {
        setQuestions((prev) =>
            prev.map((q, i) => (i === index ? { ...q, [field]: value } : q))
        );
    };

    /** Handle Option change */
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

    /** Single Correct: mark only one option */
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

    /** Multi Correct: toggle option */
    const handleMultiCorrect = (qIndex: number, optIndex: number) => {
        setQuestions((prev) =>
            prev.map((q, i) =>
                i === qIndex
                    ? {
                        ...q,
                        options: q.options.map((opt, j) =>
                            j === optIndex ? { ...opt, isCorrect: !opt.isCorrect } : opt
                        ),
                    }
                    : q
            )
        );
    };

    /** Add Question */
    const addSection = () => {
        setQuestions([
            ...questions,
            {
                type: "singleCorrect",
                question: "",
                duration: "",
                description: "",
                difficulty: "easy",
                options: [
                    { label: "", isCorrect: false },
                    { label: "", isCorrect: false },
                    { label: "", isCorrect: false },
                    { label: "", isCorrect: false },
                ],
                solution: "",
            },
        ]);
    };

    /** Remove Question */
    const removeSection = (index: number) => {
        setQuestions(questions.filter((_, i) => i !== index));
    };

    console.log(questions);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 p-5">
            <div className="bg-white rounded-md shadow-md p-6 max-w-4xl mx-auto border-t-5 border-[#0ab7f3] w-4xl">
                {/* Header */}
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
                                                className={`relative cursor-pointer px-4 py-1.5 rounded-xl border text-sm transition ${isSelected
                                                    ? `border-${opt.color}-500 bg-${opt.color}-50`
                                                    : "border-gray-300 bg-white"
                                                    }`}
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
                                                    animate={{
                                                        color: isSelected
                                                            ? `rgb(var(--tw-${opt.color}-600))`
                                                            : "#6b7280",
                                                    }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {opt.label}
                                                </motion.span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Question Type Tabs */}
                            <div className="flex flex-row my-4 border-b border-[#eee] relative">
                                {questionTypes.map((item, ind) => {
                                    const isActive = question.type === item.type;
                                    return (
                                        <div
                                            key={ind}
                                            className="relative px-2 py-3 cursor-pointer text-sm text-gray-500"
                                            style={{
                                                color: isActive ? themeColor?.primary : "",
                                            }}
                                            onClick={() => handleChange(index, "type", item.type)}
                                        >
                                            <motion.span
                                                animate={{
                                                    scale: isActive ? 1.05 : 1,
                                                    opacity: isActive ? 1 : 0.6,
                                                    color: isActive
                                                        ? themeColor?.primary
                                                        : "#6b7280",
                                                }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                {item.label}
                                            </motion.span>
                                            {isActive && (
                                                <motion.div
                                                    layoutId={`underline-${index}`}
                                                    className="absolute bottom-0 left-0 right-0"
                                                    style={{
                                                        borderBottom: `3px solid ${themeColor?.primary}`,
                                                    }}
                                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Question Text */}
                            <div className="my-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Question
                                </label>
                                <JoditEditor
                                    ref={editor}
                                    value={question.question}
                                    config={{ readonly: false, placeholder: "Type question..." }}
                                    tabIndex={1}
                                    onBlur={(newContent) =>
                                        handleChange(index, "question", newContent)
                                    }
                                />
                            </div>

                            {/* Options */}
                            {["singleCorrect", "multiCorrect"].includes(question.type) && (
                                <div className="my-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Options
                                    </label>
                                    {question.options.map((opt, optIndex) => (
                                        <div
                                            key={optIndex}
                                            className="flex flex-row items-center gap-2 my-2"
                                        >
                                            {question.type === "singleCorrect" ? (
                                                <input
                                                    type="radio"
                                                    name={`option-${index}`}
                                                    checked={opt.isCorrect}
                                                    onChange={() => handleSingleCorrect(index, optIndex)}
                                                    className="w-5 h-5 accent-green-600 cursor-pointer"
                                                />
                                            ) : (
                                                <input
                                                    type="checkbox"
                                                    checked={opt.isCorrect}
                                                    onChange={() => handleMultiCorrect(index, optIndex)}
                                                    className="w-5 h-5 accent-green-600 cursor-pointer"
                                                />
                                            )}

                                            <input
                                                type="text"
                                                placeholder={`Option ${optIndex + 1}`}
                                                value={opt.label}
                                                onChange={(e) =>
                                                    handleOptionChange(index, optIndex, "label", e.target.value)
                                                }
                                                className="flex-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-[#0ab7f3] focus:outline-none"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Solution */}
                            <div className="my-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Solution
                                </label>
                                <JoditEditor
                                    ref={editor}
                                    value={question.question}
                                    config={{
                                        readonly: false,
                                        placeholder: "Type question...",
                                        //textBeautifier: js_beautify,
                                    }}
                                    tabIndex={1}
                                    onBlur={(newContent) => handleChange(index, "question", newContent)}
                                />
                            </div>

                            {/* Remove Question */}
                            {questions.length > 1 && (
                                <button
                                    onClick={() => removeSection(index)}
                                    className="absolute -top-3 -right-3 p-2 rounded-full"
                                    style={{ backgroundColor: themeColor?.primary }}
                                >
                                    <Minus size={16} color="white" />
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* Add Section */}
                <div className="flex justify-end mt-6">
                    <button
                        onClick={addSection}
                        className="cursor-pointer text-white rounded-full p-3 shadow transition"
                        style={{ backgroundColor: themeColor?.primary }}
                    >
                        <Plus size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddQuestionScreen;
