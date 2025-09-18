import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { examData } from "../../data/examData";
import { themeColor } from "../../utils/constant/Color";
import { Button } from "../../components/common/Button";
import { ExamHeader } from "../../components/testseries/ExaminationHeader";
import { ExamNavigation } from "../../components/testseries/ExaminationNavigation";
import { QuestionNavigator } from "../../components/testseries/QuestionNavigation";
import { MCQQuestion } from "../../components/testseries/MCQQuestion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { QuestionStatus } from "../../utils/types/testseries";

export default function ExaminationScreen() {
  const navigate = useNavigate();
  const elementRef = useRef<HTMLDivElement>(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [locked, setLocked] = useState(false);
  const [questionStatuses, setQuestionStatuses] = useState<Record<number, QuestionStatus>>({
    1: { visited: true },
  });

  const allQuestions = useMemo(
    () => examData?.sections?.flatMap(s => s?.questions) || [],
    []
  );

  const totalQuestions = allQuestions.length;

  // ----- Helpers -----
  const countAnswered = useCallback(() => Object.values(questionStatuses).filter(q => q?.answered && !q?.flagged).length, [questionStatuses]);
  const countFlagged = useCallback(() => Object.values(questionStatuses).filter(q => q?.flagged && !q?.answered).length, [questionStatuses]);
  const countAnsweredFlagged = useCallback(() => Object.values(questionStatuses).filter(q => q?.flagged && q?.answered).length, [questionStatuses]);

  const handleQuestionSelect = (questionId: number) => {
    setCurrentQuestionIndex(questionId);
    setQuestionStatuses(prev => ({
      ...prev,
      [questionId]: { ...prev[questionId], visited: true },
    }));
  };

  const handleSectionSelect = setCurrentSectionIndex;

  const handleAnswerSelect = (questionId: number, selectedAnswer: number) => {
    setQuestionStatuses(prev => ({
      ...prev,
      [questionId]: { ...prev[questionId], answered: true, visited: true, selectedAnswer },
    }));
  };

  const handleFlagQuestion = (questionId: number) => {
    setQuestionStatuses(prev => ({
      ...prev,
      [questionId]: { ...prev[questionId], flagged: !prev[questionId]?.flagged, visited: true },
    }));
  };

  const handleClearResponse = (questionId: number) => {
    setQuestionStatuses(prev => ({
      ...prev,
      [questionId]: { ...prev[questionId], answered: false, selectedAnswer: undefined, visited: true },
    }));
  };

  const handleFullScreen = () => {
    if (elementRef.current) {
      const el: any = elementRef.current;
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    }
  };

  const handleTimeUp = () => {
    navigate(`/examSubmit/${totalQuestions}/${countAnswered()}/${countFlagged()}/${countAnsweredFlagged()}`);
  };

  const handleSubmit = () => {
    const confirmed = confirm(
      `You have answered ${countAnswered() + countAnsweredFlagged()} out of ${totalQuestions}. Are you sure you want to submit?`
    );
    if (confirmed) handleTimeUp();
  };

  // ----- Lock and prevent events -----
  useEffect(() => {
    handleFullScreen();

    const beforeUnloadHandler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    const handleVisibilityChange = () => { if (document.hidden) setLocked(true); };
    const handleBlur = () => setLocked(true);
    const disableKeys = (e: KeyboardEvent) => {
      if (["F12"].includes(e.key) || (e.ctrlKey && ["r", "n", "t", "w"].includes(e.key.toLowerCase()))) {
        e.preventDefault();
        e.stopPropagation();
        alert("🚫 Shortcuts are disabled during the exam.");
      }
    };
    const disableContextMenu = (e: MouseEvent) => e.preventDefault();
    const disableClipboard = (e: ClipboardEvent) => e.preventDefault();
    const handleFullscreenChange = () => { if (!document.fullscreenElement) setLocked(true); };

    window.addEventListener("beforeunload", beforeUnloadHandler);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("keydown", disableKeys, true);
    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("copy", disableClipboard);
    document.addEventListener("paste", disableClipboard);
    document.addEventListener("cut", disableClipboard);
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

  return (
    <div
      ref={elementRef}
      className="h-screen flex flex-col relative"
      style={{ backgroundColor: themeColor.lightSecondary }}
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
            <Button onClick={() => { setLocked(false); handleFullScreen(); }}>Resume Exam</Button>
          </div>
        </div>
      )}

      {/* Header */}
      <ExamHeader
        title={examData.title}
        currentQuestionIndex={currentQuestionIndex}
        sectionData={examData.sections[currentSectionIndex]}
        sections={examData.sections}
        startTimestamp={examData.startTimestamp}
        duration={examData.duration}
        onTimeUp={handleTimeUp}
        onSubmit={handleSubmit}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(prev => !prev)}
          className={`absolute bottom-30 z-10 bg-white border shadow-sm ${sidebarOpen ? "left-75" : "left-5"}`}
        >
          {sidebarOpen ? <ChevronLeft className="h-6 w-6" color={themeColor.primary} /> : <ChevronRight className="h-6 w-6" color={themeColor.primary} />}
        </Button>

        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-80 bg-sidebar border-r flex-shrink-0 overflow-y-auto">
            <QuestionNavigator
              sections={examData.sections}
              currentQuestionIndex={currentQuestionIndex}
              currentSectionIndex={currentSectionIndex}
              onSectionSelect={handleSectionSelect}
              onQuestionSelect={handleQuestionSelect}
              questionStatuses={questionStatuses}
            />
          </aside>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-white">
          <div className="p-6">
            {currentQuestionIndex && (
              <MCQQuestion
                currentSectionIndex={currentSectionIndex}
                sections={examData?.sections}
                questionStatus={questionStatuses[currentQuestionIndex]}
                currentQuestionIndex={currentQuestionIndex}
                onAnswerSelect={handleAnswerSelect}
              />
            )}

            <ExamNavigation
              currentQuestionIndex={currentQuestionIndex}
              sections={examData.sections}
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
