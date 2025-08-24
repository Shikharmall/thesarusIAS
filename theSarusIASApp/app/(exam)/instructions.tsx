import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import Modal from "react-native-modal"
import { Ionicons } from "@expo/vector-icons"
import { InstructionModalProps } from "@/types/exam"
import { Colors } from "@/constants/Colors"
import { useRouter } from "expo-router"

export default function InstructionScreen() {
    const router = useRouter();
    return (
        <View
            style={styles.modal}
        >
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>SSC CGL Examination Instructions</Text>
                    <Text style={styles.subtitle}>Please read carefully before starting</Text>
                </View>

                <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                    {/* General Instructions */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>General Instructions</Text>
                        <View style={styles.instructionItem}>
                            <Ionicons name="time-outline" size={16} color={Colors.primary} />
                            <Text style={styles.instructionText}>Total duration of examination is 60 minutes (1 hour)</Text>
                        </View>
                        <View style={styles.instructionItem}>
                            <Ionicons name="document-text-outline" size={16} color={Colors.primary} />
                            <Text style={styles.instructionText}>
                                The examination consists of 20 questions divided into 4 sections
                            </Text>
                        </View>
                        <View style={styles.instructionItem}>
                            <Ionicons name="checkmark-circle-outline" size={16} color={Colors.primary} />
                            <Text style={styles.instructionText}>Each question carries 2 marks. Total marks: 40</Text>
                        </View>
                        <View style={styles.instructionItem}>
                            <Ionicons name="close-circle-outline" size={16} color={Colors.error} />
                            <Text style={styles.instructionText}>There is negative marking of 0.5 marks for each wrong answer</Text>
                        </View>
                    </View>

                    {/* Sections */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Examination Sections</Text>
                        <View style={styles.sectionItem}>
                            <Text style={styles.sectionName}>1. General Intelligence & Reasoning</Text>
                            <Text style={styles.sectionDetails}>Questions 1-5 (5 questions)</Text>
                        </View>
                        <View style={styles.sectionItem}>
                            <Text style={styles.sectionName}>2. General Awareness</Text>
                            <Text style={styles.sectionDetails}>Questions 6-10 (5 questions)</Text>
                        </View>
                        <View style={styles.sectionItem}>
                            <Text style={styles.sectionName}>3. Quantitative Aptitude</Text>
                            <Text style={styles.sectionDetails}>Questions 11-15 (5 questions)</Text>
                        </View>
                        <View style={styles.sectionItem}>
                            <Text style={styles.sectionName}>4. English Comprehension</Text>
                            <Text style={styles.sectionDetails}>Questions 16-20 (5 questions)</Text>
                        </View>
                    </View>

                    {/* Navigation Instructions */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Navigation & Controls</Text>
                        <View style={styles.instructionItem}>
                            <Ionicons name="arrow-forward-outline" size={16} color={Colors.primary} />
                            <Text style={styles.instructionText}>Use Previous/Next buttons to navigate between questions</Text>
                        </View>
                        <View style={styles.instructionItem}>
                            <Ionicons name="flag-outline" size={16} color={Colors.warning} />
                            <Text style={styles.instructionText}>Flag questions for review using the flag button</Text>
                        </View>
                        <View style={styles.instructionItem}>
                            <Ionicons name="refresh-outline" size={16} color={Colors.textSecondary} />
                            <Text style={styles.instructionText}>Clear your response using the "Clear Response" button</Text>
                        </View>
                        <View style={styles.instructionItem}>
                            <Ionicons name="grid-outline" size={16} color={Colors.primary} />
                            <Text style={styles.instructionText}>Use the question navigator to jump to any question directly</Text>
                        </View>
                    </View>

                    {/* Color Coding */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Question Status Color Coding</Text>
                        <View style={styles.colorItem}>
                            <View style={[styles.colorBox, { backgroundColor: Colors.answered }]} />
                            <Text style={styles.colorText}>Green - Answered</Text>
                        </View>
                        <View style={styles.colorItem}>
                            <View style={[styles.colorBox, { backgroundColor: Colors.flagged }]} />
                            <Text style={styles.colorText}>Orange - Flagged for Review</Text>
                        </View>
                        <View style={styles.colorItem}>
                            <View style={[styles.colorBox, { backgroundColor: Colors.current }]} />
                            <Text style={styles.colorText}>Blue - Current Question</Text>
                        </View>
                        <View style={styles.colorItem}>
                            <View style={[styles.colorBox, { backgroundColor: Colors.unvisited }]} />
                            <Text style={styles.colorText}>Gray - Not Visited</Text>
                        </View>
                    </View>

                    {/* Important Notes */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Important Notes</Text>
                        <View style={styles.warningBox}>
                            <Ionicons name="warning-outline" size={20} color={Colors.warning} />
                            <View style={styles.warningContent}>
                                <Text style={styles.warningText}>• The examination will auto-submit when time expires</Text>
                                <Text style={styles.warningText}>• Ensure stable internet connection throughout the exam</Text>
                                <Text style={styles.warningText}>• Do not refresh or close the browser during examination</Text>
                                <Text style={styles.warningText}>• Review all answers before final submission</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                {/* Footer */}
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.startButton} onPress={() => {
                        router.push({
                            pathname: "/(exam)",
                        });
                    }}>
                        <Ionicons name="play-circle" size={24} color={Colors.background} />
                        <Text style={styles.startButtonText}>I Understand - Start Examination</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        borderRadius: 12,
        maxHeight: "90%",
        width: "90%",
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    header: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: Colors.primary,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginTop: 4,
        textAlign: "center",
    },
    content: {
        flex: 1,
        padding: 20,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.text,
        marginBottom: 12,
    },
    instructionItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 8,
    },
    instructionText: {
        fontSize: 14,
        color: Colors.text,
        marginLeft: 8,
        flex: 1,
        lineHeight: 20,
    },
    sectionItem: {
        marginBottom: 8,
        paddingLeft: 8,
    },
    sectionName: {
        fontSize: 14,
        fontWeight: "500",
        color: Colors.text,
    },
    sectionDetails: {
        fontSize: 12,
        color: Colors.textSecondary,
        marginTop: 2,
    },
    colorItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    colorBox: {
        width: 16,
        height: 16,
        borderRadius: 3,
        marginRight: 12,
    },
    colorText: {
        fontSize: 14,
        color: Colors.text,
    },
    warningBox: {
        flexDirection: "row",
        backgroundColor: "#fef3c7",
        padding: 12,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: Colors.warning,
    },
    warningContent: {
        flex: 1,
        marginLeft: 8,
    },
    warningText: {
        fontSize: 13,
        color: "#92400e",
        marginBottom: 4,
    },
    footer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
    },
    startButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primary,
        paddingVertical: 14,
        borderRadius: 8,
    },
    startButtonText: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.background,
        marginLeft: 8,
    },
})
