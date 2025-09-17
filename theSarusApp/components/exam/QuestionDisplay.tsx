import { useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../utils/constant/Colors";
import type { Question, QuestionDisplayProps } from "../../utils/types/exam";
import MCQQuestion from "./MCQQuestion";

export default function QuestionDisplay({
  currentQuestionId,
  currentSection,
  sections,
  questionStatuses,
  onAnswerSelect,
  onFlagSelect,
  onClearSelect,
}: QuestionDisplayProps) {

  // Memoized derived values
  const allQuestions: Question[] = useMemo(
    () => sections.flatMap((section) => section.questions),
    [sections]
  );

  const questionIndex = useMemo(
    () => allQuestions.findIndex((q) => q.id === currentQuestionId),
    [allQuestions, currentQuestionId]
  );

  const question = allQuestions[questionIndex] || null;

  const currentSectionName = useMemo(
    () => sections.find((s) => s.id === currentSection)?.name ?? "",
    [sections, currentSection]
  );

  if (!question) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Question not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Watermark */}
      <View style={styles.watermark}>
        <Text style={styles.watermarkText}>UPSC202601234</Text>
      </View>

      {/* Section Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{currentSectionName}</Text>
        {/* <Text style={styles.questionCounter}>
          Question {questionIndex + 1} of {allQuestions.length}
        </Text> */}
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <MCQQuestion
          questionIndex={questionIndex}
          question={question}
          questionStatus={questionStatuses[question.id]}
          onAnswerSelect={onAnswerSelect}
          onFlagQuestion={onFlagSelect}
          onClearResponse={onClearSelect}
        />
      </ScrollView>
    </View>
  );
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
    justifyContent: "center",
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
});
