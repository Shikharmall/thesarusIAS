import { Button } from "../common/Button"
import { useEffect, useState } from "react"
import { themeColor } from "../../utils/constant/Color"
import type { QuestionNavigatorProps } from "../../utils/types/testseries"
import { SquareMenuIcon } from "lucide-react"

export function QuestionNavigator({
  sections,
  currentQuestionId,
  currentSectionIndex,
  onSectionSelect,
  onQuestionSelect,
  questionStatuses,
}: QuestionNavigatorProps) {
  const [counts, setCounts] = useState({
    answered: 0,
    answeredFlagged: 0,
    flagged: 0,
    visited: 0,
    notAnswered: 0,
    notVisited: 0,
  })

  // useEffect(() => {
  //   const currentSec = sections?.[currentSectionIndex]
  //   if (!currentSec) return

  //   const answered = currentSec?.questions?.filter(q => questionStatuses[q.id]?.answered)?.length
  //   const answeredFlagged = currentSec?.questions?.filter(q => questionStatuses[q.id]?.answered && questionStatuses[q.id]?.flagged)?.length
  //   const flagged = currentSec?.questions?.filter(q => questionStatuses[q.id]?.flagged)?.length
  //   const visited = currentSec?.questions?.filter(q => questionStatuses[q.id]?.visited)?.length
  //   const total = currentSec?.questions?.length

  //   setCounts({
  //     answered: answered - answeredFlagged,
  //     answeredFlagged,
  //     flagged: flagged - answeredFlagged,
  //     visited,
  //     notAnswered: visited - (answered + flagged - answeredFlagged),
  //     notVisited: total - visited,
  //   })
  // }, [questionStatuses, currentSectionIndex, sections])

  useEffect(() => {
    const currentSec = sections?.[currentSectionIndex]
    if (!currentSec) return

    const answeredFlagged = currentSec.questions.filter(
      q => questionStatuses[q.id]?.answered && questionStatuses[q.id]?.flagged
    ).length

    const answeredOnly = currentSec.questions.filter(
      q => questionStatuses[q.id]?.answered && !questionStatuses[q.id]?.flagged
    ).length

    const flaggedOnly = currentSec.questions.filter(
      q => questionStatuses[q.id]?.flagged && !questionStatuses[q.id]?.answered
    ).length

    const visitedNotAnswered = currentSec.questions.filter(
      q => questionStatuses[q.id]?.visited && !questionStatuses[q.id]?.answered && !questionStatuses[q.id]?.flagged
    ).length

    const total = currentSec.questions.length

    setCounts({
      answered: answeredOnly,
      answeredFlagged,
      flagged: flaggedOnly,
      visited: visitedNotAnswered,
      notAnswered: visitedNotAnswered,
      notVisited: total - (answeredOnly + answeredFlagged + flaggedOnly + visitedNotAnswered)
    })
  }, [questionStatuses, currentSectionIndex, sections])

  return (
    <div className="flex flex-col h-full">
      {/* Section Tabs */}
      {sections?.length > 1 && (
        <div className="flex justify-between sticky top-0 z-10 py-2 px-2 bg-white">
          {sections.map((_, index) => (
            <div
              key={index}
              className="text-white px-3 py-1 m-1 rounded text-xs font-bold cursor-pointer flex justify-center items-center"
              style={{ backgroundColor: index === currentSectionIndex ? themeColor.secondary : themeColor.primary }}
              onClick={() => {
                onSectionSelect(index)
                onQuestionSelect(sections[index]?.questions[0]?.id)
              }}
            >
              PART {String.fromCharCode(65 + index)}
            </div>
          ))}
        </div>
      )}

      {/* Question Buttons */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex flex-wrap gap-2">
          {sections[currentSectionIndex]?.questions?.map((question, quesIndex) => {
            const status = questionStatuses[question.id]
            const isActive = currentQuestionId === question.id

            let bg = "bg-white"
            let border = "border border-gray-300"
            let text = "text-blue-500"

            // if (isActive) {
            //   bg = themeColor.primary
            //   border = "border-0"
            //   text = "text-white"
            // } else if (status?.answered && status?.visited === undefined) {
            //   bg = "bg-green-100"
            //   border = "border border-green-300"
            //   text = "text-green-800"
            // } else if (status?.flagged) {
            //   bg = "bg-purple-100"
            //   border = "border border-purple-300"
            //   text = "text-purple-800"
            // } else if (status?.visited && status?.answered === undefined) {
            //   bg = "bg-red-100"
            //   border = "border border-red-300"
            //   text = "text-red-700"
            // } else if (status?.answered && status?.visited) {
            //   bg = "bg-red-100"
            //   border = "border border-red-300"
            //   text = "text-red-700"
            // }

            if (isActive) {
              bg = themeColor.primary
              border = "border-0"
              text = "text-white"
            } else if (status?.answered && status?.flagged) {
              // Answered & flagged
              bg = "bg-purple-100"
              border = "border border-purple-300"
              text = "text-purple-800"
            } else if (status?.answered) {
              // Answered only
              bg = "bg-green-100"
              border = "border border-green-300"
              text = "text-green-800"
            } else if (status?.flagged) {
              // Flagged only
              bg = "bg-purple-100"
              border = "border border-purple-300"
              text = "text-purple-800"
            } else if (status?.visited) {
              // Visited only
              bg = "bg-red-100"
              border = "border border-red-300"
              text = "text-red-700"
            } else {
              // Not visited
              bg = "bg-white"
              border = "border border-gray-300"
              text = "text-blue-500"
            }


            return (
              <Button
                key={question.id}
                className={`w-12 h-12 rounded flex items-center justify-center relative ${bg} ${border}`}
                onClick={() => onQuestionSelect(question.id)}
                aria-label={`Go to question ${question.id}`}
              >
                <span className={`font-medium text-sm ${text}`}>{quesIndex + 1}</span>
                {status?.answered && status?.flagged && (
                  <div
                    className="absolute bottom-0 right-0 w-4 h-4 rounded bg-green-600 flex items-center justify-center"
                  >
                    <SquareMenuIcon size={12} color="white" />
                  </div>
                )}
              </Button>
            )
          })}
        </div>
      </div>

      {/* Legend (Sticky Bottom Grid) */}
      <div className="sticky bottom-0 bg-white p-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          <LegendItem color="green" label="Answered" value={counts?.answered} />
          <LegendItem color="red" label="Not Answered" value={counts?.notAnswered} />
          <LegendItem color="purple" label="Marked" value={counts?.flagged} />
          <LegendItem color="white" label="Not Visited" value={counts?.notVisited} />
          <div className="col-span-2">
            <LegendItem
              color="purple"
              label="Answered & marked for Review"
              value={counts?.answeredFlagged}
              isShowIcon
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function LegendItem({
  color,
  label,
  value,
  isShowIcon
}: {
  color: string
  label: string
  value: number
  isShowIcon?: boolean
}) {
  return (
    <div className="flex flex-row items-center gap-2">
      {/* Colored Box */}
      <div
        className="w-10 h-10 rounded flex items-center justify-center relative"
        style={{ backgroundColor: color, borderColor: "#d6d2d2", borderWidth: 1 }}
      >
        <span style={{ color: color === "white" ? "black" : "white", fontWeight: "bold" }}>{value}</span>
        {isShowIcon && (
          <div className="absolute bottom-0 right-0 w-4 h-4 rounded bg-green-600 flex items-center justify-center">
            <SquareMenuIcon size={12} color="white" />
          </div>
        )}
      </div>

      {/* Label */}
      <p style={{ color: themeColor.primary }} className="text-sm font-medium">
        {label}
      </p>
    </div>
  )
}
