import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"

export default function InstructionsPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-primary mb-2">Staff Selection Commission</h1>
          <h2 className="text-xl font-semibold text-foreground mb-1">Combined Graduate Level Examination (Tier-I)</h2>
          <p className="text-muted-foreground">Computer Based Examination</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl text-primary">General Instructions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. Examination Details:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Total Questions: 100 (25 questions from each section)</li>
                <li>Total Time: 60 minutes</li>
                <li>Maximum Marks: 200 (2 marks for each correct answer)</li>
                <li>Negative Marking: 0.50 marks deducted for each wrong answer</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. Sections:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>General Intelligence & Reasoning (Questions 1-25)</li>
                <li>General Awareness (Questions 26-50)</li>
                <li>Quantitative Aptitude (Questions 51-75)</li>
                <li>English Comprehension (Questions 76-100)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. Navigation Instructions:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Use "Next" and "Previous" buttons to navigate between questions</li>
                <li>Click on question numbers in the sidebar to jump to specific questions</li>
                <li>Use "Flag for Review" to mark questions for later review</li>
                <li>Use "Clear Response" to remove your selected answer</li>
                <li>
                  Questions are color-coded: Green (Answered), Orange (Flagged), Red (Current), Gray (Not Visited)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">4. Important Guidelines:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Read each question carefully before selecting your answer</li>
                <li>Only one option can be selected for each question</li>
                <li>You can change your answer any time before final submission</li>
                <li>The timer will show remaining time and will auto-submit when time expires</li>
                <li>Ensure stable internet connection throughout the examination</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">5. Final Submission:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Click "Submit Exam" button to submit your responses</li>
                <li>Review your answers before final submission</li>
                <li>Once submitted, you cannot make any changes</li>
                <li>The system will automatically submit when time expires</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Technical Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Supported browsers: Chrome, Firefox, Safari, Edge (latest versions)</li>
              <li>Stable internet connection required</li>
              <li>JavaScript must be enabled</li>
              <li>Screen resolution: Minimum 1024x768</li>
              <li>Disable pop-up blockers</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex gap-4 justify-center">
          <Link to="/terms">
            <Button variant="outline">Read Terms & Conditions</Button>
          </Link>
          <Link to="/exam">
            <Button>Start Examination</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
