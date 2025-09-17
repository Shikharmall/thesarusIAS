import { useState, useEffect } from "react"
import { Clock } from "lucide-react"
import { themeColor } from "../utils/Color"

interface ExamTimerProps {
  duration: number // duration in minutes
  onTimeUp: () => void
}

export function ExamTimer({ duration, onTimeUp }: ExamTimerProps) {
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
    <div
      className={"flex flex-col items-center gap-2 px-4 py-2"}
    >
      <h4 className="font-bold">Time Left</h4>
      <div className="flex flex-row items-center gap-2 px-4 py-2 rounded-lg font-bold text-white"

        style={{ backgroundColor: isLowTime ? "red" : themeColor?.primary }}>
        {/* <Clock className="h-5 w-5" /> */}
        <span className="text-lg font-mono">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>

      </div>
    </div>
  )
}
