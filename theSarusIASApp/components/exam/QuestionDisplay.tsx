import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import type { Question, QuestionDisplayProps } from "../../types/exam";
import MCQQuestion from "./MCQQuestion";

export default function QuestionDisplay({ currentQuestion, currentSection, sections, questionStatuses, onAnswerSelect, onFlagSelect,
  onClearSelect, }: QuestionDisplayProps) {
  // const [questionStatuses, setQuestionStatuses] = useState<Record<number, QuestionStatus>>({});

  // Get all questions from all sections
  const allQuestions: Question[] = sections.flatMap((section) => section.questions);
  const question = allQuestions[currentQuestion];

  if (!question) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Question not found</Text>
      </View>
    )
  }

  // const handleAnswerSelect = (questionId: number, selectedAnswer: number) => {
  //   onQuestionStatusesChange((prev) => ({
  //     ...prev,
  //     [questionId]: {
  //       ...prev[questionId],
  //       answered: true,
  //       visited: true,
  //       selectedAnswer,
  //     },
  //   }))
  // }

  // const handleFlagQuestion = (questionId: number) => {
  //   setQuestionStatuses((prev) => ({
  //     ...prev,
  //     [questionId]: {
  //       ...prev[questionId],
  //       flagged: !prev[questionId]?.flagged,
  //       visited: true,
  //     },
  //   }))
  // }

  // const handleClearResponse = (questionId: number) => {
  //   setQuestionStatuses((prev) => ({
  //     ...prev,
  //     [questionId]: {
  //       ...prev[questionId],
  //       answered: false,
  //       selectedAnswer: undefined,
  //       visited: true,
  //     },
  //   }))
  // }

  // console.log(questionStatuses);

  return (
    <View style={styles.container}>
      {/* Roll Number Watermark */}
      <View style={styles.watermark}>
        <Text style={styles.watermarkText}>UPSC202601234</Text>
      </View>

      {/* Section Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{sections?.find(section => section?.id === currentSection)?.name}</Text>
        <Text style={styles.questionCounter}>
          Question {currentQuestion + 1} of {allQuestions.length}
        </Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <MCQQuestion
          question={question}
          questionStatus={questionStatuses[question.id]}
          onAnswerSelect={onAnswerSelect}
          onFlagQuestion={onFlagSelect}
          onClearResponse={onClearSelect}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    position: "relative",
  },
  watermark: {
    position: "absolute",
    top: "60%",
    left: "20%",
    transform: [{ translateX: -100 }, { translateY: -50 }, { rotate: "-45deg" }],
    zIndex: 0,
    opacity: 0.1,
  },
  watermarkText: {
    fontSize: 44,
    fontWeight: "bold",
    color: Colors.textSecondary,
  },
  sectionHeader: {
    backgroundColor: Colors.surface,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.primary,
  },
  questionCounter: {
    fontSize: 11,
    color: Colors.textSecondary,
  },
  scrollView: {
    flex: 1,
    zIndex: 1,
  },
  errorText: {
    fontSize: 16,
    color: Colors.error,
    textAlign: "center",
    marginTop: 50,
  },
})
