import { themeColor } from "@/utils/constant/Colors";
import { ExamTimerProps } from "@/utils/types/exam";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export function ExamTimer({ duration, startTimestamp, onTimeUp }: ExamTimerProps) {
    const totalSeconds = duration * 60

    const calculateTimeLeft = () => {
        const start = new Date(startTimestamp)?.getTime() // fetch current time from local system
        if (isNaN(start)) {
            console.error("Invalid startTimestamp:", startTimestamp)
            return totalSeconds
        }

        const now = Date.now()
        const elapsedSeconds = Math.floor((now - start) / 1000)

        if (elapsedSeconds < 0) {
            // Exam hasn't started yet
            return null
        }

        return Math.max(totalSeconds - elapsedSeconds, 0)
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(() => {
                const newTime = calculateTimeLeft()
                if (newTime !== null && newTime <= 0) {
                    clearInterval(timer)
                    onTimeUp()
                    return 0
                }
                return newTime
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [startTimestamp, duration, onTimeUp])

    if (timeLeft === null) {
        return (
            <View
                style={{
                    flexDirection: "column",
                    alignItems: "center",
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                }}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 16,
                    }}
                >
                    Exam not started yet
                </Text>
            </View>
        )
    }

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    const isLowTime = timeLeft <= 300

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
