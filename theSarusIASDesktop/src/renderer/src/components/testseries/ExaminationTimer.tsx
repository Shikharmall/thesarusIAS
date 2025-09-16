// import { useState, useEffect } from "react"
// import { themeColor } from "../../utils/constant/Color"
// import type { ExamTimerProps } from "../../utils/types/testseries"

// export function ExamTimer({ duration, startTimestamp,  onTimeUp }: ExamTimerProps) {
//   const [timeLeft, setTimeLeft] = useState(duration * 60) // convert to seconds

//   useEffect(() => {
//     if (timeLeft <= 0) {
//       onTimeUp()
//       return
//     }

//     const timer = setInterval(() => {
//       setTimeLeft((prev) => prev - 1)
//     }, 1000)

//     return () => clearInterval(timer)
//   }, [timeLeft, onTimeUp])

//   const minutes = Math.floor(timeLeft / 60)
//   const seconds = timeLeft % 60
//   const isLowTime = timeLeft <= 300 // 5 minutes

//   return (
//     <div
//       className={"flex flex-col items-center gap-2 px-4 py-2"}
//     >
//       <h4 className="font-bold">Time Left</h4>
//       <div className="flex flex-row items-center gap-2 px-4 py-2 rounded-lg font-bold text-white"

//         style={{ backgroundColor: isLowTime ? "red" : themeColor?.primary }}>
//         {/* <Clock className="h-5 w-5" /> */}
//         <span className="text-lg font-mono">
//           {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
//         </span>

//       </div>
//     </div>
//   )
// }


import { useState, useEffect } from "react"
import { themeColor } from "../../utils/constant/Color"
import type { ExamTimerProps } from "../../utils/types/testseries"

export function ExamTimer({ duration, startTimestamp, onTimeUp }: ExamTimerProps) {
  const totalSeconds = duration * 60

  const calculateTimeLeft = () => {
    const start = new Date(startTimestamp).getTime()
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
      <div className="flex flex-col items-center gap-2 px-4 py-2">
        <h4 className="font-bold">Exam not started yet</h4>
      </div>
    )
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const isLowTime = timeLeft <= 300

  return (
    <div className="flex flex-col items-center gap-2 px-4 py-2">
      <h4 className="font-bold">Time Left</h4>
      <div
        className="flex flex-row items-center gap-2 px-4 py-2 rounded-lg font-bold text-white"
        style={{ backgroundColor: isLowTime ? "red" : themeColor?.primary }}
      >
        <span className="text-lg font-mono">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  )
}




