import Banner from "@/components/home/Banner";
import HomeHeader from "@/components/home/HomeHeader";
import SlidableCards from "@/components/SlidableCards";
import SlidableCards2 from "@/components/SlidableCards2";
import { QuestionStatus } from "@/types/exam";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import QuestionNavigator from "../../components/exam/QuestionNavigation";
import ResponsiveLayout from "../../components/ResponsiveLayout";
import { Colors } from "../../constants/Colors";
import { examData } from "../../data/examData";

export default function HomeScreen() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showNavigator, setShowNavigator] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<number>(1);
  const [questionStatuses, setQuestionStatuses] = useState<Record<number, QuestionStatus>>({});

  const handleChangeSection = (sectionId: number) => {
    setCurrentSection(sectionId)
  }

  return (
    <View style={styles.container}>
      <HomeHeader onToggleNavigator={() => setShowNavigator(!showNavigator)} showNavigator={showNavigator} />
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
        <Banner />
        <SlidableCards />
        <SlidableCards2 />
        {/* <Pagee /> */}
      </ResponsiveLayout>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 50,
    paddingBottom: 40
  },
})
