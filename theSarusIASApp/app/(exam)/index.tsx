import AlertCustomise from "@/components/ui/AlertCustomise";
import { AlertProps } from "@/utils/types/alert";
import { QuestionStatus } from "@/utils/types/exam";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { BackHandler, StyleSheet, View } from "react-native";
import ExamHeader from "../../components/exam/ExamHeader";
import ExamNavigation from "../../components/exam/ExamNavigation";
import QuestionDisplay from "../../components/exam/QuestionDisplay";
import QuestionNavigator from "../../components/exam/QuestionNavigation";
import ResponsiveLayout from "../../components/ResponsiveLayout";
import { examData } from "../../data/examData";
import { Colors } from "../../utils/constant/Colors";

export default function ExamScreen() {
  const { name, rollNumber, title } = useLocalSearchParams<{
    rollNumber?: string | string[];
    name?: string | string[];
    title?: string | string[];
  }>();
  const [examName, setExamName] = useState<string>("");
  const [rollNum, setRollNum] = useState<string>("2025123456");
  const [userName, setUserName] = useState<string>("Shivam Singh");
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showNavigator, setShowNavigator] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<number>(1);
  const [questionStatuses, setQuestionStatuses] = useState<Record<number, QuestionStatus>>({});
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

  return (
    <View style={styles.container}>
      <ExamHeader onToggleNavigator={() => setShowNavigator(!showNavigator)} showNavigator={showNavigator} examName={examName} duration={examData?.duration} />

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
          userName={userName}
          rollNum={rollNum}
          questionStatuses={questionStatuses}
          examName={examName}
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
    //paddingTop: 30,
  },
})
