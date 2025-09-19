import { useState } from "react";
import { motion } from "framer-motion";
import JoditEditor from "jodit-react";
import { themeColor } from "@renderer/utils/constant/Color";
import { Option, Question } from "@renderer/utils/types/questionbank";

interface EditQuestionModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const defaultOptions = (): Option[] =>
  Array.from({ length: 4 }, () => ({ label: "", isCorrect: false }));

export default function EditQuestionModal({ isOpen, setIsOpen }: EditQuestionModalProps) {
  const difficultyOptions: { value: Question["difficulty"]; label: string; color: string }[] = [
    { value: "easy", label: "Easy", color: "#10B981" },
    { value: "medium", label: "Medium", color: "#F59E0B" },
    { value: "hard", label: "Hard", color: "#EF4444" },
  ];

  const [question, setQuestion] = useState<Question>({
    question: "",
    difficulty: "easy",
    options: defaultOptions(),
    solution: "",
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-5xl rounded shadow-lg">
        
        {/* Header */}
        <div
          className="text-white text-lg font-semibold px-4 py-5 flex justify-between items-center rounded-t"
          style={{ backgroundColor: themeColor?.primary }}
        >
          <span>Edit Question</span>
          <button onClick={() => setIsOpen(false)} className="text-white cursor-pointer">✕</button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Difficulty */}
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
                >
                  <input
                    type="radio"
                    value={opt.value}
                    checked={isSelected}
                    onChange={() => setQuestion((q) => ({ ...q, difficulty: opt.value }))}
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

          {/* Question Text */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Question</label>
            <JoditEditor
              value={question.question}
              config={{ readonly: false, placeholder: "Type question..." }}
              onBlur={(newContent) =>
                setQuestion((q) => ({ ...q, question: newContent }))
              }
            />
          </div>

          {/* Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Options (select correct one)
            </label>
            {question.options.map((opt, optIndex) => (
              <div key={optIndex} className="flex items-start gap-2 my-2">
                <input
                  type="radio"
                  checked={opt.isCorrect}
                  onChange={() =>
                    setQuestion((q) => ({
                      ...q,
                      options: q.options.map((o, i) => ({
                        ...o,
                        isCorrect: i === optIndex,
                      })),
                    }))
                  }
                  className="w-5 h-5 accent-green-600 cursor-pointer mt-2"
                />
                <div className="flex-1">
                  <JoditEditor
                    value={opt.label}
                    config={{ readonly: false, placeholder: `Option ${optIndex + 1}...` }}
                    onBlur={(newContent) =>
                      setQuestion((q) => ({
                        ...q,
                        options: q.options.map((o, i) =>
                          i === optIndex ? { ...o, label: newContent } : o
                        ),
                      }))
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Solution */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Solution</label>
            <JoditEditor
              value={question.solution}
              config={{ readonly: false, placeholder: "Type solution..." }}
              onBlur={(newContent) =>
                setQuestion((q) => ({ ...q, solution: newContent }))
              }
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-3 border-t border-[#eee]">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded border border-[#eee] hover:bg-gray-100 cursor-pointer"
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 rounded text-white hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: themeColor?.primary }}
            onClick={() => {
              console.log("Saved Question:", question);
              setIsOpen(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
