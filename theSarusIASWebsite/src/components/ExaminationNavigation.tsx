import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { Flag, ChevronLeft, ChevronRight, Send, RotateCcw } from "lucide-react"
import { ExamNavigationProps } from "../utils/type"
import { useEffect } from "react";
import { useState } from "react";

export function ExamNavigation({
  currentQuestion,
  sections,
  questionStatuses,
  onQuestionChange,
  onSectionChange,
  onFlagSelect,
  onClearSelect,
}: ExamNavigationProps) {

  const isFlagged = questionStatuses[currentQuestion]?.flagged;
  const allQuestions = sections?.flatMap((section) => section?.questions);
  const totalQuestions = allQuestions?.length;

  const [answeredCount, setAnsweredCount] = useState<number>(0);
  const [flaggedCount, setFlaggedCount] = useState<number>(0);

  const getCurrentSectionForIndex = (index: number): number => {
    let questionCount = 0
    for (const section of sections) {
      if (index < questionCount + section.questions.length) {
        return section?.id
      }
      questionCount += section.questions.length
    }
    return sections[0]?.id
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      const newIndex = currentQuestion - 1;
      onQuestionChange(newIndex);
      onSectionChange(getCurrentSectionForIndex(newIndex));
    }
  }

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      const newIndex = currentQuestion + 1;
      onQuestionChange(newIndex);
      onSectionChange(getCurrentSectionForIndex(newIndex));
    }
  }

  useEffect(() => {
    if (allQuestions?.length > 0) {
      const answered = allQuestions?.filter(q => questionStatuses[q.id]?.answered)?.length || 0;
      const flagged = allQuestions?.filter(q => questionStatuses[q.id]?.flagged)?.length || 0;
      setAnsweredCount(answered);
      setFlaggedCount(flagged);
    }
  }, [allQuestions]);

  return (
    <Card className="p-4 border-1 border-gray-300">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="flex items-center gap-2 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => onClearSelect(currentQuestion)}
            // disabled={!isAnswered}
            className="flex items-center gap-2 bg-transparent"
          >
            <RotateCcw className="h-4 w-4" />
            Clear Response
          </Button>

          <Button
            variant="outline"
            onClick={() => onFlagSelect(currentQuestion)}
            className={`flex items-center gap-2 ${isFlagged ? "bg-orange-100 text-orange-800 border-orange-300" : ""}`}
          >
            <Flag className="h-4 w-4" />
            {isFlagged ? "Unmark Review" : "Mark for Review"}
          </Button>

          {currentQuestion === totalQuestions - 1 ? (
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
  )
}
