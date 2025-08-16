import { useState, useCallback, useRef, useEffect } from "react"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { ExamHeader } from "../components/ExaminationHeader"
import { QuestionNavigator } from "../components/QuestionNavigation"
import { MCQQuestion } from "../components/MCQQuestion"
import { ExamNavigation } from "../components/ExaminationNavigation"
import { themeColor } from "../utils/Color"
import { ExamData, Question } from "../utils/type"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

const examData: ExamData = {
  title: "SSC Combined Graduate Level Examination (Tier-I)",
  duration: 60,
  sections: [
    { id: 1, name: "General Intelligence & Reasoning", start: 1, end: 25 },
    { id: 2, name: "General Awareness", start: 26, end: 50 },
    { id: 3, name: "Quantitative Aptitude", start: 51, end: 75 },
    { id: 4, name: "English Comprehension", start: 76, end: 100 },
  ],
  questions: [
    ...Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      section: "General Intelligence & Reasoning",
      text: `Reasoning Question ${i + 1}`,
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answered: false,
      flagged: false,
      selectedAnswer: undefined,
    })),
    ...Array.from({ length: 25 }, (_, i) => ({
      id: i + 26,
      section: "General Awareness",
      text: `General Awareness Question ${i + 26}`,
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answered: false,
      flagged: false,
      selectedAnswer: undefined,
    })),
    ...Array.from({ length: 25 }, (_, i) => ({
      id: i + 51,
      section: "Quantitative Aptitude",
      text: `Quantitative Aptitude Question ${i + 51}`,
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answered: false,
      flagged: false,
      selectedAnswer: undefined,
    })),
    ...Array.from({ length: 25 }, (_, i) => ({
      id: i + 76,
      section: "English Comprehension",
      text: `English Comprehension Question ${i + 76}`,
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answered: false,
      flagged: false,
      selectedAnswer: undefined,
    })),
  ],
};

