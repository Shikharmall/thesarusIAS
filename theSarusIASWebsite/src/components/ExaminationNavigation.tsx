import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { Flag, ChevronLeft, ChevronRight, Send, RotateCcw } from "lucide-react"
import { ExamNavigationProps } from "../utils/type"

export function ExamNavigation({
  currentQuestion,
  totalQuestions,
  isFlagged,
  isAnswered,
  onPrevious,
  onNext,
  onFlag,
  onClearResponse,
  onSubmit,
}: ExamNavigationProps) {
  return (
    <Card className="p-4 border-1 border-gray-300">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={currentQuestion === 1}
          className="flex items-center gap-2 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={onClearResponse}
            disabled={!isAnswered}
            className="flex items-center gap-2 bg-transparent"
          >
            <RotateCcw className="h-4 w-4" />
            Clear Response
          </Button>

          <Button
            variant="outline"
            onClick={onFlag}
            className={`flex items-center gap-2 ${isFlagged ? "bg-orange-100 text-orange-800 border-orange-300" : ""}`}
          >
            <Flag className="h-4 w-4" />
            {isFlagged ? "Unmark Review" : "Mark for Review"}
          </Button>

          {currentQuestion === totalQuestions ? (
            <Button onClick={onSubmit} className="bg-red-500 text-primary-foreground flex items-center gap-2">
              <Send className="h-4 w-4" />
              Submit Exam
            </Button>
          ) : (
            <Button onClick={onNext} className="flex items-center gap-2">
              Save & Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
