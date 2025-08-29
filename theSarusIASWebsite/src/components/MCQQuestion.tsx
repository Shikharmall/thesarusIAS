import { useState } from "react"
import { Card } from "./ui/Card"
import { RadioGroup, RadioGroupItem } from "./ui/RadioGroup"
import { Label } from "./ui/Label"
import { MCQQuestionProps } from "../utils/type"

export function MCQQuestion({ sectionName, questionStatus, question, onAnswerSelect }: MCQQuestionProps) {
    // const [selectedValue, setSelectedValue] = useState(question?.selectedAnswer || "")
    const [selectedValue, setSelectedValue] = useState("")

    const selectedAnswer = questionStatus?.selectedAnswer

    // const handleValueChange = (value: string) => {
    //     setSelectedValue(value)
    //     onAnswerSelect(question?.id, index)
    // }

    // console.log(question);

    return (
        <Card className="p-6 bg-[#fefce8] border-1 border-gray-300">
            <div className="space-y-6">
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-card-foreground">Q.{question?.id}</span>
                        {sectionName && (
                            <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">{sectionName}</span>
                        )}
                    </div>
                    <p className="text-card-foreground leading-relaxed text-base">{question?.question}</p>
                </div>

                <div className="flex flex-col space-y-3">
                    {question?.options.map((option, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => onAnswerSelect(question?.id, index)}
                            className={`flex items-center px-4 py-4 rounded-xl border-1 min-h-[56px] text-left transition-colors ${selectedAnswer === index
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-300 hover:border-blue-300"
                                }`}
                        >
                            <div
                                className={`w-6 h-6 mr-4 flex items-center justify-center rounded-full border-1 ${selectedAnswer === index ? "border-blue-500" : "border-gray-300"
                                    }`}
                            >
                                {selectedAnswer === index && (
                                    <div className="w-3 h-3 rounded-full bg-blue-600" />
                                )}
                            </div>

                            <span
                                className={`flex-1 text-[15px] leading-[22px] ${selectedAnswer === index
                                    ? "text-blue-600 font-medium"
                                    : "text-gray-800"
                                    }`}
                            >
                                {option}
                            </span>
                        </button>
                    ))}
                </div>

                {/* <RadioGroup name={'hello'} value={selectedValue} onValueChange={() => onAnswerSelect(question?.id, 1)} className="space-y-4">
                    {question?.options?.map((option, index) => (
                        <div
                            key={index}
                            className="flex items-start space-x-3 p-4 rounded-lg border-1 border-gray-300 hover:bg-muted transition-colors"
                        >
                            <RadioGroupItem value={option} id={`option-${index}`} className="mt-1" />
                            <Label
                                htmlFor={`option-${index}`}
                                className="text-base leading-relaxed cursor-pointer flex-1 font-medium"
                            >
                                {option}
                            </Label>
                        </div>
                    ))}
                </RadioGroup> */}
            </div>
        </Card>
    )
}
