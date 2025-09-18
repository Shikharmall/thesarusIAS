import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { CheckCircle, Flag, Circle, CircleDashed } from "lucide-react";
import { themeColor } from "@renderer/utils/constant/Color";

export default function ExamResultPage() {
  const navigate = useNavigate();
  const { total, answered, flagged, answeredFlagged } = useParams();

  // Convert params to numbers safely
  const totalNum = Number(total) || 0;
  const answeredNum = Number(answered) || 0;
  const flaggedNum = Number(flagged) || 0;
  const answeredFlaggedNum = Number(answeredFlagged) || 0;
  const notAnsweredNum =
    totalNum - (answeredNum + flaggedNum + answeredFlaggedNum);

  const stats = [
    { label: "Answered", value: answeredNum, color: "text-green-600", icon: <CheckCircle /> },
    { label: "Flagged", value: flaggedNum, color: "text-red-600", icon: <Flag /> },
    { label: "Answered + Flagged", value: answeredFlaggedNum, color: "text-purple-600", icon: <CircleDashed /> },
    { label: "Not Answered", value: notAnsweredNum, color: "text-gray-500", icon: <Circle /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🎉 Exam Summary
      </motion.h1>

      <motion.div
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-2 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center justify-center p-4 rounded-xl shadow-sm bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <div className={`text-3xl mb-2 ${item.color}`}>{item.icon}</div>
              <p className="text-lg font-semibold">{item.value}</p>
              <p className="text-sm text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl text-white font-semibold shadow-md"
            style={{ backgroundColor: themeColor?.primary }}
          >
            Go to Dashboard
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
