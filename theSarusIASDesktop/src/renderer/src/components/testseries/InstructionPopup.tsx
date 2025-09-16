import { themeColor } from "@renderer/utils/constant/Color"
import type { InstructionPopupProps } from "../../utils/types/testseries"
import { Button } from "../common/Button"
import { Card, CardContent, CardHeader, CardTitle } from "../common/Card"
import { X, AlertCircle, Clock, CheckCircle } from "lucide-react"

export function InstructionPopup({ isOpen = true, onClose, onStartExam }: InstructionPopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="text-white" style={{ backgroundColor: themeColor?.primary }}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold">SSC CGL Examination - Important Instructions</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-blue-700">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* General Instructions */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-red-600">
              <AlertCircle className="h-5 w-5" />
              <h3 className="font-semibold text-lg">General Instructions</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-600">1.</span>
                <span>
                  Total duration of examination is <strong>60 minutes</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-600">2.</span>
                <span>
                  The examination contains <strong>100 questions</strong> divided into 4 sections.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-600">3.</span>
                <span>
                  Each question carries <strong>2 marks</strong>. Total marks: 200.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-600">4.</span>
                <span>
                  There is <strong>negative marking</strong> of 0.5 marks for each wrong answer.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-600">5.</span>
                <span>You can navigate between questions using the question palette.</span>
              </li>
            </ul>
          </div>

          {/* Section Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-green-600">Section Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-3">
                <h4 className="font-semibold text-blue-600">General Intelligence & Reasoning</h4>
                <p className="text-sm text-gray-600">Questions 1-25 (25 Questions)</p>
              </div>
              <div className="border rounded-lg p-3">
                <h4 className="font-semibold text-blue-600">General Awareness</h4>
                <p className="text-sm text-gray-600">Questions 26-50 (25 Questions)</p>
              </div>
              <div className="border rounded-lg p-3">
                <h4 className="font-semibold text-blue-600">Quantitative Aptitude</h4>
                <p className="text-sm text-gray-600">Questions 51-75 (25 Questions)</p>
              </div>
              <div className="border rounded-lg p-3">
                <h4 className="font-semibold text-blue-600">English Comprehension</h4>
                <p className="text-sm text-gray-600">Questions 76-100 (25 Questions)</p>
              </div>
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
            </div>
          </div>

          {/* Timer Warning */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-yellow-800">
              <Clock className="h-5 w-5" />
              <h3 className="font-semibold">Time Management</h3>
            </div>
            <p className="text-sm text-yellow-700 mt-2">
              The timer will be displayed at the top of the screen. The examination will automatically submit when time
              expires. Plan your time wisely - approximately 36 seconds per question.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t">
            <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Read Again
            </Button>
            <Button onClick={onStartExam} className="flex-1 bg-green-600 hover:bg-green-700">
              I Understand - Start Examination
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
