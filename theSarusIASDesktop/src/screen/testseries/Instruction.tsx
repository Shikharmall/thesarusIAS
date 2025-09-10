import React from "react";
import { useNavigate } from "react-router-dom";

const Instruction: React.FC = () => {
  const navigate = useNavigate();

  const handleAgree = () => {
    navigate("/exam/1"); // redirect to exam start page
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Examination Instructions
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Please read the instructions carefully before starting the exam
        </p>

        {/* Instructions */}
        <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
          <p>1. The total duration of the examination is <b>120 minutes</b>.</p>
          <p>
            2. The clock will be set at the server. The countdown timer at the
            top right corner will display the remaining time available for you
            to complete the examination.
          </p>
          <p>
            3. The question palette at the right of screen shows one of the
            following statuses of each question:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Gray: You have not visited the question yet.</li>
            <li>Red: You have not answered the question.</li>
            <li>Green: You have answered the question.</li>
            <li>Purple: You have marked the question for review.</li>
          </ul>
          <p>
            4. You can navigate between questions by clicking on the question
            number in the question palette.
          </p>
          <p>
            5. Do not press the back button of the browser during the exam, it
            will end your session immediately.
          </p>
          <p>
            6. Ensure a stable internet connection and do not refresh the page
            unnecessarily.
          </p>
          <p>
            7. After the time is over, your exam will be submitted
            automatically.
          </p>
        </div>

        {/* Agreement */}
        <div className="mt-6 flex items-start">
          <input
            id="agree"
            type="checkbox"
            className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="agree" className="ml-2 text-sm text-gray-600">
            I have read and understood all the instructions carefully.
          </label>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Back
          </button>
          <button
            onClick={handleAgree}
            className="px-5 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            I Agree & Start Exam
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
