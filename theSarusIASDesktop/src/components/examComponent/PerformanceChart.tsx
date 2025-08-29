import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", avg: 72 },
  { month: "Feb", avg: 74 },
  { month: "Mar", avg: 70 },
  { month: "Apr", avg: 78 },
  { month: "May", avg: 75 },
  { month: "Jun", avg: 80 },
  { month: "Jul", avg: 82 },
  { month: "Aug", avg: 79 },
  { month: "Sep", avg: 81 },
  { month: "Oct", avg: 83 },
  { month: "Nov", avg: 85 },
  { month: "Dec", avg: 84 },
]

export function PerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm md:text-base">Average Score (12 months)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ left: 4, right: 8, top: 8, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[60, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="avg" stroke="var(--chart-1)" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
