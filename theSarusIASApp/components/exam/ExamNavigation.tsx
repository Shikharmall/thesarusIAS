import { ExamNavigationProps } from "@/types/exam";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, themeColor } from "../../constants/Colors";

export default function ExamNavigation({ currentQuestion, onQuestionChange, onSectionChange, sections, userName, rollNum,
  questionStatuses }: ExamNavigationProps) {

  const [answeredCount, setAnsweredCount] = useState<number>(0);
  const [flaggedCount, setFlaggedCount] = useState<number>(0);
  const router = useRouter();
  const allQuestions = sections.flatMap((section) => section?.questions);
  const totalQuestions = allQuestions?.length;

  const getCurrentSectionForIndex = (index: number): number => {
    let questionCount = 0
    for (const section of sections) {
      if (index < questionCount + section.questions.length) {
        return section?.id
      }
      questionCount += section.questions.length
    }
    return sections[0]?.id
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      const newIndex = currentQuestion - 1;
      onQuestionChange(newIndex);
      onSectionChange(getCurrentSectionForIndex(newIndex));
    }
  }

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      const newIndex = currentQuestion + 1;
      onQuestionChange(newIndex);
      onSectionChange(getCurrentSectionForIndex(newIndex));
    }
  }

  const handleSubmit = () => {
    Alert.alert(
      "Submit Examination",
      "Are you sure you want to submit your examination? This action cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Submit",
          style: "destructive",
          onPress: () => {
            // Handle exam submission
            // Alert.alert("Submitted", "Your examination has been submitted successfully!")
            router.push({
              pathname: "/(exam)/end",
              params: { userName, rollNum, totalQuestions, answeredCount, flaggedCount },
            });
          },
        },
      ],
    )
  }

  useEffect(() => {

    if (allQuestions?.length > 0) {

      const answered = allQuestions?.filter(q => questionStatuses[q.id]?.answered)?.length || 0;
      const flagged = allQuestions?.filter(q => questionStatuses[q.id]?.flagged)?.length || 0;
      setAnsweredCount(answered);
      setFlaggedCount(flagged);

    }

  }, [allQuestions]);

  return (
    <View style={styles.container}>
      <View style={styles.navigationButtons}>
        <TouchableOpacity
          style={[styles.navButton, currentQuestion === 0 && styles.navButtonDisabled]}
          onPress={handlePrevious}
          disabled={currentQuestion === 0}
        >
          <Ionicons
            name="chevron-back"
            size={20}
            color={currentQuestion === 0 ? Colors.textSecondary : themeColor?.primary}
          />
          <Text style={[styles.navButtonText, currentQuestion === 0 && styles.navButtonTextDisabled]}>Previous</Text>
        </TouchableOpacity>

        <View style={styles.questionInfo}>
          <Text style={styles.questionCounter}>
            {currentQuestion + 1} of {totalQuestions}
          </Text>
          <Text style={styles.sectionName}>Questions</Text>
        </View>

        <TouchableOpacity
          style={[styles.navButton, currentQuestion === totalQuestions - 1 && styles.navButtonDisabled]}
          onPress={handleNext}
          disabled={currentQuestion === totalQuestions - 1}
        >
          <Text style={[styles.navButtonText, currentQuestion === totalQuestions - 1 && styles.navButtonTextDisabled]}>
            Next
          </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={currentQuestion === totalQuestions - 1 ? Colors.textSecondary : themeColor?.primary}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Ionicons name="checkmark-circle" size={20} color={Colors.background} />
        <Text style={styles.submitButtonText}>Submit Examination</Text>
      </TouchableOpacity>
    </View>
  )
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
    borderColor: themeColor?.primary,
    backgroundColor: Colors?.background,
  },
  navButtonDisabled: {
    borderColor: Colors.border,
    backgroundColor: Colors.unvisited,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: themeColor?.primary,
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
    color: themeColor?.primary,
  },
  sectionName: {
    fontSize: 12,
    color: themeColor?.secondary,
    textAlign: "center",
    marginTop: 2,
    fontWeight: '600'
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
})
