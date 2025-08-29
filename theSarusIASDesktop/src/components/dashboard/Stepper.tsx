type Step = {
    label: string;
};

const steps: Step[] = [
    { label: "Create Exam Paper" },
    { label: "Create Sections" },
    { label: "Create Questions" },
];

type StepperProps = {
    currentStep: number; // 0, 1, 2
};

export default function Stepper({ currentStep }: StepperProps) {
    return (
        <div className="w-full max-w-3xl mx-auto mt-10">
            <h2 className="text-lg font-semibold mb-6">Exam Paper</h2>

            <div className="relative flex items-center justify-between">
                {/* Line behind circles */}
                <div className="absolute top-3 left-0 right-0 h-0.5 bg-gray-300 z-0" />

                {steps.map((step, idx) => (
                    <div key={idx} className="relative flex flex-col items-center z-10 flex-1">
                        {/* Step Circle */}
                        <div
                            className={`flex items-center justify-center w-6 h-6 rounded-full border-2 transition
                ${idx < currentStep
                                    ? "bg-green-500 border-green-500 text-white"
                                    : idx === currentStep
                                        ? "border-purple-700 bg-white text-purple-700"
                                        : "border-gray-300 bg-white text-gray-400"
                                }`}
                        >
                            {idx < currentStep && (
                                <div className="w-2.5 h-2.5 bg-white rounded-full" />
                            )}
                        </div>

                        {/* Step Label */}
                        <span
                            className={`mt-2 text-sm font-medium ${idx < currentStep
                                    ? "text-green-600"
                                    : idx === currentStep
                                        ? "text-purple-700"
                                        : "text-gray-400"
                                }`}
                        >
                            {step.label}
                        </span>
                    </div>
                ))}

                {/* Progress line on top of gray line */}
                <div
                    className="absolute top-3 left-0 h-0.5 bg-green-500 z-0 transition-all duration-500"
                    style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                />
            </div>
        </div>
    );
}
