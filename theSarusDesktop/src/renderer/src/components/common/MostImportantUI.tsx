// ExamComponent.tsx
import React, { useReducer, useCallback, useEffect } from "react";
import axios from "axios";
import { FixedSizeList as List } from "react-window";

// -------------------- Types --------------------
interface Option {
  label: string; // HTML string
  isCorrect?: boolean;
}

interface Question {
  _id: string;
  question: string; // HTML string
  options: Option[];
}

interface Exam {
  _id: string;
  questions: Question[];
  duration: number; // in minutes
}

interface ExamProps {
  exam: Exam;
  userId: string;
}

// -------------------- Reducer --------------------
type Action =
  | { type: "ANSWER"; questionId: string; selectedOption: string };

interface State {
  responses: { [questionId: string]: string };
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ANSWER":
      return {
        ...state,
        responses: { ...state.responses, [action.questionId]: action.selectedOption },
      };
    default:
      return state;
  }
};

// -------------------- Component --------------------
export const ExamComponent: React.FC<ExamProps> = ({ exam, userId }) => {
  const [state, dispatch] = useReducer(reducer, { responses: {} });

  // Handle answer selection
  const handleAnswer = useCallback((questionId: string, option: string) => {
    dispatch({ type: "ANSWER", questionId, selectedOption: option });
  }, []);

  // Auto-save every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!Object.keys(state.responses).length) return;

      axios.post("/api/exam/addResponse", {
        userId,
        examId: exam._id,
        responses: Object.entries(state.responses).map(([questionId, selectedOption]) => ({
          questionId,
          selectedOption,
        })),
      }).catch(console.error);
    }, 10000);

    return () => clearInterval(interval);
  }, [state.responses, exam._id, userId]);

  // -------------------- Question Renderer --------------------
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const question = exam.questions[index];

    return (
      <div style={style} className="p-4 border-b bg-white">
        <div dangerouslySetInnerHTML={{ __html: question.question }} />
        <div className="flex flex-col mt-2 space-y-2">
          {question.options.map((opt, i) => (
            <button
              key={i}
              className={`p-2 border rounded text-left ${
                state.responses[question._id] === opt.label ? "bg-blue-200" : ""
              }`}
              onClick={() => handleAnswer(question._id, opt.label)}
              dangerouslySetInnerHTML={{ __html: opt.label }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-4">
      <List
        height={600} // adjust as needed
        itemCount={exam.questions.length}
        itemSize={180} // approximate height per question
        width="100%"
      >
        {Row}
      </List>
    </div>
  );
};
