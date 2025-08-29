// src/pages/ExamPaper.tsx
import { useState } from "react";
import SideBar from "../components/dashboard/SideBar";
import CreateSection from "./CreateSection";
import Stepper from "../components/dashboard/Stepper";

const AddQuestionScreen = () => {
    const [examName, setExamName] = useState("");
    const [course, setCourse] = useState("");
    const [courseCode, setCourseCode] = useState("");
    const [passPercentage, setPassPercentage] = useState(35);

    const [tab, setTab] = useState<number>(1);

    return (
        <div className="min-h-screen bg-gray-50 p-8">

            {/* Sidebar */}
            <SideBar />

            <main className="flex-1 ml-50 p-8">

                <Stepper currentStep={1} />

                {/* Progress Indicator */}
                <div className="flex items-center justify-center mb-10">
                    <div className="flex items-center w-full max-w-3xl">
                        {["Create Exam Paper", "Create Sections", "Create Questions"].map(
                            (step, index) => (
                                <div key={index} className="flex-1 flex items-center">
                                    <div className="flex flex-col items-center w-full">
                                        {/* Step Circle */}
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${index === 0
                                                ? "bg-purple-600 border-purple-600 text-white"
                                                : "border-gray-300 text-gray-400"
                                                }`}
                                        >
                                            {index + 1}
                                        </div>
                                        <span
                                            className={`mt-2 text-sm ${index === 0 ? "text-purple-600 font-semibold" : "text-gray-400"
                                                }`}
                                        >
                                            {step}
                                        </span>
                                    </div>
                                    {/* Line Connector */}
                                    {index < 2 && (
                                        <div
                                            className={`flex-1 h-[2px] ${index === 0 ? "bg-purple-600" : "bg-gray-300"
                                                }`}
                                        ></div>
                                    )}
                                </div>
                            )
                        )}
                    </div>
                </div>

                {
                    tab === 1
                        ?

                        <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow">
                            <h2 className="text-xl font-semibold mb-6">
                                Enter the details to create a new exam paper
                            </h2>

                            {/* Exam Name */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Exam Name
                                </label>
                                <input
                                    type="text"
                                    value={examName}
                                    onChange={(e) => setExamName(e.target.value)}
                                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
                                    placeholder="Enter exam name"
                                />
                            </div>

                            {/* Select Course */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Select Course
                                </label>
                                <select
                                    value={course}
                                    onChange={(e) => setCourse(e.target.value)}
                                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
                                >
                                    <option value="">Choose course</option>
                                    <option value="Course A">Course A</option>
                                    <option value="Course B">Course B</option>
                                </select>
                            </div>

                            {/* Course Code */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Enter Course code
                                </label>
                                <input
                                    type="text"
                                    value={courseCode}
                                    onChange={(e) => setCourseCode(e.target.value)}
                                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
                                    placeholder="Enter course code"
                                />
                            </div>

                            {/* Pass Percentage */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Select Pass Percentage
                                </label>
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                                    <span>0%</span>
                                    <span>100%</span>
                                </div>
                                <input
                                    type="range"
                                    min={0}
                                    max={100}
                                    value={passPercentage}
                                    onChange={(e) => setPassPercentage(Number(e.target.value))}
                                    className="w-full accent-purple-600"
                                />
                                <div className="text-right text-purple-600 font-semibold mt-1">
                                    {passPercentage}%
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center gap-4">
                                <button className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700" onClick={() => setTab(2)}>
                                    Next
                                </button>
                                <button className="text-purple-600 font-medium hover:underline">
                                    Save and finish
                                </button>
                            </div>
                        </div>

                        :

                        <CreateSection onChangeTab={setTab} />

                }

            </main>

        </div>
    );
};

export default AddQuestionScreen;
