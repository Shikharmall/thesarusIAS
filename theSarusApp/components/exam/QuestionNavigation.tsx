import { Colors, themeColor } from "@/utils/constant/Colors";
import { QuestionNavigatorProps } from "@/utils/types/exam";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function QuestionNavigator({
    sections,
    currentQuestionId,
    onSectionSelect,
    onQuestionSelect,
    onQuestionCloseSelect,
    currentSection,
    questionStatuses
}: QuestionNavigatorProps) {

    const getFirstQuestionFormIndex = (sectionIndex: number): number => {
        if (!sections?.[sectionIndex]?.questions?.length) return -1;

        // count total questions in previous sections
        const offset = sections
            .slice(0, sectionIndex)
            .reduce((sum, s) => sum + (s?.questions?.length ?? 0), 0);

        return offset; // index of the first question in that section
    };



    const getQuestionFromIndex = (sectionIndex: number, questionId: number): number => {
        return sections?.[sectionIndex]?.questions?.findIndex(
            (q: any) => q.id === questionId
        ) ?? -1;
    };


    const [counts, setCounts] = useState({
        answered: 0,
        answeredFlagged: 0,
        flagged: 0,
        visited: 0,
        notAnswered: 0,
        notVisited: 0,
    });

    useEffect(() => {

        const currentSec = sections?.find(section => section?.id === currentSection);
        if (!currentSec) return

        const answeredFlagged = currentSec.questions.filter(
            q => questionStatuses[q.id]?.answered && questionStatuses[q.id]?.flagged
        ).length

        const answeredOnly = currentSec.questions.filter(
            q => questionStatuses[q.id]?.answered && !questionStatuses[q.id]?.flagged
        ).length

        const flaggedOnly = currentSec.questions.filter(
            q => questionStatuses[q.id]?.flagged && !questionStatuses[q.id]?.answered
        ).length

        const visitedNotAnswered = currentSec.questions.filter(
            q => questionStatuses[q.id]?.visited && !questionStatuses[q.id]?.answered
        ).length

        // const visitedNotAnswered = currentSec.questions.filter(
        //     q => questionStatuses[q.id]?.visited && !questionStatuses[q.id]?.answered && !questionStatuses[q.id]?.flagged
        // ).length

        const total = currentSec?.questions?.length || 0;

        setCounts({
            answered: answeredOnly,
            answeredFlagged,
            flagged: flaggedOnly,
            visited: visitedNotAnswered,
            notAnswered: visitedNotAnswered,
            notVisited: total - (answeredOnly + answeredFlagged + flaggedOnly + visitedNotAnswered)
        })

    }, [questionStatuses, currentSection, sections]);

    return (
        <>
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
                                        Part {String.fromCharCode(65 + index)}
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

                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* Questions Grid */}
                    <View style={styles.questionsContainer}>
                        {sections
                            ?.find(section => section?.id === currentSection)
                            ?.questions
                            ?.map((question, index) => {
                                const status = questionStatuses[question?.id];
                                const isActive = currentQuestionId === question?.id;

                                let backgroundColor = "white";
                                let borderColor = "#d1d5db";
                                let textColor = themeColor?.secondary;

                                if (isActive) {
                                    backgroundColor = themeColor?.primary;
                                    textColor = "white";
                                } else if (status?.answered && status?.flagged) {
                                    backgroundColor = "#f9d4f9ff";
                                    borderColor = "#c012c0ff";
                                    textColor = "#800080";
                                } else if (status?.answered) {
                                    backgroundColor = "#dcfce7";
                                    borderColor = "#86efac";
                                    textColor = "#065f46";
                                } else if (status?.flagged) {
                                    backgroundColor = "#ffedd5";
                                    borderColor = "#fdba74";
                                    textColor = "#92400e";
                                } else if (status?.visited) {
                                    backgroundColor = "#fcdcdcff";
                                    borderColor = "#f82b2bff";
                                    textColor = "#FF0000";
                                } else {
                                    textColor = "#92400e";
                                    backgroundColor = "bg-white"
                                    textColor = "#2196F3"
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
                                        onPress={() => onQuestionCloseSelect(index)}
                                    >
                                        <Text style={[styles.questionText, { color: textColor }]}>
                                            {index + 1}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                    </View>


                </ScrollView>
            </View>

            {/* Fixed Legend */}
            <View style={styles.legendFixed}>
                <View style={styles.legendGrid}>
                    <View style={styles.legendItem}>
                        <MaterialIcons name="check-circle" size={25} color="green" />
                        <Text style={styles.legendText}>
                            Answered (<Text style={styles.legendCount}>{counts?.answered}</Text>)
                        </Text>
                    </View>
                    <View style={styles.legendItem}>
                        <MaterialIcons name="check-circle" size={25} color="red" />
                        <Text style={styles.legendText}>
                            Not Answered (<Text style={styles.legendCount}>{counts?.notAnswered}</Text>)
                        </Text>
                    </View>
                    <View style={styles.legendItem}>
                        <MaterialIcons name="check-circle" size={25} color="orange" />
                        <Text style={styles.legendText}>
                            Mark for Review (<Text style={styles.legendCount}>{counts?.flagged}</Text>)
                        </Text>
                    </View>
                    <View style={styles.legendItem}>
                        <MaterialIcons name="check-circle" size={25} color="gray" />
                        <Text style={styles.legendText}>
                            Not Visited (<Text style={styles.legendCount}>{counts?.notVisited}</Text>)
                        </Text>
                    </View>
                    <View style={styles.legendItem}>
                        <MaterialIcons name="check-circle" size={25} color="purple" />
                        <Text style={styles.legendText}>
                            Answered & Marked (<Text style={styles.legendCount}>{counts?.answeredFlagged}</Text>)
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 25,
        marginBottom: 200
    },
    sectionRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
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
        // justifyContent: 'center',
        // alignItems: 'center'
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
    legendFixed: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        borderTopWidth: 0.3,
        borderTopColor: "#eee",
        padding: 10,
    },
    legendGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    legendItem: {
        flexDirection: "row",
        alignItems: "center",
        width: "48%", // 2 per row
        marginVertical: 5,
        gap: 8,
    },
    legendText: {
        fontSize: 14,
        color: themeColor?.primary,
    },
    legendCount: {
        color: themeColor?.secondary,
    },
});
