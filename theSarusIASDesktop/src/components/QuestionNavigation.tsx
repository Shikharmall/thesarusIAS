import { Button } from "../components/ui/Button"
import { CheckCircle, Circle, AlertCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { colors, themeColor } from "../utils/constant/Color"
import type { QuestionNavigatorProps } from "../utils/types/testseries"

export function QuestionNavigator({ sections, currentQuestionId, currentSectionIndex, onSectionSelect, onQuestionSelect, questionStatuses }: QuestionNavigatorProps) {

  const [counts, setCounts] = useState({
    answered: 0,
    notAnswered: 0,
    flagged: 0,
    visited: 0,
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
      notAnswered: total - answered,
      notVisited: total - visited,
    })
  }, [questionStatuses, currentSectionIndex, sections])

  return (
    <>
      {
        sections?.length > 1 && (
          <div className="flex justify-between sticky top-0 z-10 py-2"
            style={{ backgroundColor: colors?.white }}>
            {
              sections?.map((_, index) => (
                <div key={index} className="text-white px-3 py-1 m-1 rounded flex flex-row text-xs font-bold cursor-pointer" style={{ backgroundColor: index === currentSectionIndex ? themeColor?.secondary : themeColor?.primary }}
                  onClick={() => {
                    onSectionSelect(index)
                    onQuestionSelect(sections[index]?.questions[0]?.id)
                  }}

                >PART-{String?.fromCharCode(65 + index)}</div>
              ))
            }
          </div>
        )
      }

      <div className="space-y-4 m-4">

        <div className="flex flex-wrap gap-2">
          {sections[currentSectionIndex]
            ?.questions
            ?.map((question, quesIndex) => {
              const status = questionStatuses[question.id];
              const isActive = currentQuestionId === question.id;

              let bg = "bg-white";
              let border = "border border-gray-300";
              let text = "text-blue-500";
              let icon = null;

              if (isActive) {
                bg = themeColor?.primary;
                border = "border-0";
                text = "text-white";
              } else if (status?.answered) {
                bg = "bg-green-100";
                border = "border border-green-300";
                text = "text-green-800";
              } else if (status?.flagged) {
                bg = "bg-orange-100";
                border = "border border-orange-300";
                text = "text-orange-800";
              } else if (status?.visited) {
                bg = "bg-gray-100";
                border = "border border-gray-300";
                text = "text-gray-700";
              }

              return (
                <Button
                  key={question?.id}
                  className={`w-12 h-12 rounded flex items-center justify-center ${bg} ${border}`}
                  onClick={() => onQuestionSelect(question.id)}
                  aria-label={`Go to question ${question.id}`}
                >
                  {icon ?? <span className={`font-medium text-sm ${text}`}>{quesIndex + 1}</span>}
                </Button>
              );
            })}
        </div>

        {/* Legend */}
        <div className="space-y-2 text-sm">
          <LegendItem
            icon={<CheckCircle className="h-4 w-4 text-green-600" />}
            label="Answered"
            value={counts.answered}
          />
          <LegendItem
            icon={<Circle className="h-4 w-4 text-gray-400" />}
            label="Not Answered"
            value={counts.notAnswered}
          />
          <LegendItem
            icon={<AlertCircle className="h-4 w-4 text-orange-500" />}
            label="Mark For Review"
            value={counts.flagged}
          />
        </div>
      </div >
    </>
  )
}

function LegendItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: number
}) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <p style={{ color: themeColor.primary }}>
        {label}: <span style={{ color: themeColor.secondary }}>{value}</span>
      </p>
    </div>
  )
}
