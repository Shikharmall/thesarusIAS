import { themeColor } from "@renderer/utils/constant/Color";
import { CheckCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";

export default function ExamSubmitScreen() {
    const navigate = useNavigate();
    const { total, answered, flagged, answeredFlagged } = useParams();

    // Convert params to numbers & compute not answered
    const { totalNum, answeredNum, flaggedNum, answeredFlaggedNum } = useMemo(() => {
        const totalNum = Number(total) || 0;
        const answeredNum = Number(answered) || 0;
        const flaggedNum = Number(flagged) || 0;
        const answeredFlaggedNum = Number(answeredFlagged) || 0;
        const notAnswered = totalNum - (answeredNum + answeredFlaggedNum);
        return { totalNum, answeredNum, flaggedNum, answeredFlaggedNum, notAnswered };
    }, [total, answered, flagged, answeredFlagged]);

    const summaryItems = [
        { label: "Total Questions", value: totalNum, color: "text-gray-800" },
        { label: "Attempted", value: answeredNum, color: "text-green-600" },
        { label: "Attempted & Marked", value: answeredFlaggedNum, color: "text-blue-600" },
        { label: "Marked", value: flaggedNum, color: "text-red-600" },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            {/* Card */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 w-full max-w-md text-center">
                {/* Icon + Title */}
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h2 className="text-2xl font-bold text-gray-800">Exam Submitted!</h2>
                <p className="text-gray-600 mt-2">Your responses have been saved successfully.</p>

                {/* Summary Grid */}
                <div className="grid grid-cols-2 gap-4 mt-6 w-full">
                    {summaryItems.map((item) => (
                        <div key={item.label} className="bg-gray-100 rounded-lg p-3">
                            <p className="text-sm text-gray-500">{item.label}</p>
                            <p className={`text-xl font-bold ${item.color}`}>{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* Action Buttons */}
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
