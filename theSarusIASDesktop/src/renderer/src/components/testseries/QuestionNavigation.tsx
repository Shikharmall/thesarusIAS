import { Button } from "../common/Button"
import { useEffect, useState } from "react"
import { themeColor } from "../../utils/constant/Color"
import type { QuestionNavigatorProps } from "../../utils/types/testseries"

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
    flagged: 0,
    visited: 0,
    notAnswered: 0,
    notVisited: 0,
  })

  useEffect(() => {
    const currentSec = sections?.[currentSectionIndex]
    if (!currentSec) return

    const answered = currentSec.questions.filter(q => questionStatuses[q.id]?.answered).length
    const flagged = currentSec.questions.filter(q => questionStatuses[q.id]?.flagged).length
    const visited = currentSec.questions.filter(q => questionStatuses[q.id]?.visited).length
    const total = currentSec.questions.length

    setCounts({
      answered,
      flagged,
      visited,
      notAnswered: visited - (answered + flagged),
      notVisited: total - visited,
    })
  }, [questionStatuses, currentSectionIndex, sections])

  return (
    <div className="flex flex-col h-full">
      {/* Section Tabs */}
      {sections?.length > 1 && (
        <div className="flex justify-between sticky top-0 z-10 py-2 px-4 bg-white">
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
              PART-{String.fromCharCode(65 + index)}
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

            if (isActive) {
              bg = themeColor.primary
              border = "border-0"
              text = "text-white"
            } else if (status?.answered) {
              bg = "bg-green-100"
              border = "border border-green-300"
              text = "text-green-800"
            } else if (status?.flagged) {
              bg = "bg-purple-100"
              border = "border border-purple-300"
              text = "text-purple-800"
            } else if (status?.visited) {
              bg = "bg-red-100"
              border = "border border-red-300"
              text = "text-red-700"
            }

            return (
              <Button
                key={question.id}
                className={`w-12 h-12 rounded flex items-center justify-center ${bg} ${border}`}
                onClick={() => onQuestionSelect(question.id)}
                aria-label={`Go to question ${question.id}`}
              >
                <span className={`font-medium text-sm ${text}`}>{quesIndex + 1}</span>
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
        </div>
      </div>
    </div>
  )
}

function LegendItem({
  color,
  label,
  value,
}: {
  color: string
  label: string
  value: number
}) {
  return (
    <div className="flex flex-row items-center gap-2">
      {/* Colored Box */}
      <div className="w-6 h-6 rounded" style={{ backgroundColor: color, borderColor: '#d6d2d2', borderWidth: 1 }}></div>

      {/* Label + Count */}
      <p style={{ color: themeColor.primary }} className="text-sm font-medium">
        {label}: <span style={{ color: themeColor.secondary }}>{value}</span>
      </p>
    </div>
  )
}
