import { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ExamHeader from "../../../components/ExamHeader";
import QuestionNavigator from "../../../components/QuestionNavigation";
import QuestionDisplay from "../../../components/QuestionDisplay";
import ExamNavigation from "../../../components/ExamNavigation";
import InstructionModal from "../../../components/InstructionModal";
import ResponsiveLayout from "../../../components/ResponsiveLayout";
import { Colors } from "../../../constants/Colors";
import { examData } from "../../../data/examData";
import { QuestionStatus } from "@/types/exam";
import { useLocalSearchParams } from "expo-router";

export default function ExamScreen() {
  const { name, rollNumber } = useLocalSearchParams<{
    rollNumber?: string | string[];
    name?: string | string[];
  }>();
  const [rollNum, setRollNum] = useState("");
  const [userName, setUserName] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showNavigator, setShowNavigator] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<number>(1);
  const [showInstructions, setShowInstructions] = useState(true);
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [questionStatuses, setQuestionStatuses] = useState<Record<number, QuestionStatus>>({})

  const handleStartExam = () => {
    setShowInstructions(false)
    setExamStarted(true)
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
  }, [rollNumber, name]);

  return (
    <View style={styles.container}>
      <InstructionModal isVisible={showInstructions} onStartExam={handleStartExam} />

      {examStarted && (
        <>
          <ExamHeader onToggleNavigator={() => setShowNavigator(!showNavigator)} showNavigator={showNavigator} />

          {/* <Text>{rollNum}-{name}</Text> */}

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
            />
          </ResponsiveLayout>
        </>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 20,
    paddingBottom: 40
  },
})
