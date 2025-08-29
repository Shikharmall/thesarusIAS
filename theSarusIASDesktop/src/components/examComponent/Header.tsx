import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { CreateExamDialog } from "@/components/dashboard/create-exam-dialog"
import { Search } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <div className="min-w-0">
          <h2 className="text-balance text-xl font-semibold">Examination Dashboard</h2>
          <p className="text-sm text-muted-foreground">Monitor exams, performance, and activity</p>
        </div>

        <div className="ml-4 flex items-center gap-2 md:gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <div className="relative">
              <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search exams, students..."
                className="pl-8 w-56"
                aria-label="Search exams and students"
              />
            </div>
            <CreateExamDialog />
          </div>

          <Button size="sm" className="md:hidden">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>

          <Avatar>
            <AvatarFallback aria-label="User avatar">EA</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
