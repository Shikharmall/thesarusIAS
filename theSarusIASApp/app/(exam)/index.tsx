import AlertCustomise from "@/components/ui/AlertCustomise";
import { AlertProps } from "@/utils/types/alert";
import { QuestionStatus } from "@/utils/types/exam";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
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
  const [examName, setExamName] = useState<string>("");
  const [rollNum, setRollNum] = useState<string>("2025123456");
  const [userName, setUserName] = useState<string>("Shivam Singh");
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showNavigator, setShowNavigator] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<number>(1);
  const [questionStatuses, setQuestionStatuses] = useState<Record<number, QuestionStatus>>({});

  const allQuestions = examData?.sections?.flatMap((section) => section?.questions);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [answeredCount, setAnsweredCount] = useState<number>(0);
  const [flaggedCount, setFlaggedCount] = useState<number>(0);

  const [alertContent, setAlertContent] = useState<AlertProps>({
    visible: false,
    title: "",
    message: "",
    confirmLabel: "",
    cancelLabel: ""
  });

  const showAlert = (props: Partial<AlertProps>) => {
    setAlertContent({
      visible: true,
      title: props.title ?? "",
      message: props.message ?? "",
      confirmLabel: props.confirmLabel ?? "Ok",
      cancelLabel: props.cancelLabel ?? "",
      onConfirm: props.onConfirm,
      onCancel: props.onCancel,
    })
  }

  const handleChangeSection = (sectionId: number) => {
    setCurrentSection(sectionId)
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

  useEffect(() => {
    if (rollNumber) {
      setRollNum(Array.isArray(rollNumber) ? rollNumber[0] : rollNumber);
    }
    if (name) {
      setUserName(Array.isArray(name) ? name[0] : name);
    }
    if (title) {
      setExamName(Array.isArray(title) ? title[0] : title);
    }
  }, [rollNumber, name, title]);

  const backAction = () => {
    return true;
  };

  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }, [])
  );

  const handleTimeUp = () => {
    // Handle exam submission when time is up
    console.log("[v0] Exam time completed - auto submitting");
    router.push({
      pathname: "/(exam)/end",
      params: { userName, rollNum, totalQuestions, answeredCount, flaggedCount, examName },
    });
  }

  const handleSubmit = () => {
    showAlert({
      title: "Submit Examination",
      message: "Are you sure you want to submit your examination? This action cannot be undone.",
      confirmLabel: "Submit",
      cancelLabel: "Cancel",
      onConfirm: () => {
        router.push({
          pathname: "/(exam)/end",
          params: { userName, rollNum, totalQuestions, answeredCount, flaggedCount, examName },
        });
      },
    })
  }

  useEffect(() => {
    if (allQuestions?.length > 0) {
      const answered = allQuestions?.filter(q => questionStatuses[q.id]?.answered)?.length || 0;
      const flagged = allQuestions?.filter(q => questionStatuses[q.id]?.flagged)?.length || 0;
      setTotalQuestions(allQuestions?.length);
      setAnsweredCount(answered);
      setFlaggedCount(flagged);
    }
  }, [allQuestions]);

  return (
    <View style={styles.container}>
      <ExamHeader
        examName={examData?.title}
        onToggleNavigator={() => setShowNavigator(!showNavigator)}
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
            onSectionSelect={handleChangeSection}
            currentQuestion={currentQuestion}
            onQuestionSelect={(index: number) => {
              setCurrentQuestion(index)
            }}
            onQuestionCloseSelect={(index: number) => {
              setCurrentQuestion(index)
              setShowNavigator(false) // Auto-close on mobile after selection
            }}
            questionStatuses={questionStatuses}
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
          onQuestionChange={setCurrentQuestion}
          onSectionChange={setCurrentSection}
          sections={examData?.sections}
          onSubmit={handleSubmit}
        />
      </ResponsiveLayout>

      <AlertCustomise
        visible={alertContent?.visible}
        title={alertContent?.title}
        message={alertContent?.message}
        confirmLabel={alertContent?.confirmLabel}
        cancelLabel={alertContent?.cancelLabel}
        onConfirm={() => {
          if (alertContent.onConfirm) alertContent.onConfirm()
          setAlertContent((prev) => ({ ...prev, visible: false }))
        }}
        onCancel={() => {
          if (alertContent.onCancel) alertContent.onCancel()
          setAlertContent((prev) => ({ ...prev, visible: false }))
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingBottom: 40
  },
})
