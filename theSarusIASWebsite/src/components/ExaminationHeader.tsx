import { Send } from "lucide-react"
import { Progress } from "../components/ui/Progress"
import { ExamHeaderProps } from "../utils/type"
import { ExamTimer } from "./ExaminationTimer"
import { Button } from "./ui/Button"

export function ExamHeader({
    title,
    currentQuestion,
    totalQuestions,
    currentSectionDetails,
    duration,
    onTimeUp,
    onSubmit,
}: ExamHeaderProps) {
    return (
        <header className="bg-card border-b border-gray-300 px-6 py-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-bold text-card-foreground font-serif">{title}</h1>
                    <div className="flex items-center gap-4 mt-1">
                        <p className="text-sm text-muted-foreground">
                            Question {currentQuestion} of {totalQuestions}
                        </p>
                        {currentSectionDetails && <p className="text-sm text-blue-600 font-medium">{currentSectionDetails?.name}</p>}
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <ExamTimer duration={duration} onTimeUp={onTimeUp} />
                    <div>
                        <img className="w-25 h-28 border-1 border-[#0ab7f3]" src="../../images/profile.png" alt="profile" />
                        <h1>Abhay Singh</h1>
                        <h1>2025123</h1>
                    </div>

                </div>
            </div>
            {/* <div className="mt-4">
                <Progress value={progress} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Progress: {Math.round(progress)}%</span>
                    <span>
                        {Math.round((progress / 100) * totalQuestions)} of {totalQuestions} answered
                    </span>
                </div>
            </div> */}
            <div className="mt-4">
                {/* <Progress value={progress} className="h-2" /> */}
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span className="text-orange-500 font-bold underline cursor-pointer">INSTRUCTIONS</span>
                    {/* <span>
                        {Math.round((progress / 100) * totalQuestions)} of {totalQuestions} answered
                    </span> */}

                    <Button onClick={onSubmit} className="bg-red-500 text-primary-foreground flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Submit Exam
                    </Button>
                </div>
            </div>
        </header>
    )
}