export default function ExaminationScreen() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [currentSection, setCurrentSection] = useState<number>(1);
  const [questions, setQuestions] = useState(examData.questions);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const currentQuestionData = questions?.find((q) => q?.id === currentQuestion)
  const progress = (questions?.filter((q) => q?.answered)?.length / questions?.length) * 100

  const getCurrentSection = () => {
    const currentSectionData = examData?.sections?.find(
      (section) => currentQuestion >= section?.start && currentQuestion <= section?.end
    );
    return currentSectionData;
  }

  const handleTimeUp = useCallback(() => {
    setExamSubmitted(true)
    alert("Time is up! Your exam has been automatically submitted.")
  }, [])

  const handleQuestionSelect = (questionId: number) => {
    setCurrentQuestion(questionId)
  }

  const handleSectionSelect = (sectionId: number) => {
    setCurrentSection(sectionId)
  }

  const handleMCQAnswer = (answer: string) => {
    // setQuestions((prev) =>
    //   prev.map((q) =>
    //     q.id === currentQuestion ? { ...q, selectedAnswer: answer, answered: true } : q
    //   )
    // )
  }

  const handleSubmit = () => {
    const answeredCount = questions?.filter((q) => q?.answered)?.length
    const confirmed = confirm(
      `You have answered ${answeredCount} out of ${questions?.length} questions. Are you sure you want to submit?`,
    )
    if (confirmed) {
      setExamSubmitted(true)
    }
  }

  const currentSectionDetails = getCurrentSection();
  const elementRef = useRef<HTMLDivElement>(null);

  // Enter fullscreen
  const handleFullScreen = () => {
    if (elementRef.current) {
      if (elementRef.current.requestFullscreen) {
        elementRef.current.requestFullscreen();
      } else if ((elementRef.current as any).webkitRequestFullscreen) {
        (elementRef.current as any).webkitRequestFullscreen();
      } else if ((elementRef.current as any).msRequestFullscreen) {
        (elementRef.current as any).msRequestFullscreen();
      }
    }
  };

  useEffect(() => {
    handleFullScreen();
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = ""; // Required for Chrome 
    };
    return () => { window.removeEventListener("beforeunload", handleBeforeUnload); };
  }, []);

  // useEffect(() => {
  //   handleFullScreen();

  //   const handleBeforeUnload = (event: BeforeUnloadEvent) => {
  //     event.preventDefault();
  //     event.returnValue = ""; // Required for Chrome
  //   };

  //   // Detect minimize or tab switch → auto submit
  //   const handleVisibilityChange = () => {
  //     if (document.hidden) {
  //       alert("You minimized or switched tabs! Test is submitted automatically.");
  //       setExamSubmitted(true);
  //     }
  //   };

  //   // Detect window losing focus → auto submit
  //   const handleBlur = () => {
  //     alert("You minimized or switched windows! Test is submitted automatically.");
  //     setExamSubmitted(true);
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);
  //   document.addEventListener("visibilitychange", handleVisibilityChange);
  //   window.addEventListener("blur", handleBlur);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //     document.removeEventListener("visibilitychange", handleVisibilityChange);
  //     window.removeEventListener("blur", handleBlur);
  //   };
  // }, []);

  if (examSubmitted) {
    const answeredCount = questions?.filter((q) => q?.answered)?.length;
    const flaggedCount = questions?.filter((q) => q?.flagged)?.length;

    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 max-w-lg text-center">
          <h2 className="text-2xl font-bold text-foreground font-serif mb-4">Exam Submitted Successfully</h2>
          <div className="space-y-2 text-muted-foreground mb-6">
            <p>Thank you for completing the SSC examination.</p>
            <p>
              Questions Answered: {answeredCount || 0} out of {questions.length || 100}
            </p>
            <p>Questions Flagged: {flaggedCount || 0}</p>
          </div>
          <div className="flex justify-center">
            <Link to={'/'} className="mt-4 text-white font-bold py-4 px-10 rounded" style={{ backgroundColor: themeColor?.primary }}>
              Exit
            </Link>

          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col"
      ref={elementRef}
      style={{ backgroundColor: themeColor?.lightSecondary }}
    >
      {/* Fixed header */}
      <div className="flex-shrink-0">
        <ExamHeader
          title={examData?.title}
          currentQuestion={currentQuestion}
          totalQuestions={questions?.length}
          currentSectionDetails={currentSectionDetails}
          progress={progress}
          duration={examData?.duration}
          onTimeUp={handleTimeUp}
          onSubmit={handleSubmit}
        />
      </div>

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={sidebarOpen ? "absolute top-110 left-75 z-10 bg-background border shadow-sm cursor-pointer bg-white" : "absolute top-110 left-5 z-10 bg-background border shadow-sm cursor-pointer"}
        >
          {sidebarOpen
            ? <ChevronLeft className="h-6 w-6" color={themeColor?.primary} />
            : <ChevronRight className="h-6 w-6" color={themeColor?.primary} />}
        </Button>

        {sidebarOpen && (
          <aside className="w-80 bg-sidebar border-r border-gray-300 flex-shrink-0 overflow-y-auto">
            <QuestionNavigator
              sections={examData?.sections}
              questions={(examData?.questions ?? []).filter(
                (q): q is Question => q !== undefined
              )}
              currentQuestion={currentQuestion}
              currentSection={currentSection}
              onSectionSelect={handleSectionSelect}
              onQuestionSelect={handleQuestionSelect}
            />
          </aside>
        )}

        <main className="flex-1 overflow-y-auto bg-white">
          <div className="p-6">
            <div className="mx-auto space-y-6"
              style={{ marginLeft: sidebarOpen ? '0px' : "50px" }}
            >
              {currentQuestionData && (
                <MCQQuestion question={currentQuestionData} onAnswerChange={handleMCQAnswer} />
              )}

              <ExamNavigation
                currentQuestion={currentQuestion}
                totalQuestions={questions?.length}
                isFlagged={currentQuestionData?.flagged || false}
                isAnswered={currentQuestionData?.answered || false}
                onPrevious={() => setCurrentQuestion(Math?.max(1, currentQuestion - 1))}
                onNext={() => setCurrentQuestion(Math?.min(questions?.length, currentQuestion + 1))}
                onFlag={() =>
                  setQuestions((prev) =>
                    prev?.map((q) =>
                      q?.id === currentQuestion ? { ...q, flagged: !q.flagged } : q
                    ) ?? []
                  )
                }
                onClearResponse={() =>
                  setQuestions((prev) =>
                    prev?.map((q) =>
                      q?.id === currentQuestion ? { ...q, selectedAnswer: undefined, answered: false } : q,
                    ),
                  )
                }
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
