import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { BackHandler, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/Colors";

export default function EndScreen() {
  const { timeSpent } = {
    timeSpent: 50,
  };

  const { rollNum, userName, totalQuestions, answeredCount, flaggedCount, examName } = useLocalSearchParams();
  const [rollNumber, setRollNumber] = useState<string>("");
  const [exam, setExam] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [totalQues, setTotalQues] = useState<number>(0);
  const [answered, setAnswered] = useState<number>(0);
  const [flagged, setFlagged] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    if (rollNum) {
      setRollNumber(Array.isArray(rollNum) ? rollNum[0] : rollNum);
    }
    if (userName) {
      setName(Array.isArray(userName) ? userName[0] : userName);
    }
    if (examName) {
      setExam(Array.isArray(examName) ? examName[0] : examName);
    }
    if (totalQuestions) {
      const value = Array.isArray(totalQuestions) ? totalQuestions[0] : totalQuestions;
      setTotalQues(Number(value));
    }
    if (answeredCount) {
      const value = Array.isArray(answeredCount) ? answeredCount[0] : answeredCount;
      setAnswered(Number(value));
    }
    if (flaggedCount) {
      const value = Array.isArray(flaggedCount) ? flaggedCount[0] : flaggedCount;
      setFlagged(Number(value));
    }
  }, [rollNum, userName, totalQuestions, answeredCount, flaggedCount, examName]);

  const backAction = () => {
    //router.dismissAll();   // close all routes
    router.replace("/(home)");  // go to home
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
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{exam}</Text>
        <Text style={styles.subtitle}>Examination Completed</Text>
        {name && <Text style={styles.rollNumber}>Name: {name}</Text>}
        {rollNumber && <Text style={styles.rollNumber}>Roll Number: {rollNumber}</Text>}
      </View>

      {/* Submission Confirmation */}
      <View style={styles.confirmationCard}>
        <Text style={styles.confirmationTitle}>✓ Examination Successfully Submitted</Text>
        <Text style={styles.confirmationText}>Your responses have been recorded and submitted successfully.</Text>
        <Text style={styles.submissionTime}>Submitted on: {new Date().toLocaleString()}</Text>
      </View>

      {/* Exam Summary */}
      <View style={styles.summaryCard}>
        <Text style={styles.cardTitle}>Examination Summary</Text>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total Questions:</Text>
          <Text style={styles.summaryValue}>{totalQues}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Questions Answered:</Text>
          <Text style={[styles.summaryValue, styles.answeredText]}>{answered}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Questions Flagged:</Text>
          <Text style={[styles.summaryValue, styles.flaggedText]}>{flagged}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Not Attempted:</Text>
          <Text style={[styles.summaryValue, styles.notAttemptedText]}>{totalQues - answered}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Time Spent:</Text>
          <Text style={styles.summaryValue}>{timeSpent}</Text>
        </View>
      </View>

      {/* Section-wise Summary */}
      {/* <View style={styles.summaryCard}>
        <Text style={styles.cardTitle}>Section-wise Summary</Text> */}

      {/* {sections.map((section, index) => (
          <View key={index} style={styles.sectionRow}>
            <Text style={styles.sectionName}>{section.name}</Text>
            <Text style={styles.sectionStats}>
              {section.answered}/{section.total} answered
            </Text>
          </View>
        ))} */}
      {/* </View> */}

      {/* Important Notice */}
      <View style={styles.noticeCard}>
        <Text style={styles.noticeTitle}>Important Notice</Text>
        <Text style={styles.noticeText}>
          • Your responses have been saved and cannot be changed.{"\n"}• Results will be declared as per the official
          schedule.{"\n"}• Keep your roll number safe for future reference.{"\n"}• Check the official website for result
          updates.
        </Text>
      </View>

      {/* Action Button */}

      <TouchableOpacity style={styles.restartButton} onPress={backAction}>
        <Text style={styles.restartButtonText}>Take Another Test</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Staff Selection Commission{"\n"}
          Government of India
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingTop: 60,
    padding: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    marginBottom: 10,
  },
  rollNumber: {
    fontSize: 14,
    color: "white",
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  confirmationCard: {
    backgroundColor: "#d4edda",
    margin: 16,
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#28a745",
  },
  confirmationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#155724",
    marginBottom: 8,
  },
  confirmationText: {
    fontSize: 14,
    color: "#155724",
    marginBottom: 8,
  },
  submissionTime: {
    fontSize: 12,
    color: "#6c757d",
    fontStyle: "italic",
  },
  summaryCard: {
    backgroundColor: "white",
    margin: 16,
    marginTop: 0,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
    paddingBottom: 8,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f8f9fa",
  },
  summaryLabel: {
    fontSize: 14,
    color: "#495057",
    flex: 1,
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#212529",
  },
  answeredText: {
    color: "#28a745",
  },
  flaggedText: {
    color: "#ffc107",
  },
  notAttemptedText: {
    color: "#dc3545",
  },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f8f9fa",
  },
  sectionName: {
    fontSize: 13,
    color: "#495057",
    flex: 1,
    flexWrap: "wrap",
  },
  sectionStats: {
    fontSize: 13,
    fontWeight: "600",
    color: Colors.primary,
  },
  noticeCard: {
    backgroundColor: "#fff3cd",
    margin: 16,
    marginTop: 0,
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#ffc107",
  },
  noticeTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#856404",
    marginBottom: 8,
  },
  noticeText: {
    fontSize: 12,
    color: "#856404",
    lineHeight: 18,
  },
  restartButton: {
    backgroundColor: Colors.primary,
    margin: 16,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  restartButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    alignItems: "center",
    padding: 20,
    marginTop: 10,
  },
  footerText: {
    fontSize: 12,
    color: "#6c757d",
    textAlign: "center",
    lineHeight: 16,
    paddingBottom: 30
  },
})
