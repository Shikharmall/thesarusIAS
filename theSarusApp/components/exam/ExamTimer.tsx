import { themeColor } from "@/utils/constant/Colors"
import { ExamTimerProps } from "@/utils/types/exam"
import { useEffect, useMemo, useState } from "react"
import { StyleSheet, Text, View } from "react-native"

export function ExamTimer({ duration, startTimestamp, onTimeUp }: ExamTimerProps) {
  const totalSeconds = duration * 60

  // Pre-compute exam start timestamp
  const examStart = useMemo(() => new Date(startTimestamp).getTime(), [startTimestamp])

  const calculateTimeLeft = () => {
    if (isNaN(examStart)) return totalSeconds
    const now = Date.now()
    const elapsedSeconds = Math.floor((now - examStart) / 1000)
    if (elapsedSeconds < 0) return null // Exam not started
    return Math.max(totalSeconds - elapsedSeconds, 0)
  }

  const [timeLeft, setTimeLeft] = useState<number | null>(null)

  // Initialize timer after first render
  useEffect(() => {
    const initialTime = calculateTimeLeft()
    setTimeLeft(initialTime)

    if (initialTime === 0) {
      // Delay to next tick to avoid setState during render
      setTimeout(() => onTimeUp(), 0)
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = calculateTimeLeft()
        if (newTime === 0 && prev !== 0) {
          onTimeUp()
          clearInterval(timer)
        }
        return newTime
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [examStart, totalSeconds, onTimeUp])

  if (timeLeft === null) {
    return (
      <View style={[styles.container, styles.notStarted]}>
        <Text style={styles.notStartedText}>Not started</Text>
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
        { backgroundColor: isLowTime ? "red" : themeColor.primary },
      ]}
    >
      <Text style={styles.timerText}>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  timerText: {
    fontSize: 16,
    fontFamily: "monospace",
    color: "white",
    fontWeight: "bold",
  },
  notStarted: {
    backgroundColor: "#ccc",
  },
  notStartedText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
})
