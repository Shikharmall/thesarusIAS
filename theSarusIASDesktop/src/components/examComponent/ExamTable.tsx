import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Exam = {
  id: string
  title: string
  subject: string
  date: string
  duration: number
  status: "Published" | "Upcoming" | "Draft"
}

const initialExams: Exam[] = [
  {
    id: "E-1024",
    title: "Algebra Midterm",
    subject: "Mathematics",
    date: "2025-09-15 09:00",
    duration: 90,
    status: "Published",
  },
  {
    id: "E-1025",
    title: "Physics Quiz 2",
    subject: "Science",
    date: "2025-09-20 10:00",
    duration: 45,
    status: "Upcoming",
  },
  { id: "E-1026", title: "Essay: Poetry", subject: "English", date: "2025-09-22 11:30", duration: 60, status: "Draft" },
  {
    id: "E-1027",
    title: "World War II",
    subject: "History",
    date: "2025-09-25 13:00",
    duration: 60,
    status: "Upcoming",
  },
  {
    id: "E-1028",
    title: "Data Structures",
    subject: "Computer Science",
    date: "2025-09-28 09:00",
    duration: 120,
    status: "Published",
  },
]

const subjects = ["All", "Mathematics", "Science", "English", "History", "Computer Science"] as const
const statuses = ["All", "Published", "Upcoming", "Draft"] as const

export function ExamsTable() {
  const [query, setQuery] = useState("")
  const [subject, setSubject] = useState<(typeof subjects)[number]>("All")
  const [status, setStatus] = useState<(typeof statuses)[number]>("All")
  const [exams, setExams] = useState<Exam[]>(initialExams)

  const filtered = useMemo(() => {
    return exams.filter((e) => {
      const matchesQuery =
        query.length === 0 ||
        e.title.toLowerCase().includes(query.toLowerCase()) ||
        e.id.toLowerCase().includes(query.toLowerCase())
      const matchesSubject = subject === "All" || e.subject === subject
      const matchesStatus = status === "All" || e.status === status
      return matchesQuery && matchesSubject && matchesStatus
    })
  }, [exams, query, subject, status])

  function togglePublish(id: string) {
    setExams((prev) =>
      prev.map((e) =>
        e.id === id
          ? {
              ...e,
              status: e.status === "Published" ? "Draft" : "Published",
            }
          : e,
      ),
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <CardTitle className="text-sm md:text-base">Exams</CardTitle>
        <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row md:items-center">
          <Input
            placeholder="Search by title or ID"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="md:w-64"
            aria-label="Search exams"
          />
          <div className="flex gap-2">
            <Select value={subject} onValueChange={(v) => setSubject(v as any)}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={status} onValueChange={(v) => setStatus(v as any)}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>

      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="whitespace-nowrap">Exam ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead className="whitespace-nowrap">Date & Time</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((e) => (
              <TableRow key={e.id}>
                <TableCell className="font-mono text-xs">{e.id}</TableCell>
                <TableCell className="font-medium">{e.title}</TableCell>
                <TableCell>{e.subject}</TableCell>
                <TableCell className="whitespace-nowrap">{e.date}</TableCell>
                <TableCell>{e.duration}m</TableCell>
                <TableCell>
                  {e.status === "Published" ? (
                    <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary">Published</Badge>
                  ) : e.status === "Upcoming" ? (
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/10">Upcoming</Badge>
                  ) : (
                    <Badge variant="secondary">Draft</Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => togglePublish(e.id)}
                      className="border-[var(--secondary)] text-[var(--secondary)] hover:bg-secondary/10"
                      aria-label={e.status === "Published" ? "Unpublish exam" : "Publish exam"}
                    >
                      {e.status === "Published" ? "Unpublish" : "Publish"}
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label="More actions">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground">
                  No exams found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
