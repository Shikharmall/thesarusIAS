import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, themeColor } from "../../utils/constant/Colors";
import type { MCQQuestionProps } from "../../utils/types/exam";
import TouchableScale from "../TouchableScale";

export default function MCQQuestion({
  question,
  questionStatus,
  onAnswerSelect,
  onFlagQuestion,
  onClearResponse,
}: MCQQuestionProps) {
  const selectedAnswer = questionStatus?.selectedAnswer

  return (
    <View style={styles.container}>
      {/* Question Header */}
      <View style={styles.questionHeader}>
        <Text style={styles.questionNumber}>Q.{question.id}</Text>
        <TouchableScale
          onPress={() => onFlagQuestion(question.id)}
          style={[styles.flagButton, questionStatus?.flagged && styles.flagButtonActive]}
        >
          <Ionicons
            name={questionStatus?.flagged ? "flag" : "flag-outline"}
            size={20}
            color={questionStatus?.flagged ? Colors.warning : Colors.textSecondary}
          />
        </TouchableScale>
      </View>

      {/* Question Text */}
      <Text style={styles.questionText}>{question.question}</Text>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {question?.options?.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedAnswer === index && styles.optionButtonSelected,
            ]}
            onPress={() => onAnswerSelect(question?.id, index)}
          >
            <View
              style={[
                styles.radioButton,
                selectedAnswer === index && styles.radioButtonSelected,
              ]}
            >
              {selectedAnswer === index && <View style={styles.radioButtonInner} />}
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={[
                  styles.optionText,
                  selectedAnswer === index && styles.optionTextSelected,
                ]}
                numberOfLines={0}   // wrap text (multi-line)
                ellipsizeMode="tail"
              >
                {option}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableScale style={styles.clearButton} onPress={() => onClearResponse(question?.id)}>
          <Text style={styles.clearButtonText}>Clear Response</Text>
        </TouchableScale>
        {/* <TouchableScale style={styles.clearButton} onPress={() => onClearResponse(question?.id)}>
          <Text style={styles.clearButtonText}>Mark for Review</Text>
        </TouchableScale> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    //backgroundColor: Colors.background,
  },
  questionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  questionNumber: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.primary,
  },
  flagButton: {
    padding: 8,
    borderRadius: 6,
  },
  flagButtonActive: {
    backgroundColor: "#fef3c7",
  },
  questionText: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
    marginBottom: 20,
  },
  optionsContainer: {
    marginBottom: 24,
    // backgroundColor: 'red',
    flex: 1,
    flexDirection: 'column'
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.border,
    // backgroundColor: Colors.background,
    // backgroundColor: 'red',
    minHeight: 56,
  },
  optionButtonSelected: {
    borderColor: themeColor.secondary
    // backgroundColor: "#eff6ff",
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.border,
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: 'red'
  },
  radioButtonSelected: {
    borderColor: themeColor.secondary,
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary,
  },
  optionText: {
    fontSize: 15,
    color: Colors.text,
    flex: 1,
    lineHeight: 22,
  },
  optionTextSelected: {
    color: Colors.primary,
    fontWeight: "500",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  clearButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.textSecondary,
    margin: 4
  },
  clearButtonText: {
    color: Colors.textSecondary,
    fontSize: 14,
    fontWeight: "500",
  },
})
