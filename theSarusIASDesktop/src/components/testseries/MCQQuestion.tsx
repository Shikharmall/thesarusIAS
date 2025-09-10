import { useEffect, useRef } from "react";
import { Card } from "../ui/Card";
import type { MCQQuestionProps } from "../../utils/types/testseries";

export function MCQQuestion({
  sectionName,
  questionStatus,
  question,
  onAnswerSelect,
}: MCQQuestionProps) {
  const selectedAnswer = questionStatus?.selectedAnswer;
  const topAnchorRef = useRef<HTMLDivElement | null>(null);

  // Snap this component to the top of the nearest scrollable container
  useEffect(() => {
    // run after paint to ensure DOM is laid out
    requestAnimationFrame(() => {
      topAnchorRef.current?.scrollIntoView({
        block: "nearest",  // instead of "start"
        inline: "nearest",
        behavior: "auto",
      });
    });
  }, [question?.id]);

  return (
    <Card className="p-6 bg-[#fefce8] border border-gray-300">
      {/* Invisible anchor that we scroll into view */}
      <div ref={topAnchorRef} aria-hidden="true" />

      <div className="space-y-6">
        {/* Question Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-card-foreground">
              Q.{question?.id}
            </span>
            {sectionName && (
              <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                {sectionName}
              </span>
            )}
          </div>
          <p className="text-card-foreground leading-relaxed text-base">
            {question?.question}
          </p>
        </div>

        {/* Options */}
        <div className="flex flex-col space-y-3">
          {(question?.options ?? []).map((option, index) => {
            const isSelected = selectedAnswer === index;

            return (
              <button
                key={index}
                type="button"
                onClick={() => onAnswerSelect(question?.id, index)}
                aria-pressed={isSelected}
                className={`flex items-center px-4 py-4 rounded-xl min-h-[56px] text-left transition-colors border ${isSelected
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-blue-300"
                  }`}
              >
                <div
                  className={`w-6 h-6 mr-4 flex items-center justify-center rounded-full border ${isSelected ? "border-blue-500" : "border-gray-300"
                    }`}
                >
                  {isSelected && <div className="w-3 h-3 rounded-full bg-blue-600" />}
                </div>

                <span
                  className={`flex-1 text-[15px] leading-[22px] ${isSelected ? "text-blue-600 font-medium" : "text-gray-800"
                    }`}
                >
                  {option}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
