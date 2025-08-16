import { useState } from "react"
import { Card } from "./ui/Card"
import { RadioGroup, RadioGroupItem } from "./ui/RadioGroup"
import { Label } from "./ui/Label"
import { MCQQuestionProps } from "../utils/type"

export function MCQQuestion({ question, onAnswerChange }: MCQQuestionProps) {
    const [selectedValue, setSelectedValue] = useState(question.selectedAnswer || "")

    const handleValueChange = (value: string) => {
        setSelectedValue(value)
        onAnswerChange(value)
    }

    return (
        <Card className="p-6 bg-[#fefce8] border-1 border-gray-300">
            <div className="space-y-6">
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-card-foreground">Q.{question.id}</span>
                        {question.section && (
                            <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">{question.section}</span>
                        )}
                    </div>
                    <p className="text-card-foreground leading-relaxed text-base">{question.text}</p>
                </div>

                <RadioGroup name={'hwllo'} value={selectedValue} onValueChange={handleValueChange} className="space-y-4">
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
                </RadioGroup>
            </div>
        </Card>
    )
}
