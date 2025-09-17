import { ExamNavigationProps, Question } from "@/utils/types/exam";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, themeColor } from "../../utils/constant/Colors";

export default function ExamNavigation({
  currentQuestionId,
  onQuestionChange,
  onSectionChange,
  sections,
  onSubmit,
}: ExamNavigationProps) {
  
  const allQuestions: Question[] = sections.flatMap((section) => section.questions);
  const questionIndex = allQuestions.findIndex((q) => q.id === currentQuestionId);
  const totalQuestions = allQuestions.length;

  const isFirst = questionIndex === 0;
  const isLast = questionIndex === totalQuestions - 1;

  const getCurrentSectionForIndex = (index: number): number => {
    let count = 0;
    for (const section of sections) {
      if (index < count + section.questions.length) return section.id;
      count += section.questions.length;
    }
    return sections[0]?.id ?? 0;
  };

  const handleNavigation = (newIndex: number) => {
    onQuestionChange(newIndex);
    onSectionChange(getCurrentSectionForIndex(newIndex));
  };

  return (
    <View style={styles.container}>
      {/* Prev / Next Navigation */}
      <View style={styles.navigationButtons}>
        {/* Previous Button */}
        <TouchableOpacity
          style={[styles.navButton, isFirst && styles.navButtonDisabled]}
          onPress={() => handleNavigation(questionIndex - 1)}
          disabled={isFirst}
        >
          <Ionicons
            name="chevron-back"
            size={20}
            color={isFirst ? Colors.textSecondary : themeColor.primary}
          />
          <Text style={[styles.navButtonText, isFirst && styles.navButtonTextDisabled]}>
            Previous
          </Text>
        </TouchableOpacity>

        {/* Question Info */}
        <View style={styles.questionInfo}>
          <Text style={styles.questionCounter}>
            {questionIndex + 1} of {totalQuestions}
          </Text>
          <Text style={styles.sectionName}>Questions</Text>
        </View>

        {/* Next Button */}
        <TouchableOpacity
          style={[styles.navButton, isLast && styles.navButtonDisabled]}
          onPress={() => handleNavigation(questionIndex + 1)}
          disabled={isLast}
        >
          <Text style={[styles.navButtonText, isLast && styles.navButtonTextDisabled]}>
            Next
          </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={isLast ? Colors.textSecondary : themeColor.primary}
          />
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
        <Ionicons name="checkmark-circle" size={20} color={Colors.background} />
        <Text style={styles.submitButtonText}>Submit Examination</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: themeColor.primary,
    backgroundColor: Colors.background,
  },
  navButtonDisabled: {
    borderColor: Colors.border,
    backgroundColor: Colors.unvisited,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: themeColor.primary,
    marginHorizontal: 4,
  },
  navButtonTextDisabled: {
    color: Colors.textSecondary,
  },
  questionInfo: {
    alignItems: "center",
  },
  questionCounter: {
    fontSize: 16,
    fontWeight: "600",
    color: themeColor.primary,
  },
  sectionName: {
    fontSize: 12,
    color: themeColor.secondary,
    textAlign: "center",
    marginTop: 2,
    fontWeight: "600",
  },
  submitButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.success,
    paddingVertical: 12,
    borderRadius: 8,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.background,
    marginLeft: 8,
  },
});
