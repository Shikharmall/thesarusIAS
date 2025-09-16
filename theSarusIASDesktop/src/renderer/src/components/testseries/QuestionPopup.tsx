import { Button } from "../common/Button"
import { Card, CardContent } from "../common/Card"
import { X, FileText } from "lucide-react"
import { themeColor } from "../../utils/constant/Color"
import type { QuestionPaperPopupProps } from "../../utils/types/testseries"

export function QuestionPaperPopup({ isOpen, onClose, sections }: QuestionPaperPopupProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl rounded-xl">

                {/* Header */}
                <div className="bg-indigo-600 text-white px-4 py-2 sticky top-0 z-50" style={{
                    backgroundColor: themeColor?.primary
                }}>
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-bold flex items-center gap-2">
                            <FileText className="h-5 w-5" />
                            Question Paper
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onClose}
                            className="text-white hover:bg-indigo-700 rounded-full"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Content */}
                <CardContent className="p-6 space-y-8">
                    {sections?.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="space-y-4">
                            <h2 className="text-lg font-semibold text-indigo-600 border-b pb-1" style={{ color: themeColor?.primary }}>
                                {section?.name}
                            </h2>
                            <ol className="space-y-6">
                                {section?.questions?.map((q, qIndex) => (
                                    <li key={q?.id} className="space-y-2">
                                        {/* Question */}
                                        <p className="font-medium text-gray-800">
                                            {qIndex + 1}
                                        </p>
                                        <div
                                            className="text-card-foreground leading-relaxed text-base"
                                            dangerouslySetInnerHTML={{ __html: q?.question }}
                                        />

                                        {/* Options */}
                                        <ul className="grid gap-2 ml-4 text-sm">
                                            {q?.options?.map((option, optIndex) => (
                                                <li
                                                    key={optIndex}
                                                    className="flex items-start gap-2 text-gray-700"
                                                >
                                                    <span className="font-semibold">
                                                        {String.fromCharCode(65 + optIndex)}.
                                                    </span>
                                                    <span>{option?.label}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}
