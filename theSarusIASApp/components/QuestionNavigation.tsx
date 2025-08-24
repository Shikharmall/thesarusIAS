import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { QuestionNavigatorProps } from "@/types/exam";
import { Colors, themeColor } from "@/constants/Colors";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useEffect, useState } from "react";

export default function QuestionNavigator({
    sections,
    currentQuestion,
    onSectionSelect,
    onQuestionSelect,
    currentSection,
    questionStatuses
}: QuestionNavigatorProps) {

    const getFirstQuestionFormIndex = (index: number): number => {
        return sections?.[index]?.questions?.[0]?.id;
    };

    const [answeredCount, setAnsweredCount] = useState<number>(0);
    const [notAnsweredCount, setNotAnsweredCount] = useState<number>(0);
    const [flaggedCount, setFlaggedCount] = useState<number>(0);
    const [visitedCount, setVisitedCount] = useState<number>(0);
    const [notVisitedCount, setNotVisitedCount] = useState<number>(0);

    useEffect(() => {
        const currentSec = sections?.find(section => section?.id === currentSection);
        if (!currentSec) return;

        const answered = currentSec.questions?.filter(q => questionStatuses[q.id]?.answered)?.length || 0;
        const flagged = currentSec.questions?.filter(q => questionStatuses[q.id]?.flagged)?.length || 0;
        const visited = currentSec.questions?.filter(q => questionStatuses[q.id]?.visited)?.length || 0;
        const total = currentSec.questions?.length || 0;

        setAnsweredCount(answered);
        setFlaggedCount(flagged);
        setVisitedCount(visited);
        setNotAnsweredCount(total - answered);
        setNotVisitedCount(total - visited);
    }, [questionStatuses, currentSection, sections]);

    return (
        <View style={styles.wrapper}>
            {/* Section Selector */}
            {sections?.length > 1 && (
                <View style={styles.sectionRow}>
                    {sections?.map((section, index) => {
                        const isActive = currentSection === section?.id;
                        return (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.sectionButton,
                                    isActive ? styles.sectionActive : styles.sectionInactive,
                                ]}
                                onPress={() => {
                                    onSectionSelect(index + 1);
                                    onQuestionSelect(getFirstQuestionFormIndex(index) - 1);
                                }}
                            >
                                <Text style={[styles.sectionText, isActive && styles.sectionTextActive]}>
                                    Part-{index + 1}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            )}

            {/* Section Name */}
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>
                    {sections?.find(section => section?.id === currentSection)?.name}
                </Text>
            </View>

            {/* Questions Grid */}
            <View style={styles.questionsContainer}>
                {sections
                    ?.find(section => section?.id === currentSection)
                    ?.questions
                    ?.map((question) => {
                        const status = questionStatuses[question?.id];
                        const isActive = currentQuestion + 1 === question?.id;

                        let backgroundColor = "white";
                        let borderColor = "#d1d5db";
                        let textColor = themeColor?.secondary;
                        let icon: keyof typeof MaterialIcons.glyphMap | null = null;
                        let iconColor = "transparent";

                        if (isActive) {
                            backgroundColor = themeColor?.primary;
                            textColor = "white";
                        } else if (status?.answered) {
                            backgroundColor = "#dcfce7";
                            borderColor = "#86efac";
                            textColor = "#065f46";
                            icon = "check-circle";
                            iconColor = "green";
                        } else if (status?.flagged) {
                            backgroundColor = "#ffedd5";
                            borderColor = "#fdba74";
                            textColor = "#92400e";
                            icon = "flag";
                            iconColor = "orange";
                        } else if (status?.visited) {
                            backgroundColor = "#f3f4f6";
                            borderColor = "#d1d5db";
                            textColor = "#374151";
                        }

                        return (
                            <TouchableOpacity
                                key={question?.id}
                                style={[
                                    styles.questionButton,
                                    {
                                        backgroundColor,
                                        borderColor,
                                        borderWidth: isActive ? 0 : 1,
                                    }
                                ]}
                                onPress={() => onQuestionSelect(question?.id - 1)}
                            >
                                {icon ? (
                                    <MaterialIcons name={icon} size={18} color={iconColor} />
                                ) : (
                                    <Text style={[styles.questionText, { color: textColor }]}>
                                        {question?.id}
                                    </Text>
                                )}
                            </TouchableOpacity>
                        );
                    })}
            </View>

            {/* Legend */}
            <View style={styles.legendContainer}>
                <View style={styles.legendItem}>
                    <MaterialIcons name="check-circle" size={25} color="green" />
                    <Text style={styles.legendText}>Answered (<Text style={styles.legendCount}>{answeredCount}</Text>)</Text>
                </View>
                <View style={styles.legendItem}>
                    <MaterialIcons name="check-circle" size={25} color="red" />
                    <Text style={styles.legendText}>Not Answered (<Text style={styles.legendCount}>{notAnsweredCount}</Text>)</Text>
                </View>
                <View style={styles.legendItem}>
                    <MaterialIcons name="check-circle" size={25} color="orange" />
                    <Text style={styles.legendText}>Mark for Review (<Text style={styles.legendCount}>{flaggedCount}</Text>)</Text>
                </View>
                <View style={styles.legendItem}>
                    <MaterialIcons name="check-circle" size={25} color="gray" />
                    <Text style={styles.legendText}>Not Visited (<Text style={styles.legendCount}>{notVisitedCount}</Text>)</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        margin: 20,
    },
    sectionRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    sectionButton: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 50,
        borderWidth: 1,
    },
    sectionActive: {
        backgroundColor: themeColor?.secondary,
        borderColor: themeColor?.secondary,
    },
    sectionInactive: {
        backgroundColor: Colors?.background,
        borderColor: themeColor?.primary,
    },
    sectionText: {
        fontWeight: "bold",
        color: themeColor?.primary,
    },
    sectionTextActive: {
        color: Colors?.background,
    },
    sectionTitleContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
    },
    sectionTitle: {
        fontWeight: "600",
        fontSize: 18,
        color: themeColor?.primary,
    },
    questionsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,
    },
    questionButton: {
        width: 50,
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    questionText: {
        fontSize: 14,
        fontWeight: "500",
    },
    legendContainer: {
        borderTopWidth: 0.3,
        borderTopColor: 'gray',
        paddingTop: 10,
        marginTop: 20,
    },
    legendItem: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        gap: 10,
    },
    legendText: {
        fontSize: 14,
        color: themeColor?.primary,
    },
    legendCount: {
        color: themeColor?.secondary,
    },
});
