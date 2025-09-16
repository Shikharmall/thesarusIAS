import { themeColor } from "@renderer/utils/constant/Color";
import { CheckCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function ExamSubmitScreen() {
    const navigate = useNavigate();
    const { total, answered, marked } = useParams();

    // Convert params to numbers
    const totalNum = Number(total) || 0;
    const answeredNum = Number(answered) || 0;
    const markedNum = Number(marked) || 0;
    const notAnswered = totalNum - (answeredNum + markedNum);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            {/* Card */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 w-full max-w-md text-center">
                {/* Icon + Title */}
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h2 className="text-2xl font-bold text-gray-800">Exam Submitted!</h2>
                <p className="text-gray-600 mt-2">Your responses have been saved successfully.</p>

                {/* Summary */}
                <div className="grid grid-cols-2 gap-4 mt-6 w-full">
                    <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm text-gray-500">Total Questions</p>
                        <p className="text-xl font-bold">{totalNum}</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm text-gray-500">Attempted</p>
                        <p className="text-xl font-bold text-green-600">{answeredNum}</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm text-gray-500">Not Answered</p>
                        <p className="text-xl font-bold text-red-600">{notAnswered}</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm text-gray-500">Marked</p>
                        <p className="text-xl font-bold text-blue-600">{markedNum}</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full">
                    <button
                        className="flex-1 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
                        style={{ backgroundColor: themeColor?.primary }}
                        onClick={() => navigate("/testSeries")}
                    >
                        Take another test
                    </button>
                    <button
                        className="flex-1 border border-gray-300 py-2 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition cursor-pointer"
                        onClick={() => navigate("/home")}
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
