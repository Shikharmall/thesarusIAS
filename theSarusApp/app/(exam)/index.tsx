import AlertCustomise from "@/components/ui/AlertCustomise";
import { AlertProps } from "@/utils/types/alert";
import { QuestionStatus } from "@/utils/types/exam";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useMemo, useState } from "react";
import { BackHandler, StyleSheet, View } from "react-native";
import ExamHeader from "../../components/exam/ExamHeader";
import ExamNavigation from "../../components/exam/ExamNavigation";
import QuestionDisplay from "../../components/exam/QuestionDisplay";
import QuestionNavigator from "../../components/exam/QuestionNavigation";
import ResponsiveLayout from "../../components/exam/ResponsiveLayout";
import { examData } from "../../data/examData";
import { Colors } from "../../utils/constant/Colors";

export default function ExamScreen() {
  const { name, rollNumber, title } = useLocalSearchParams<{
    rollNumber?: string | string[];
    name?: string | string[];
    title?: string | string[];
  }>();

  const router = useRouter();

  // Candidate info
  const examName = Array.isArray(title) ? title[0] : title ?? examData?.title ?? "";
  const rollNum = Array.isArray(rollNumber) ? rollNumber[0] : rollNumber ?? "2025123456";
  const userName = Array.isArray(name) ? name[0] : name ?? "Shivam Singh";

  // Exam state
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [showNavigator, setShowNavigator] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);
  const [questionStatuses, setQuestionStatuses] = useState<Record<number, QuestionStatus>>({
    1: { visited: true },
  });

  // Prevent multiple navigation on time up
  const [timeUpTriggered, setTimeUpTriggered] = useState(false);

  // Flatten all questions
  const allQuestions = useMemo(
    () => examData.sections?.flatMap((s) => s.questions) ?? [],
    []
  );

  // Derived stats with mutually exclusive counts
  const { totalQuestions, answeredCount, flaggedCount, answeredFlaggedCount } = useMemo(() => {
    let answered = 0,
      flagged = 0,
      answeredFlagged = 0;

    allQuestions.forEach((q) => {
      const status = questionStatuses[q?.id];

      if (!status) return;

      if (status.answered && status.flagged) {
        answeredFlagged++;
      } else if (status.answered) {
        answered++;
      } else if (status.flagged) {
        flagged++;
      }
    });

    return {
      totalQuestions: allQuestions.length,
      answeredCount: answered,
      flaggedCount: flagged,
      answeredFlaggedCount: answeredFlagged,
    };
  }, [allQuestions, questionStatuses]);


  // Alert state
  const [alertContent, setAlertContent] = useState<AlertProps>({
    visible: false,
    title: "",
    message: "",
    confirmLabel: "",
    cancelLabel: "",
  });

  const showAlert = (props: Partial<AlertProps>) =>
    setAlertContent((prev) => ({ ...prev, ...props, visible: true }));

  const closeAlert = () => setAlertContent((prev) => ({ ...prev, visible: false }));

  // Question status updater
  const updateQuestionStatus = (id: number, changes: Partial<QuestionStatus>) =>
    setQuestionStatuses((prev) => ({
      ...prev,
      [id]: { ...prev[id], visited: true, ...changes },
    }));

  // Handlers
  const handleAnswerSelect = (id: number, selectedAnswer: number) =>
    updateQuestionStatus(id, { answered: true, selectedAnswer });

  const handleFlagQuestion = (id: number) =>
    updateQuestionStatus(id, { flagged: !questionStatuses[id]?.flagged });

  const handleClearResponse = (id: number) =>
    updateQuestionStatus(id, { answered: false, selectedAnswer: undefined });

  const handleQuestionSelect = (newQuestionIndex: number) => {
    const questionId = allQuestions[newQuestionIndex]?.id;
    if (questionId) {
      setCurrentQuestionId(questionId);
      updateQuestionStatus(questionId, { visited: true });
    }
  };

  // Navigate to exam end screen (only once)
  const handleTimeUp = () => {
    if (timeUpTriggered) return;
    setTimeUpTriggered(true);

    router.push({
      pathname: "/(exam)/end",
      params: { userName, rollNum, examName, totalQuestions, answeredCount, flaggedCount, answeredFlaggedCount },
    });
  };

  const handleSubmit = () =>
    showAlert({
      title: "Submit Examination",
      message: "Are you sure you want to submit your examination? This action cannot be undone.",
      confirmLabel: "Submit",
      cancelLabel: "Cancel",
      onConfirm: handleTimeUp,
      onCancel: closeAlert,
    });

  // Disable hardware back button
  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener("hardwareBackPress", () => true);
      return () => backHandler.remove();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ExamHeader
        examName={examName}
        onToggleNavigator={() => setShowNavigator((prev) => !prev)}
        showNavigator={showNavigator}
        startTimestamp={examData?.startTimestamp}
        duration={examData?.duration}
        onTimeUp={handleTimeUp}
      />

      <ResponsiveLayout
        showSidebar={showNavigator}
        sidebar={
          <QuestionNavigator
            sections={examData?.sections}
            currentSection={currentSection}
            currentQuestionId={currentQuestionId}
            questionStatuses={questionStatuses}
            onSectionSelect={setCurrentSection}
            onQuestionSelect={handleQuestionSelect}
            onQuestionCloseSelect={(index) => {
              handleQuestionSelect(index);
              setShowNavigator(false);
            }}
          />
        }
      >
        <QuestionDisplay
          currentQuestionId={currentQuestionId}
          currentSection={currentSection}
          sections={examData?.sections}
          questionStatuses={questionStatuses}
          onAnswerSelect={handleAnswerSelect}
          onFlagSelect={handleFlagQuestion}
          onClearSelect={handleClearResponse}
        />
        <ExamNavigation
          currentQuestionId={currentQuestionId}
          sections={examData?.sections}
          onQuestionChange={handleQuestionSelect}
          onSectionChange={setCurrentSection}
          onSubmit={handleSubmit}
        />
      </ResponsiveLayout>

      <AlertCustomise
        {...alertContent}
        onConfirm={() => {
          alertContent.onConfirm?.();
          closeAlert();
        }}
        onCancel={() => {
          alertContent.onCancel?.();
          closeAlert();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingBottom: 40,
  },
});
