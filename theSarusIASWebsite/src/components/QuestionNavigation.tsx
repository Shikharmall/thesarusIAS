import { Button } from "../components/ui/Button"
import { CheckCircle, Circle, AlertCircle } from "lucide-react"
import { QuestionNavigatorProps } from "../utils/type"
import { colors, themeColor } from "../utils/Color"
import { useEffect, useState } from "react"

export function QuestionNavigator({ sections, currentQuestion, currentSection, onSectionSelect, onQuestionSelect }: QuestionNavigatorProps) {

  const getFirstQuestionFormIndex = (index: number): number => {
    return sections?.[index]?.questions?.[0]?.id;
  };

  const [answeredCount, setAnsweredCount] = useState<number>(0);
  const [notAnsweredCount, setNotAnsweredCount] = useState<number>(0);
  const [flaggedCount, setFlaggedCount] = useState<number>(0);
  const [visitedCount, setVisitedCount] = useState<number>(0);
  const [notVisitedCount, setNotVisitedCount] = useState<number>(0);

  useEffect(() => {
    const currentSec = sections?.find(section => section?.id === currentSection);
    if (!currentSec) return;

    // const answered = currentSec.questions?.filter(q => questionStatuses[q.id]?.answered)?.length || 0;
    // const flagged = currentSec.questions?.filter(q => questionStatuses[q.id]?.flagged)?.length || 0;
    // const visited = currentSec.questions?.filter(q => questionStatuses[q.id]?.visited)?.length || 0;
    const total = currentSec?.questions?.length || 0;

    // setAnsweredCount(answered);
    // setFlaggedCount(flagged);
    // setVisitedCount(visited);
    // setNotAnsweredCount(total - answered);
    // setNotVisitedCount(total - visited);
  }, [ /*questionStatuses,*/ currentSection, sections]);

  // console.log(sections)

  return (
    <>
      {
        sections?.length > 1 && (
          <div className="flex justify-between sticky top-0 z-10 py-2"
            style={{ backgroundColor: colors?.white }}>
            {
              sections?.map((section, index) => (
                <div key={index} className="text-white px-3 py-1 m-1 rounded flex flex-row text-xs font-bold cursor-pointer" style={{ backgroundColor: section?.id === currentSection ? themeColor?.secondary : themeColor?.primary }}
                  onClick={() => {
                    onSectionSelect(index + 1);
                    onQuestionSelect(getFirstQuestionFormIndex(index));
                  }
                  }

                >PART-{index + 1}</div>
              ))
            }
          </div>
        )
      }

      <div className="space-y-4 m-4">

        {sections?.filter((section) => { return section?.id === currentSection })?.map((section) => (
          <div key={section?.name}>
            <div className="flex items-center justify-center border-b border-gray-300 m-2 p-1">
              <h3 className="text-md font-semibold text-gray-700">
                {section?.name}
              </h3>
            </div>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {sections[section?.id - 1]?.questions
                //?.filter((q) => q?.id >= section?.start && q?.id <= section?.end)
                ?.map((question) => (
                  <Button
                    key={question?.id}
                    variant={currentQuestion === question?.id ? "default" : "outline"}
                    size="sm"
                    className={`relative h-10 w-10 p-0 ${currentQuestion === question?.id
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : false
                        // : question.answered
                        ? "bg-green-100 text-green-800 border-green-300"
                        : "bg-background text-foreground"
                      }`}
                    onClick={() => onQuestionSelect(question?.id)}
                  >
                    {question?.id}
                    {/* {question?.flagged && (
                      <AlertCircle className="absolute -top-1 -right-1 h-3 w-3 text-orange-500" />
                    )} */}
                  </Button>
                ))}
            </div>
          </div>
        ))}

        <div className="space-y-2 text-sm text-sidebar-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <p style={{ color: themeColor?.primary }}>Answered: <span style={{ color: themeColor?.secondary }}>{answeredCount}</span></p>
          </div>
          <div className="flex items-center gap-2">
            <Circle className="h-4 w-4 text-gray-400" />
            <p style={{ color: themeColor?.primary }}>Not Answered: <span style={{ color: themeColor?.secondary }}>{notAnsweredCount}</span></p>
          </div>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-orange-500" />
            <p style={{ color: themeColor?.primary }}>Mark For Review: <span style={{ color: themeColor?.secondary }}>{flaggedCount}</span></p>
          </div>
        </div>
      </div>
    </>
  )
}
