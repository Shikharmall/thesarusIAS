import { useState } from "react";
import { View, StyleSheet } from "react-native";
import ExamHeader from "../../../components/ExamHeader";
import QuestionNavigator from "../../../components/QuestionNavigation";
import QuestionDisplay from "../../../components/QuestionDisplay";
import ExamNavigation from "../../../components/ExamNavigation";
import InstructionModal from "../../../components/InstructionModal";
import ResponsiveLayout from "../../../components/ResponsiveLayout";
import { Colors } from "../../../constants/Colors";
import { examData } from "../../../data/examData";

export default function ExamScreen() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showNavigator, setShowNavigator] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<number>(1);
  const [showInstructions, setShowInstructions] = useState(true);
  const [examStarted, setExamStarted] = useState<boolean>(false);

  const handleStartExam = () => {
    setShowInstructions(false)
    setExamStarted(true)
  }

  const handleChangeSection = (sectionId: number) => {
    setCurrentSection(sectionId)
  }

  return (
    <View style={styles.container}>
      <InstructionModal isVisible={showInstructions} onStartExam={handleStartExam} />

      {examStarted && (
        <>
          <ExamHeader onToggleNavigator={() => setShowNavigator(!showNavigator)} showNavigator={showNavigator} />

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
              />
            }
          >
            <QuestionDisplay
              currentQuestion={currentQuestion}
              currentSection={currentSection}
              sections={examData?.sections}
            />
            <ExamNavigation
              currentQuestion={currentQuestion}
              onQuestionChange={setCurrentQuestion}
              onSectionChange={setCurrentSection}
              sections={examData?.sections}
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
