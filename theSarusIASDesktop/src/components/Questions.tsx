import { useState } from "react"
import { Card } from "../components/ui/Card"
import { Button } from "../components/ui/Button"
import { Play, Save } from "lucide-react"

interface CodingQuestionProps {
  question: {
    id: number
    title: string
    description: string
    constraints: string[]
    examples: { input: string; output: string }[]
    code?: string
  }
  onCodeChange: (code: string) => void
}

export function CodingQuestion({ question, onCodeChange }: CodingQuestionProps) {
  const [code, setCode] = useState(question.code || "// Write your solution here\n")

  const handleCodeChange = (value: string) => {
    setCode(value)
    onCodeChange(value)
  }

  return (
    <Card className="p-6 bg-card border-border">
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-card-foreground font-serif">{question?.title}</h3>

          <div className="prose prose-sm max-w-none">
            <p className="text-card-foreground leading-relaxed">{question?.description}</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-card-foreground">Examples:</h4>
            {question.examples.map((example, index) => (
              <div key={index} className="bg-muted p-3 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Input:</span>
                    <pre className="mt-1 font-mono">{example.input}</pre>
                  </div>
                  <div>
                    <span className="font-medium">Output:</span>
                    <pre className="mt-1 font-mono">{example.output}</pre>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-card-foreground">Constraints:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {question.constraints.map((constraint, index) => (
                <li key={index}>{constraint}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-card-foreground">Your Solution:</h4>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Play className="h-4 w-4 mr-2" />
                Run Code
              </Button>
              <Button variant="outline" size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          <textarea className="min-h-[300px] font-mono text-sm bg-input border-border"
            placeholder="Write your solution here..."
            value={code}
            onChange={(e) => handleCodeChange(e.target.value)}
          ></textarea>

          {/* <Textarea
            value={code}
            onChange={(e) => handleCodeChange(e.target.value)}
            className="min-h-[300px] font-mono text-sm bg-input border-border"
            placeholder="Write your solution here..."
          /> */}
        </div>
      </div>
    </Card>
  )
}
