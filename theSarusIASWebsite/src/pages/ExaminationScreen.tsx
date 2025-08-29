import { useState, useCallback, useRef, useEffect } from "react"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { ExamHeader } from "../components/ExaminationHeader"
import { QuestionNavigator } from "../components/QuestionNavigation"
import { MCQQuestion } from "../components/MCQQuestion"
import { ExamNavigation } from "../components/ExaminationNavigation"
import { themeColor } from "../utils/Color"
import { ExamData, Question, QuestionStatus } from "../utils/type"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { examDataUPSCGS1, examDataSSCCGL } from "../data/examData"

export default function ExaminationScreen() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  // const [questions, setQuestions] = useState(examData.questions);
  // const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [questionStatuses, setQuestionStatuses] = useState<Record<number, QuestionStatus>>({});

  const allQuestions = examDataSSCCGL?.sections?.flatMap((section) => section?.questions);
  const totalQuestions = allQuestions?.length;

  const currentQuestionData = examDataSSCCGL?.sections[currentSectionIndex]?.questions?.find((q) => q?.id === currentQuestion)
  //const progress = (questions?.filter((q) => q?.answered)?.length / questions?.length) * 100

  const getCurrentSection = () => {
    // const currentSectionData = examData?.sections?.find(
    //   (section) => currentQuestion >= section?.start && currentQuestion <= section?.end
    // );
    // return currentSectionData;
  }

  const handleTimeUp = useCallback(() => {
    setExamSubmitted(true)
    alert("Time is up! Your exam has been automatically submitted.")
  }, [])

  const handleQuestionSelect = (questionId: number) => {
    setCurrentQuestion(questionId)
  }

  const handleSectionSelect = (sectionId: number) => {
    setCurrentSectionIndex(sectionId)
  }

  const handleSubmit = () => {
    // const answeredCount = questions?.filter((q) => q?.answered)?.length
    const answeredCount = 5
    const confirmed = confirm(
      `You have answered ${answeredCount} out of ${totalQuestions} questions. Are you sure you want to submit?`,
    )
    if (confirmed) {
      setExamSubmitted(true)
    }
  }

  const handleAnswerSelect = (questionId: number, selectedAnswer: number) => {
    setQuestionStatuses((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        answered: true,
        visited: true,
        selectedAnswer,
      },
    }))
  }

  const handleFlagQuestion = (questionId: number) => {
    setQuestionStatuses((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        flagged: !prev[questionId]?.flagged,
        visited: true,
      },
    }))
  }

  const handleClearResponse = (questionId: number) => {
    setQuestionStatuses((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        answered: false,
        selectedAnswer: undefined,
        visited: true,
      },
    }))
  }

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
    const answeredCount = 3;
    const flaggedCount = 4;
    // const answeredCount = questions?.filter((q) => q?.answered)?.length;
    // const flaggedCount = questions?.filter((q) => q?.flagged)?.length;

    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 max-w-lg text-center">
          <h2 className="text-2xl font-bold text-foreground font-serif mb-4">Exam Submitted Successfully</h2>
          <div className="space-y-2 text-muted-foreground mb-6">
            <p>Thank you for completing the SSC examination.</p>
            <p>
              Questions Answered: {answeredCount || 0} out of {totalQuestions || 100}
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

  // console.log(currentQuestionData);

  return (
    <div className="h-screen flex flex-col"
      ref={elementRef}
      style={{ backgroundColor: themeColor?.lightSecondary }}
    >
      {/* Fixed header */}
      <div className="flex-shrink-0">
        <ExamHeader
          title={examDataSSCCGL?.title}
          currentQuestion={currentQuestion}
          // totalQuestions={totalQuestions}
          sectionData={examDataSSCCGL?.sections[currentSectionIndex]}
          duration={examDataSSCCGL?.duration}
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
          className={
            sidebarOpen
              ?
              "absolute top-110 left-75 z-10 bg-background border shadow-sm cursor-pointer bg-white" :
              "absolute top-110 left-5 z-10 bg-background border shadow-sm cursor-pointer"}
        >
          {sidebarOpen
            ? <ChevronLeft className="h-6 w-6" color={themeColor?.primary} />
            : <ChevronRight className="h-6 w-6" color={themeColor?.primary} />}
        </Button>

        {sidebarOpen && (
          <aside className="w-80 bg-sidebar border-r border-gray-300 flex-shrink-0 overflow-y-auto">
            <QuestionNavigator
              sections={examDataSSCCGL?.sections}
              currentQuestion={currentQuestion}
              currentSectionIndex={currentSectionIndex}
              onSectionSelect={handleSectionSelect}
              onQuestionSelect={handleQuestionSelect}
              questionStatuses={questionStatuses}
            />
          </aside>
        )}

        <main className="flex-1 overflow-y-auto bg-white">
          <div className="p-6">
            <div className="mx-auto space-y-6"
              style={{ marginLeft: sidebarOpen ? '0px' : "50px" }}
            >
              {currentQuestionData && (
                <MCQQuestion
                  sectionName={examDataSSCCGL?.sections[currentSectionIndex]?.name}
                  questionStatus={questionStatuses[currentQuestion]}
                  question={currentQuestionData}
                  onAnswerSelect={handleAnswerSelect}
                />
              )}

              <ExamNavigation
                currentQuestion={currentQuestion}
                sections={examDataSSCCGL?.sections}
                questionStatuses={questionStatuses}
                onQuestionChange={setCurrentQuestion}
                onSectionChange={setCurrentSectionIndex}
                onFlagSelect={handleFlagQuestion}
                onClearSelect={handleClearResponse}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
