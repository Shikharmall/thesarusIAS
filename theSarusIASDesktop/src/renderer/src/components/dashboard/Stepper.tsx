// type Step = {
//     label: string;
// };

// const steps: Step[] = [
//     { label: "Create Exam Paper" },
//     { label: "Create Sections" },
//     { label: "Create Questions" },
// ];

// type StepperProps = {
//     currentStep: number;
// };

// export default function Stepper({ currentStep }: StepperProps) {
//     return (
//         <div className="w-full max-w-3xl mx-auto mt-10">
//             <h2 className="text-lg font-semibold mb-6">Exam Paper</h2>

//             <div className="relative flex items-center justify-between">

//                 <div className="absolute top-3 left-0 right-0 h-0.5 bg-gray-300 z-0" />

//                 {steps.map((step, idx) => (
//                     <div key={idx} className="relative flex flex-col items-center z-10 flex-1">
                       
//                         <div
//                             className={`flex items-center justify-center w-6 h-6 rounded-full border-2 transition
//                 ${idx < currentStep
//                                     ? "bg-green-500 border-green-500 text-white"
//                                     : idx === currentStep
//                                         ? "border-purple-700 bg-white text-purple-700"
//                                         : "border-gray-300 bg-white text-gray-400"
//                                 }`}
//                         >
//                             {idx < currentStep && (
//                                 <div className="w-2.5 h-2.5 bg-white rounded-full" />
//                             )}
//                         </div>

//                         <span
//                             className={`mt-2 text-sm font-medium ${idx < currentStep
//                                     ? "text-green-600"
//                                     : idx === currentStep
//                                         ? "text-purple-700"
//                                         : "text-gray-400"
//                                 }`}
//                         >
//                             {step.label}
//                         </span>
//                     </div>
//                 ))}

//                 <div
//                     className="absolute top-3 left-0 h-0.5 bg-green-500 z-0 transition-all duration-500"
//                     style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
//                 />
//             </div>
//         </div>
//     );
// }


import React from "react";

interface Step {
  label: string;
}

interface StepProgressProps {
  steps: Step[];
  currentStep: number; // 1-based index
}

const Stepper: React.FC<StepProgressProps> = ({ steps, currentStep }) => {
  const progressPercent = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="w-full mb-10">
      {/* Steps */}
      <div className="flex justify-between mb-4">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;

          return (
            <div key={index} className="flex flex-col items-center text-center flex-1">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 
                  ${isCompleted || isActive ? "bg-indigo-900 text-white border-indigo-900" : "text-indigo-900 border-indigo-900"}
                `}
              >
                {stepNumber}
              </div>
              <span
                className={`mt-2 text-sm ${
                  isActive ? "font-semibold text-indigo-900" : "text-gray-600"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-indigo-100 rounded-full">
        <div
          className="absolute top-0 left-0 h-2 bg-indigo-900 rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};

export default Stepper;
