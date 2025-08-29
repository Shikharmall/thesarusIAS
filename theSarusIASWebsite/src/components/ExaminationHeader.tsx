import { Send } from "lucide-react"
import { ExamHeaderProps } from "../utils/type"
import { ExamTimer } from "./ExaminationTimer"
import { Button } from "./ui/Button"

export function ExamHeader({
    title,
    currentQuestionId,
    sectionData,
    duration,
    onTimeUp,
    onSubmit,
}: ExamHeaderProps) {
    if (!sectionData) return null

    const { questions, name } = sectionData
    const questionIndex = questions.findIndex(q => q?.id === currentQuestionId)

    return (
        <header className="bg-card border-b border-gray-200 px-6 py-5 shadow-sm">
            <div className="flex items-center justify-between">
                {/* Title + Question Info */}
                <div>
                    <h1 className="text-2xl font-bold text-card-foreground font-serif tracking-tight">
                        {title}
                    </h1>
                    <div className="flex items-center gap-6 mt-2">
                        <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-gray-700">Question</span>{" "}
                            {questionIndex + 1} of {questions.length}
                        </p>
                        <p className="text-sm text-blue-600 font-semibold">{name}</p>
                    </div>
                </div>

                {/* Timer + Profile */}
                <div className="flex items-center gap-8">
                    <ExamTimer duration={duration} onTimeUp={onTimeUp} />
                    <div className="flex flex-col items-center text-center">
                        <img
                            className="w-20 h-20 rounded-full border-2 border-[#0ab7f3] object-cover shadow-sm"
                            src="../../images/profile.png"
                            alt="profile"
                        />
                        <h2 className="text-sm font-semibold mt-2">Abhay Singh</h2>
                        <p className="text-xs text-muted-foreground">2025012345</p>
                    </div>
                </div>
            </div>

            {/* Instructions + Submit */}
            <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-3">
                <span className="text-orange-600 font-semibold underline cursor-pointer hover:text-orange-700 transition-colors">
                    INSTRUCTIONS
                </span>
                <Button
                    onClick={onSubmit}
                    className="bg-red-500 hover:bg-red-600 text-primary-foreground flex items-center gap-2 px-5 py-2 rounded-xl shadow-md transition-all"
                >
                    <Send className="h-4 w-4" />
                    Submit Exam
                </Button>
            </div>
        </header>
    )
}
