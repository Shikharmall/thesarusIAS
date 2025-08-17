import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Button } from "../components/ui/Button"
import { QuestionNavigatorProps } from "@/types/exam"
import { Colors, themeColor } from "@/constants/Colors"

export default function QuestionNavigator({
    sections,
    currentQuestion,
    onSectionSelect,
    onQuestionSelect,
    currentSection,
}: QuestionNavigatorProps) {
    
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
                    ?.map((question, index) => (
                        <Button
                            key={index}
                            variant={currentQuestion === question?.id ? "default" : "outline"}
                            size="sm"
                            className="h-8 w-8 p-0 text-xs"
                        // className={`h-8 w-8 p-0 text-xs ${question?.answered
                        //         ? "bg-green-100 text-green-800 border-green-300"
                        //         : question?.flagged
                        //             ? "bg-orange-100 text-orange-800 border-orange-300"
                        //             : ""
                        //     }`}
                        >
                            <Text>{question?.id}</Text>
                        </Button>
                    ))}
            </View>


            <View className="space-y-2 text-xs text-sidebar-foreground border-t pt-4">
                <View className="flex-row flex-wrap justify-between gap-4 m-3">
                    <View className="flex flex-row items-center gap-2 m-3">
                        <View className="h-6 w-6 bg-green-100 border border-green-300 rounded text-green-800 flex items-center justify-center text-xs"></View>
                        <Text>Answered</Text>
                    </View>
                    <View className="flex flex-row items-center gap-2 m-3">
                        <View className="h-6 w-6 bg-red-400 border border-red-500 rounded flex items-center justify-center text-xs"></View>
                        <Text>Not Answered</Text>
                    </View>
                    <View className="flex flex-row items-center gap-2 m-3">
                        <View className="h-6 w-6 bg-orange-100 border border-orange-300 rounded text-orange-800 flex items-center justify-center text-xs"></View>
                        <Text>Mark for Review</Text>
                    </View>
                    <View className="flex flex-row items-center gap-2 m-3">
                        <View className="h-6 w-6 bg-background border rounded flex items-center justify-center text-xs"></View>
                        <Text>Not Visited</Text>
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
