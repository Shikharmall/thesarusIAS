import type { ExamNavigationProps } from "../../utils/types/testseries";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { Flag, ChevronLeft, ChevronRight, RotateCcw, Send } from "lucide-react";
import { useMemo } from "react";

export function ExamNavigation({
  currentQuestionId,
  sections,
  questionStatuses,
  onQuestionChange,
  onSectionChange,
  onFlagSelect,
  onClearSelect,
}: ExamNavigationProps) {
  // Flatten all questions with section index reference
  const allQuestions = useMemo(
    () =>
      sections.flatMap((section, sectionIndex) =>
        section.questions.map((q) => ({ ...q, sectionIndex }))
      ),
    [sections]
  );

  const totalQuestions = allQuestions.length;
  const currentIndex = allQuestions.findIndex(
    (q) => q.id === currentQuestionId
  );

  const isFirst = currentIndex <= 0;
  const isLast = currentIndex === totalQuestions - 1;
  const isFlagged = questionStatuses[currentQuestionId]?.flagged;

  // const answeredCount = useMemo(
  //   () => allQuestions.filter((q) => questionStatuses[q.id]?.answered).length,
  //   [allQuestions, questionStatuses]
  // );

  // const flaggedCount = useMemo(
  //   () => allQuestions.filter((q) => questionStatuses[q.id]?.flagged).length,
  //   [allQuestions, questionStatuses]
  // );

  const handlePrevious = () => {
    if (!isFirst) {
      const prev = allQuestions[currentIndex - 1];
      onSectionChange(prev.sectionIndex);
      onQuestionChange(prev.id);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      const next = allQuestions[currentIndex + 1];
      onSectionChange(next.sectionIndex);
      onQuestionChange(next.id);
    }
  };

  return (
    <Card className="p-4 border-1 border-gray-300 my-4">
      <div className="flex items-center justify-between">
        {/* Previous */}
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={isFirst}
          className="flex items-center gap-2 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="flex gap-2 items-center">
          {/* Clear */}
          <Button
            variant="outline"
            onClick={() => onClearSelect(currentQuestionId)}
            className="flex items-center gap-2 bg-transparent"
          >
            <RotateCcw className="h-4 w-4" />
            Clear Response
          </Button>

          {/* Flag */}
          <Button
            variant="outline"
            onClick={() => onFlagSelect(currentQuestionId)}
            className={`flex items-center gap-2 ${isFlagged
              ? "bg-orange-100 text-purple-800 border-purple-300"
              : ""
              }`}
          >
            <Flag className="h-4 w-4" />
            {isFlagged ? "Unmark Review" : "Mark for Review"}
          </Button>

          {/* Next or Submit */}
          {isLast ? (
            <Button className="bg-red-500 text-primary-foreground flex items-center gap-2">
              <Send className="h-4 w-4" />
              Submit Exam
            </Button>
          ) : (
            <Button onClick={handleNext} className="flex items-center gap-2">
              Save & Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
