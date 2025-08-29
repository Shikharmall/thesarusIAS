import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { BookOpen, FileText, GraduationCap, Settings, Users, BarChart3 } from "lucide-react"
import { useState } from "react"

const items = [
  { label: "Overview", icon: BarChart3 },
  { label: "Exams", icon: FileText, active: true },
  { label: "Students", icon: Users },
  { label: "Results", icon: GraduationCap },
  { label: "Question Bank", icon: BookOpen },
  { label: "Settings", icon: Settings },
]

export function Sidebar() {
  const [active, setActive] = useState("Exams")
  return (
    <nav className="p-4 md:p-6 bg-sidebar">
      <div className="mb-4">
        <h1 className="text-lg font-semibold text-pretty text-sidebar-foreground">Exam Admin</h1>
        <p className="text-sm text-muted-foreground">Manage assessments and performance</p>
      </div>
      <Separator />
      <ul className="mt-4 space-y-1" aria-label="Primary">
        {items.map(({ label, icon: Icon }) => {
          const isActive = active === label
          return (
            <li key={label}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-2",
                  isActive
                    ? "bg-[var(--sidebar-accent)] text-[var(--sidebar-accent-foreground)] hover:bg-[var(--sidebar-accent)]"
                    : "text-sidebar-foreground hover:bg-[var(--sidebar-primary)]",
                )}
                onClick={() => setActive(label)}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{label}</span>
              </Button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
