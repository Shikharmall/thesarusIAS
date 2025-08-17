import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { QuestionNavigatorProps } from "@/types/exam";
import { Colors, themeColor } from "@/constants/Colors";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

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

    // console.log(questionStatuses);

    const visitedCount = Object.values(questionStatuses).filter(q => q.visited).length;
    const flaggedCount = Object.values(questionStatuses).filter(q => q.flagged).length;
    const answeredCount = Object.values(questionStatuses).filter(q => q.answered).length;

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

            <View style={styles.container}>
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
                            {((sections?.find(section => section?.id === currentSection)?.questions?.length || 0) - answeredCount)})</Text></Text>
                    </View>
                    <View className="flex flex-row items-center gap-2 m-3">
                        <MaterialIcons name="check-circle" size={25} color="orange" />
                        <Text style={{ color: themeColor?.primary }}>Mark for Review <Text style={{ color: themeColor?.secondary }}>({flaggedCount})</Text></Text>
                    </View>
                    <View className="flex flex-row items-center gap-2 m-3">
                        <MaterialIcons name="check-circle" size={25} color="gray" />
                        <Text style={{ color: themeColor?.primary }}>Not Visited <Text style={{ color: themeColor?.secondary }}>({visitedCount})</Text></Text>
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
