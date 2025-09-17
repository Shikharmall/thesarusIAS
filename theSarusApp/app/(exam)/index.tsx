import AlertCustomise from "@/components/ui/AlertCustomise";
import { AlertProps } from "@/utils/types/alert";
import { QuestionStatus } from "@/utils/types/exam";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useMemo, useState } from "react";
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

  // Candidate details
  const [examName, setExamName] = useState("");
  const [rollNum, setRollNum] = useState("2025123456");
  const [userName, setUserName] = useState("Shivam Singh");

  // Exam state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showNavigator, setShowNavigator] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);
  const [questionStatuses, setQuestionStatuses] = useState<Record<number, QuestionStatus>>({});

  const allQuestions = examData?.sections?.flatMap((s) => s.questions) ?? [];

  // Derived values (no need to store in state)
  const { totalQuestions, answeredCount, flaggedCount } = useMemo(() => {
    const total = allQuestions.length;
    let answered = 0,
      flagged = 0;

    allQuestions.forEach((q) => {
      const status = questionStatuses[q.id];
      if (status?.answered) answered++;
      if (status?.flagged) flagged++;
    });

    return { totalQuestions: total, answeredCount: answered, flaggedCount: flagged };
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

  const closeAlert = () =>
    setAlertContent((prev) => ({ ...prev, visible: false }));

  // Question status updater
  const updateQuestionStatus = (id: number, changes: Partial<QuestionStatus>) =>
    setQuestionStatuses((prev) => ({
      ...prev,
      [id]: { ...prev[id], visited: true, ...changes },
    }));

  // Answer handlers
  const handleAnswerSelect = (id: number, selectedAnswer: number) =>
    updateQuestionStatus(id, { answered: true, selectedAnswer });

  const handleFlagQuestion = (id: number) =>
    updateQuestionStatus(id, { flagged: !questionStatuses[id]?.flagged });

  const handleClearResponse = (id: number) =>
    updateQuestionStatus(id, { answered: false, selectedAnswer: undefined });

  // Candidate info initialization
  useEffect(() => {
    if (rollNumber) setRollNum(Array.isArray(rollNumber) ? rollNumber[0] : rollNumber);
    if (name) setUserName(Array.isArray(name) ? name[0] : name);
    if (title) setExamName(Array.isArray(title) ? title[0] : title);
  }, [rollNumber, name, title]);

  // Disable back button
  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener("hardwareBackPress", () => true);
      return () => backHandler.remove();
    }, [])
  );

  // Handlers
  const handleTimeUp = () => {
    router.push({
      pathname: "/(exam)/end",
      params: { userName, rollNum, examName, totalQuestions, answeredCount, flaggedCount },
    });
  }

  const handleSubmit = () =>
    showAlert({
      title: "Submit Examination",
      message: "Are you sure you want to submit your examination? This action cannot be undone.",
      confirmLabel: "Submit",
      cancelLabel: "Cancel",
      onConfirm: () => {
        closeAlert();
        handleTimeUp();
      },
      onCancel: closeAlert,
    });

  return (
    <View style={styles.container}>
      <ExamHeader
        examName={examData?.title}
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
            currentQuestion={currentQuestion}
            questionStatuses={questionStatuses}
            onSectionSelect={setCurrentSection}
            onQuestionSelect={setCurrentQuestion}
            onQuestionCloseSelect={(index) => {
              setCurrentQuestion(index);
              setShowNavigator(false); // Auto-close on mobile
            }}
          />
        }
      >
        <QuestionDisplay
          currentQuestion={currentQuestion}
          currentSection={currentSection}
          sections={examData?.sections}
          questionStatuses={questionStatuses}
          onAnswerSelect={handleAnswerSelect}
          onFlagSelect={handleFlagQuestion}
          onClearSelect={handleClearResponse}
        />
        <ExamNavigation
          currentQuestion={currentQuestion}
          sections={examData?.sections}
          onQuestionChange={setCurrentQuestion}
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
