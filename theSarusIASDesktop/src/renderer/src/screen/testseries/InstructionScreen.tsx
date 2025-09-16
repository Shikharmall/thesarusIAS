import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Info, CheckCircle } from "lucide-react"

const InstructionScreen: React.FC = () => {
  const navigate = useNavigate()
  const [isAgreed, setIsAgreed] = useState<boolean>(false)

  const handleAgree = () => {
    navigate("/exam/1") // redirect to exam start page
  }

  return (
    <div className="min-h-screen flex justify-center items-center px-4"> {/* bg-gradient-to-br from-blue-50 to-indigo-100 */}
      {/* Header */}
      <div className="w-full bg-white/70 backdrop-blur-md shadow-md rounded-md overflow-hidden">
        <div className="text-white p-6 text-center bg-blue-600">
          <h1 className="text-2xl font-bold">Examination Instructions</h1>
          <p className="text-sm text-blue-100 mt-1">
            Please read the instructions carefully before starting the exam
          </p>
        </div>

        {/* Instructions */}
        <div className="p-6 max-h-[400px] overflow-y-auto space-y-4 text-gray-700 text-sm leading-relaxed">
          <div className="flex items-start gap-2">
            <Info className="w-5 h-5 text-blue-600 mt-0.5" />
            <p>
              The total duration of the examination is <b>120 minutes</b>.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <Info className="w-5 h-5 text-blue-600 mt-0.5" />
            <p>
              The countdown timer at the top right corner will display the
              remaining time available for you to complete the examination.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">
              Question palette statuses:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-medium text-gray-500">Gray:</span> Not
                visited
              </li>
              <li>
                <span className="font-medium text-red-500">Red:</span> Not
                answered
              </li>
              <li>
                <span className="font-medium text-green-600">Green:</span>{" "}
                Answered
              </li>
              <li>
                <span className="font-medium text-purple-600">Purple:</span>{" "}
                Marked for review
              </li>
            </ul>
          </div>

          <p>You can navigate between questions by clicking on the question number in the question palette.</p>
          <p className="text-red-600 font-medium">
            Do not switch the screen during the exam, it will end your exam immediately.
          </p>
          <p>Ensure a stable internet connection and do not refresh the page unnecessarily.</p>
          <p>
            After the time is over, your exam will be submitted automatically.
          </p>
        </div>

        {/* Agreement */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-start gap-2">
          <input
            id="agree"
            type="checkbox"
            onChange={() => setIsAgreed(!isAgreed)}
            className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
          />
          <label
            htmlFor="agree"
            className="text-sm text-gray-700 cursor-pointer"
          >
            I have read and understood all the instructions carefully.
          </label>
        </div>

        {/* Footer Buttons */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-300 flex justify-end gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 px-5 py-2 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition cursor-pointer"
          >
            Back
          </button>
          <button
            onClick={handleAgree}
            disabled={!isAgreed}
            className={`flex items-center gap-1 px-5 py-2 text-sm rounded-lg font-semibold transition shadow-md ${isAgreed
              ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          //style={{backgroundColor: themeColor?.primary}}
          >
            <CheckCircle className="w-4 h-4" /> I Agree & Start Exam
          </button>
        </div>
      </div>
    </div>
  )
}

export default InstructionScreen
