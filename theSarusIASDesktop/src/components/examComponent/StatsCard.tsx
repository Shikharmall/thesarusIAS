import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, Activity, CalendarDays } from "lucide-react"

const stats = [
  { label: "Total Exams", value: "124", icon: FileText, hint: "+8 this month" },
  { label: "Active Students", value: "2,340", icon: Users, hint: "Real-time" },
  { label: "Average Score", value: "76%", icon: Activity, hint: "Last 30 days" },
  { label: "Upcoming Exams", value: "12", icon: CalendarDays, hint: "Next 14 days" },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ label, value, icon: Icon, hint }) => (
        <Card key={label} className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{label}</CardTitle>
            <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">{hint}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
