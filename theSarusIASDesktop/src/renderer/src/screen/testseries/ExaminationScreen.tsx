import { useState, useRef, useEffect } from "react";
import { Button } from "../../components/common/Button";
import { QuestionNavigator } from "../../components/testseries/QuestionNavigation";
import { MCQQuestion } from "../../components/testseries/MCQQuestion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { examDataSSCCGL } from "../../data/examData";
import { themeColor } from "../../utils/constant/Color";
import { ExamHeader } from "../../components/testseries/ExaminationHeader";
import { ExamNavigation } from "../../components/testseries/ExaminationNavigation";
import type { QuestionStatus } from "../../utils/types/testseries";

export default function ExaminationScreen() {
  const navigate = useNavigate();
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [locked, setLocked] = useState<boolean>(false);
  const [questionStatuses, setQuestionStatuses] = useState<Record<number, QuestionStatus>>({
    1: { visited: true }, // Example: question 1 is visited
  });

  const elementRef = useRef<HTMLDivElement>(null);

  const allQuestions = examDataSSCCGL?.sections?.flatMap(
    (section) => section?.questions
  );

  const totalQuestions = allQuestions?.length || 0;

  const currentQuestionData =
    examDataSSCCGL?.sections[currentSectionIndex]?.questions?.find(
      (q) => q?.id === currentQuestionId
    );

  // Force fullscreen
  const handleFullScreen = () => {
    if (elementRef.current) {
      if (elementRef.current.requestFullscreen) {
        elementRef.current.requestFullscreen();
      } else if ((elementRef.current as any).webkitRequestFullscreen) {
        (elementRef.current as any).webkitRequestFullscreen();
      }
    }
  };

  const handleTimeUp = () => {
    const answeredCount = Object?.values(questionStatuses)?.filter(
      (q) => q?.answered
    )?.length;

    const flaggedCount = Object?.values(questionStatuses)?.filter(
      (q) => q?.flagged
    )?.length;
    navigate(`/examSubmit/${totalQuestions}/${answeredCount}/${flaggedCount}`);
  };

  const handleQuestionSelect = (questionId: number) => {
    setCurrentQuestionId(questionId);
    setQuestionStatuses((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        visited: true,
      },
    }));
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
    const answeredCount = Object?.values(questionStatuses)?.filter(
      (q) => q?.answered
    )?.length;

    const flaggedCount = Object?.values(questionStatuses)?.filter(
      (q) => q?.flagged
    )?.length;

    const confirmed = confirm(
      `You have answered ${answeredCount} out of ${totalQuestions}. Are you sure you want to submit?`
    );

    if (confirmed) {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("keydown", disableKeys, true);

      navigate(`/examSubmit/${totalQuestions}/${answeredCount}/${flaggedCount}`);
      if (document.exitFullscreen) document.exitFullscreen();
    }
  };

  // Prevent tab close/refresh
  const beforeUnloadHandler = (event: BeforeUnloadEvent): string | void => {
    event.preventDefault();
    event.returnValue = "";
    return "";
  };

  // Lock on tab switch/minimize
  const handleVisibilityChange = () => {
    if (document.hidden) {
      setLocked(true);
    }
  };

  const handleBlur = () => {
    setLocked(true);
  };

  // Disable shortcuts
  const disableKeys = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase();
    if (
      e.key === "F12" ||
      (e.ctrlKey && ["r", "n", "t", "w"].includes(key))
    ) {
      e.preventDefault();
      e.stopPropagation();
      alert("🚫 Shortcuts are disabled during the exam.");
    }
  };

  useEffect(() => {
    handleFullScreen();

    window.addEventListener("beforeunload", beforeUnloadHandler);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("keydown", disableKeys, true);

    const disableContextMenu = (e: MouseEvent) => e.preventDefault();
    const disableClipboard = (e: ClipboardEvent) => e.preventDefault();

    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("copy", disableClipboard);
    document.addEventListener("paste", disableClipboard);
    document.addEventListener("cut", disableClipboard);

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
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
      document.removeEventListener("copy", disableClipboard);
      document.removeEventListener("paste", disableClipboard);
      document.removeEventListener("cut", disableClipboard);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);


  console.log(questionStatuses)

  return (
    <div
      className="h-screen flex flex-col relative"
      ref={elementRef}
      style={{ backgroundColor: themeColor?.lightSecondary }}
    >
      {/* Lock overlay */}
      {locked && (
        <div className="absolute inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">🔒 Screen Locked</h2>
            <p className="mb-4">
              You switched windows or exited fullscreen.
              Click below to re-enter fullscreen and resume.
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
      <ExamHeader
        title={examDataSSCCGL?.title}
        currentQuestionId={currentQuestionId}
        sectionData={examDataSSCCGL?.sections[currentSectionIndex]}
        sections={examDataSSCCGL?.sections}
        startTimestamp={examDataSSCCGL?.startTimestamp}
        duration={examDataSSCCGL?.duration}
        onTimeUp={handleTimeUp}
        onSubmit={handleSubmit}
      />

      {/* Main body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={
            sidebarOpen
              ? "absolute bottom-30 left-75 z-10 bg-white border shadow-sm"
              : "absolute bottom-30 left-5 z-10 bg-white border shadow-sm"
          }
        >
          {sidebarOpen ? (
            <ChevronLeft className="h-6 w-6" color={themeColor?.primary} />
          ) : (
            <ChevronRight className="h-6 w-6" color={themeColor?.primary} />
          )}
        </Button>

        {sidebarOpen && (
          <aside className="w-80 bg-sidebar border-r flex-shrink-0 overflow-y-auto">
            <QuestionNavigator
              sections={examDataSSCCGL?.sections}
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
            {currentQuestionData && (
              <MCQQuestion
                sectionName={
                  examDataSSCCGL?.sections[currentSectionIndex]?.name
                }
                questionStatus={questionStatuses[currentQuestionId]}
                question={currentQuestionData}
                onAnswerSelect={handleAnswerSelect}
              />
            )}

            <ExamNavigation
              currentQuestionId={currentQuestionId}
              sections={examDataSSCCGL?.sections}
              questionStatuses={questionStatuses}
              onQuestionChange={handleQuestionSelect}
              onSectionChange={setCurrentSectionIndex}
              onFlagSelect={handleFlagQuestion}
              onClearSelect={handleClearResponse}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
