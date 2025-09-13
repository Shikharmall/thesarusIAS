import { themeColor } from "@/utils/constant/Colors";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface ExamTimerProps {
    duration: number; // duration in minutes
    onTimeUp: () => void;
}

export function ExamTimer({ duration, onTimeUp }: ExamTimerProps) {
    const [timeLeft, setTimeLeft] = useState(duration * 60); // convert to seconds

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, onTimeUp]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const isLowTime = timeLeft <= 300; // 5 minutes

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: isLowTime ? "red" : themeColor?.primary },
            ]}
        >
            <Text style={styles.timerText}>
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 4,
        paddingHorizontal: 20,
        borderRadius: 50,
        fontWeight: "600",
    },
    timerText: {
        fontSize: 16,
        fontFamily: "monospace",
        color: "white",
        fontWeight: "bold",
    },
});
