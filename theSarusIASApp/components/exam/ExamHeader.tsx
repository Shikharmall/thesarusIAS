import { StyleSheet, Text, View } from "react-native"
import { Colors, themeColor } from "../../utils/constant/Colors"
import AnimatedHamburger from "../ui/AnimatedHamburger"
import { ExamTimer } from "./ExamTimer"
import { ExamHeaderProps } from "@/utils/types/exam"

export default function ExamHeader({ onToggleNavigator, showNavigator, examName, startTimestamp, duration }: ExamHeaderProps) {
    const handleTimeUp = () => {
        // Handle exam submission when time is up
        console.log("[v0] Exam time completed - auto submitting")
    }

    return (
        <View style={styles.header}>
            <View style={styles.leftSection}>
                <Text style={styles.title}>{examName}</Text>
            </View>

            <View style={styles.rightSection}>
                <ExamTimer duration={duration} startTimestamp={startTimestamp} onTimeUp={handleTimeUp} />
                <AnimatedHamburger
                    isOpen={showNavigator}
                    onPress={onToggleNavigator}
                    size={28}
                    color={themeColor?.primary}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        paddingTop: 50,
        backgroundColor: Colors.surface,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    leftSection: {
        //flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    menuButton: {
        padding: 8,
        //marginRight: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.text,
    },
    rightSection: {
        flexDirection: "row",
        alignItems: "center",
    },
})
