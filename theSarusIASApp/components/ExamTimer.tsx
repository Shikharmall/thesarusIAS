import { useState, useEffect } from "react"
// import { Clock } from "lucide-react"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Text, View } from "react-native"
import { themeColor } from "@/constants/Colors";

interface ExamTimerProps {
    initialTime: number,
    duration: number, // duration in minutes
    onTimeUp: () => void
}

export function ExamTimer({ initialTime, duration, onTimeUp }: ExamTimerProps) {
    const [timeLeft, setTimeLeft] = useState(duration * 60) // convert to seconds

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp()
            return
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [timeLeft, onTimeUp])

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    const isLowTime = timeLeft <= 300 // 5 minutes

    return (
        <View
            className="flex items-center gap-2 px-5 py-1 rounded-full font-semibold"
            style={{ backgroundColor: isLowTime ? "red" : themeColor?.primary }}
        >
            {/* <Clock className="h-5 w-5" /> */}
            {/* <MaterialIcons name="timer" size={16} color="#ed8936" /> */}
            <Text className="text-md font-mono text-white font-bold">
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </Text>
        </View>
    )
}
