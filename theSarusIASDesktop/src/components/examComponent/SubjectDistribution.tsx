import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const subjects = [
  { subject: "Math", exams: 28 },
  { subject: "Science", exams: 22 },
  { subject: "English", exams: 18 },
  { subject: "History", exams: 14 },
  { subject: "CS", exams: 24 },
]

export function SubjectDistribution() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm md:text-base">Exams by Subject</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={subjects} margin={{ left: 4, right: 8, top: 8, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="exams" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
