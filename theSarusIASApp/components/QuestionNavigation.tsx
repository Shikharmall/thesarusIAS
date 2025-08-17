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
        <View className="m-5">
            {
                sections?.length > 1 && (
                    <View className="flex flex-row justify-between">
                        {
                            sections?.map((section, index) => (
                                <TouchableOpacity
                                    key={index}
                                    className="py-2 px-5 rounded-full border border-1"
                                    style={{
                                        borderColor: currentSection === section?.id ? themeColor?.secondary : themeColor?.primary,
                                        backgroundColor: currentSection === section?.id ? themeColor?.secondary : Colors?.background,
                                    }}
                                    onPress={() => {
                                        onSectionSelect(index + 1);
                                        onQuestionSelect(getFirstQuestionFormIndex(index) - 1);
                                    }}
                                >
                                    <Text className="font-bold" style={{ color: currentSection === section?.id ? Colors?.background : themeColor?.primary }}>Part-{index + 1}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                )
            }

            <View className="flex items-center justify-center m-5">
                <Text className="font-semibold text-lg"
                    style={{ color: themeColor?.primary }}>
                    {sections?.find(section => section?.id === currentSection)?.name}
                </Text>
            </View>

            {/* <View style={styles.container}>
                {sections
                    ?.find(section => section?.id === currentSection)
                    ?.questions
                    ?.map((question) => (
                        <TouchableOpacity
                            key={question?.id}
                            className="flex flex-row items-center justify-center rounded rounded-md m-3"
                            style={{
                                backgroundColor: currentQuestion + 1 === question?.id ? themeColor?.primary : "white",
                                width: 50,
                                height: 50,
                                borderWidth: currentQuestion + 1 === question?.id ? 0 : 0.3,
                            }}
                            onPress={() => {
                                onQuestionSelect(question?.id - 1)
                            }}
                        >
                            <Text
                                className={`text-md font-medium ${currentQuestion + 1 === question?.id ? "text-white" : themeColor?.secondary
                                    }`}
                            >
                                {question?.id}
                            </Text>
                        </TouchableOpacity>
                    ))}
            </View> */}

            <View style={styles.container}>
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
                            backgroundColor = "#dcfce7"; // green-100
                            borderColor = "#86efac";     // green-300
                            textColor = "#065f46";       // green-800
                            icon = "check-circle";
                            iconColor = "green";
                        } else if (status?.flagged) {
                            backgroundColor = "#ffedd5"; // orange-100
                            borderColor = "#fdba74";     // orange-300
                            textColor = "#92400e";       // orange-800
                            icon = "flag";
                            iconColor = "orange";
                        } else if (status?.visited) {
                            backgroundColor = "#f3f4f6"; // gray-100
                            borderColor = "#d1d5db";     // gray-300
                            textColor = "#374151";       // gray-700
                        }

                        return (
                            <TouchableOpacity
                                key={question?.id}
                                className="flex flex-row items-center justify-center rounded-md m-3"
                                style={{
                                    backgroundColor,
                                    borderColor,
                                    width: 50,
                                    height: 50,
                                    borderWidth: isActive ? 0 : 1,
                                }}
                                onPress={() => onQuestionSelect(question?.id - 1)}
                            >
                                {icon ? (
                                    <MaterialIcons name={icon} size={18} color={iconColor} />
                                ) : (
                                    <Text className="text-md font-medium" style={{ color: textColor }}>
                                        {question?.id}
                                    </Text>
                                )}
                            </TouchableOpacity>
                        );
                    })}
            </View>


            <View className="space-y-2 text-xs text-sidebar-foreground border-t-1 border-gray-300 pt-4"
                style={{
                    borderTopWidth: 0.3,
                    borderTopColor: 'gray'
                }}
            >
                <View className="m-3">
                    <View className="flex flex-row items-center gap-2 m-3">
                        <MaterialIcons name="check-circle" size={25} color="green" />
                        <Text style={{ color: themeColor?.primary }}>Answered <Text style={{ color: themeColor?.secondary }}>({answeredCount})</Text></Text>
                    </View>
                    <View className="flex flex-row items-center gap-2 m-3">
                        <MaterialIcons name="check-circle" size={25} color="red" />
                        <Text style={{ color: themeColor?.primary }}>Not Answered <Text style={{ color: themeColor?.secondary }}>(
                            {notAnsweredCount})</Text></Text>
                    </View>
                    <View className="flex flex-row items-center gap-2 m-3">
                        <MaterialIcons name="check-circle" size={25} color="orange" />
                        <Text style={{ color: themeColor?.primary }}>Mark for Review <Text style={{ color: themeColor?.secondary }}>({flaggedCount})</Text></Text>
                    </View>
                    <View className="flex flex-row items-center gap-2 m-3">
                        <MaterialIcons name="check-circle" size={25} color="gray" />
                        <Text style={{ color: themeColor?.primary }}>Not Visited <Text style={{ color: themeColor?.secondary }}>({(notVisitedCount || 1) - 1})</Text></Text>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10
    },
    item: {
        width: "20%", // 5 columns → 100% / 5 = 20%
        padding: 4,
    },
    button: {
        height: 32,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        borderWidth: 1,
    },
    activeButton: {
        backgroundColor: "#2563eb", // blue for active
        borderColor: "#2563eb",
    },
    inactiveButton: {
        backgroundColor: "transparent",
        borderColor: "#d1d5db", // gray border
    },
    answered: {
        backgroundColor: "#dcfce7", // green-100
        borderColor: "#86efac", // green-300
    },
    flagged: {
        backgroundColor: "#ffedd5", // orange-100
        borderColor: "#fdba74", // orange-300
    },
    buttonText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#1f2937",
    },
});
