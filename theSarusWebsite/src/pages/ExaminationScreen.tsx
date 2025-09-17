import { useState, useCallback, useRef, useEffect } from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { ExamHeader } from "../components/ExaminationHeader";
import { QuestionNavigator } from "../components/QuestionNavigation";
import { MCQQuestion } from "../components/MCQQuestion";
import { ExamNavigation } from "../components/ExaminationNavigation";
import { themeColor } from "../utils/Color";
import { QuestionStatus } from "../utils/type";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { examDataUPSCGS1 } from "../data/examData";

export default function ExaminationScreen() {
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [locked, setLocked] = useState<boolean>(false); // ✅ lock screen state
  const [questionStatuses, setQuestionStatuses] = useState<
    Record<number, QuestionStatus>
  >({});

  const allQuestions = examDataUPSCGS1?.sections?.flatMap(
    (section) => section?.questions
  );
  const totalQuestions = allQuestions?.length;
  const currentQuestionData =
    examDataUPSCGS1?.sections[currentSectionIndex]?.questions?.find(
      (q) => q?.id === currentQuestionId
    );

  const elementRef = useRef<HTMLDivElement>(null);

  // ✅ Force Fullscreen when exam starts
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

  const handleTimeUp = useCallback(() => {
    setExamSubmitted(true);
    alert("⏰ Time is up! Your exam has been automatically submitted.");
  }, []);

  const handleQuestionSelect = (questionId: number) => {
    setCurrentQuestionId(questionId);
  };

  const handleSectionSelect = (sectionId: number) => {
    setCurrentSectionIndex(sectionId);
  };

  const handleAnswerSelect = (questionId: number, selectedAnswer: number) => {
    setQuestionStatuses((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        answered: true,
        visited: true,
        selectedAnswer,
      },
    }));
  };

  const handleFlagQuestion = (questionId: number) => {
    setQuestionStatuses((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        flagged: !prev[questionId]?.flagged,
        visited: true,
      },
    }));
  };

  const handleClearResponse = (questionId: number) => {
    setQuestionStatuses((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        answered: false,
        selectedAnswer: undefined,
        visited: true,
      },
    }));
  };

  const handleSubmit = () => {
    const answeredCount = Object.values(questionStatuses).filter(
      (q) => q?.answered
    ).length;

    const confirmed = confirm(
      `You have answered ${answeredCount} out of ${totalQuestions}. Are you sure you want to submit?`
    );

    if (confirmed) {
      // ✅ allow close after submit
      window.removeEventListener("beforeunload", beforeUnloadHandler);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("keydown", disableKeys, true);

      setExamSubmitted(true);
      if (document.exitFullscreen) document.exitFullscreen();
    }
  };

  // 🚫 Prevent closing tab/window
  const beforeUnloadHandler = (event: BeforeUnloadEvent) => {
    if (!examSubmitted) {
      event.preventDefault();
      event.returnValue = "";
      return "";
    }
  };

  // 🚫 Auto lock screen on tab switch/minimize
  const handleVisibilityChange = () => {
    if (!examSubmitted && document.hidden) {
      setLocked(true);
    }
  };

  const handleBlur = () => {
    if (!examSubmitted) {
      setLocked(true);
    }
  };

  // 🚫 Disable keyboard shortcuts
  const disableKeys = (e: KeyboardEvent) => {
    if (
      e.key === "F12" || // DevTools
      (e.ctrlKey && ["r", "R", "n", "t", "w"].includes(e.key)) // refresh, new tab, close
    ) {
      e.preventDefault();
      e.stopPropagation();
      alert("Keyboard shortcuts are disabled during the exam.");
    }
  };

  useEffect(() => {
    handleFullScreen();

    // ✅ Security bindings
    window.addEventListener("beforeunload", beforeUnloadHandler);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("keydown", disableKeys, true);

    // 🚫 Block right click & copy/paste
    const disableContextMenu = (e: MouseEvent) => e.preventDefault();
    const disableCopyPaste = (e: ClipboardEvent) => e.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("copy", disableCopyPaste);
    document.addEventListener("paste", disableCopyPaste);

    // ✅ Detect fullscreen exit
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !examSubmitted) {
        setLocked(true);
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("keydown", disableKeys, true);
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("copy", disableCopyPaste);
      document.removeEventListener("paste", disableCopyPaste);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [examSubmitted]);

  // ✅ After Submit Screen
  if (examSubmitted) {
    const answeredCount = Object.values(questionStatuses).filter(
      (q) => q?.answered
    ).length;
    const flaggedCount = Object.values(questionStatuses).filter(
      (q) => q?.flagged
    ).length;

    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 max-w-lg text-center">
          <h2 className="text-2xl font-bold text-foreground font-serif mb-4">
            ✅ Exam Submitted Successfully
          </h2>
          <div className="space-y-2 text-muted-foreground mb-6">
            <p>Thank you for completing the SSC examination.</p>
            <p>
              Questions Answered: {answeredCount || 0} out of{" "}
              {totalQuestions || 100}
            </p>
            <p>Questions Flagged: {flaggedCount || 0}</p>
          </div>
          <div className="flex justify-center">
            <Link
              to={"/"}
              className="mt-4 text-white font-bold py-4 px-10 rounded"
              style={{ backgroundColor: themeColor?.primary }}
            >
              Exit
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  // ✅ Main Exam UI
  return (
    <div
      className="h-screen flex flex-col relative"
      ref={elementRef}
      style={{ backgroundColor: themeColor?.lightSecondary }}
    >
      {/* 🔒 Lock Screen Overlay */}
      {locked && (
        <div className="absolute inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">🔒 Screen Locked</h2>
            <p className="mb-4">
              You switched windows or exited fullscreen. Click below to
              re-enter fullscreen and resume.
            </p>
            <Button
              onClick={() => {
                setLocked(false);
                handleFullScreen();
              }}
            >
              Resume Exam
            </Button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex-shrink-0">
        <ExamHeader
          title={examDataUPSCGS1?.title}
          currentQuestionId={currentQuestionId}
          sectionData={examDataUPSCGS1?.sections[currentSectionIndex]}
          sections={examDataUPSCGS1?.sections}
          duration={examDataUPSCGS1?.duration}
          onTimeUp={handleTimeUp}
          onSubmit={handleSubmit}
        />
      </div>

      {/* Main */}
      <div className="flex flex-1 overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={
            sidebarOpen
              ? "absolute top-110 left-75 z-10 bg-background border shadow-sm cursor-pointer bg-white"
              : "absolute top-110 left-5 z-10 bg-background border shadow-sm cursor-pointer"
          }
        >
          {sidebarOpen ? (
            <ChevronLeft className="h-6 w-6" color={themeColor?.primary} />
          ) : (
            <ChevronRight className="h-6 w-6" color={themeColor?.primary} />
          )}
        </Button>

        {sidebarOpen && (
          <aside className="w-80 bg-sidebar border-r border-gray-300 flex-shrink-0 overflow-y-auto">
            <QuestionNavigator
              sections={examDataUPSCGS1?.sections}
              currentQuestionId={currentQuestionId}
              currentSectionIndex={currentSectionIndex}
              onSectionSelect={handleSectionSelect}
              onQuestionSelect={handleQuestionSelect}
              questionStatuses={questionStatuses}
            />
          </aside>
        )}

        <main className="flex-1 overflow-y-auto bg-white">
          <div className="p-6">
            <div
              className="mx-auto space-y-6"
              style={{ marginLeft: sidebarOpen ? "0px" : "50px" }}
            >
              {currentQuestionData && (
                <MCQQuestion
                  sectionName={
                    examDataUPSCGS1?.sections[currentSectionIndex]?.name
                  }
                  questionStatus={questionStatuses[currentQuestionId]}
                  question={currentQuestionData}
                  onAnswerSelect={handleAnswerSelect}
                />
              )}

              <ExamNavigation
                currentQuestionId={currentQuestionId}
                sections={examDataUPSCGS1?.sections}
                questionStatuses={questionStatuses}
                onQuestionChange={setCurrentQuestionId}
                onSectionChange={setCurrentSectionIndex}
                onFlagSelect={handleFlagQuestion}
                onClearSelect={handleClearResponse}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
