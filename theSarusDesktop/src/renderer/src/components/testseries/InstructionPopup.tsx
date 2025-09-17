import { themeColor } from "@renderer/utils/constant/Color"
import type { InstructionPopupProps } from "../../utils/types/testseries"
import { Button } from "../common/Button"
import { Card, CardContent } from "../common/Card"
import { X, CheckCircle, SquareMenuIcon, Info, AlertCircle } from "lucide-react"
import { examData } from "@renderer/data/examData"

export function InstructionPopup({ isOpen = true, onClose }: InstructionPopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">

        <div className="bg-indigo-600 text-white px-4 py-2 sticky top-0 z-50" style={{
          backgroundColor: themeColor?.primary
        }}>
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold flex items-center gap-2">
              SSC CGL Examination - Important Instructions
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-indigo-700 rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <CardContent className="p-6 space-y-6">

          {/* General Instructions */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-red-600">
              <Info className="h-5 w-5" />
              <h3 className="font-semibold text-lg">General Instructions</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-600">1.</span>
                <span>Total duration of examination is <strong>{examData?.duration} minutes</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-600">2.</span>
                <span>The examination contains <strong>{examData?.duration} questions</strong> divided into {examData?.sections?.length} sections.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-600">3.</span>
                <span>Each question carries <strong>2 marks</strong>. Total marks: 200.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-600">4.</span>
                <span>There is <strong>negative marking</strong> of 0.5 marks for each wrong answer.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-600">5.</span>
                <span>You can navigate between questions using the question palette.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-600">6.</span>
                <span>The timer will be displayed at the right top of the screen. The examination will automatically submit when time expires.</span>
              </li>
            </ul>
          </div>

          {/* Section Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-green-600">Section Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {
                examData?.sections?.map((section, index) => (
                  <div className="border rounded-lg p-3" key={index}>
                    <h4 className="font-semibold text-blue-600">{section?.name}</h4>
                    <p className="text-sm text-gray-600">Questions {section?.questions[0]?.id}-{section?.questions[section?.questions?.length - 1]?.id} ({section?.questions?.length} questions)</p>
                  </div>

                ))
              }
            </div>
          </div>

          {/* Navigation Instructions */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-purple-600">
              <CheckCircle className="h-5 w-5" />
              <h3 className="font-semibold text-lg">Navigation Instructions</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-purple-600">•</span>
                <span>
                  Use <strong>"Next"</strong> and <strong>"Previous"</strong> buttons to navigate between questions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-purple-600">•</span>
                <span>Click on question numbers in the palette to jump directly to any question.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-purple-600">•</span>
                <span>
                  Use <strong>"Flag for Review"</strong> to mark questions for later review.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-purple-600">•</span>
                <span>
                  Use <strong>"Clear Response"</strong> to clear your selected answer.
                </span>
              </li>
            </ul>
          </div>

          {/* Color Coding */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-orange-600">Question Status Color Coding</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded"></div>
                <span className="text-sm">Not Visited</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-100 border-2 border-red-300 rounded"></div>
                <span className="text-sm">Not Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
                <span className="text-sm">Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-500 rounded"></div>
                <span className="text-sm">Flagged</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-500 rounded relative">
                  <div
                    className="absolute bottom-0 right-0 w-4 h-4 rounded bg-green-600 flex items-center justify-center"
                  >
                    <SquareMenuIcon size={12} color="white" />
                  </div>
                </div>
                <span className="text-sm">Answered & Flagged</span>
              </div>
            </div>
          </div>

          {/* Switching Warning */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-red-800">
              <AlertCircle className="h-5 w-5" />
              <h3 className="font-semibold">Strict Instructions & Exam Malpractices</h3>
            </div>
            <p className="text-sm text-red-700 mt-2">
              Please follow all instructions carefully. Any of the following actions may be considered malpractices and lead to immediate disqualification:
            </p>
            <ul className="text-sm text-red-700 mt-2 list-disc list-inside space-y-1">
              <li>Switching or refreshing the screen during the exam.</li>
              <li>Using multiple devices or opening unauthorized applications.</li>
              <li>Copying, sharing, or attempting to share answers with others.</li>
              <li>Using any unfair means like notes, calculators, or external help where not allowed.</li>
              <li>Recording or capturing screenshots of questions or answers.</li>
              <li>Impersonation or allowing someone else to attempt the exam on your behalf.</li>
            </ul>
            <p className="text-sm text-red-700 mt-2 font-semibold">
              Any violation will result in automatic submission and may lead to cancellation of your exam attempt.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}
