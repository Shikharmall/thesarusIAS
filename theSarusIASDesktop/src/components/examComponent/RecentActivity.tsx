import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Megaphone, UploadCloud, Users } from "lucide-react"

const items = [
  { icon: UploadCloud, title: "Results Published", desc: "Physics Quiz 2 results were published.", time: "2h ago" },
  { icon: Users, title: "New Students", desc: "54 students were added to Grade 10.", time: "6h ago" },
  { icon: CheckCircle2, title: "Exam Completed", desc: "Algebra Midterm completed successfully.", time: "1d ago" },
  { icon: Megaphone, title: "Announcement", desc: "Essay: Poetry instructions updated.", time: "2d ago" },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm md:text-base">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {items.map(({ icon: Icon, title, desc, time }) => (
            <li key={title} className="flex items-start gap-3">
              <div className="mt-0.5 rounded-md bg-muted p-2">
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{title}</p>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{time}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
