import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export function CreateExamDialog() {
    const [open, setOpen] = useState(false)
    const { toast } = useToast()
    const [form, setForm] = useState({
        title: "",
        subject: "Mathematics",
        datetime: "",
        duration: 60,
        totalMarks: 100,
        mode: "Online",
    })

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        console.log("[v0] Creating exam:", form)
        toast({ title: "Exam created", description: `${form.title} scheduled (${form.mode})` })
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Create Exam</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Create new exam</DialogTitle>
                    <DialogDescription>Configure exam basics. You can edit details later.</DialogDescription>
                </DialogHeader>

                <form onSubmit={onSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            placeholder="Midterm Assessment"
                            value={form.title}
                            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                            required
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label>Subject</Label>
                        <Select value={form.subject} onValueChange={(v) => setForm((f) => ({ ...f, subject: v }))}>
                            <SelectTrigger>
                                <SelectValue placeholder="Choose subject" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Mathematics">Mathematics</SelectItem>
                                <SelectItem value="Science">Science</SelectItem>
                                <SelectItem value="English">English</SelectItem>
                                <SelectItem value="History">History</SelectItem>
                                <SelectItem value="Computer Science">Computer Science</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="datetime">Date & Time</Label>
                        <Input
                            id="datetime"
                            type="datetime-local"
                            value={form.datetime}
                            onChange={(e) => setForm((f) => ({ ...f, datetime: e.target.value }))}
                            required
                        />
                    </div>

                    <div className="grid gap-2 md:grid-cols-2">
                        <div className="grid gap-2">
                            <Label htmlFor="duration">Duration (minutes)</Label>
                            <Input
                                id="duration"
                                type="number"
                                min={10}
                                max={300}
                                value={form.duration}
                                onChange={(e) => setForm((f) => ({ ...f, duration: Number(e.target.value) }))}
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="totalMarks">Total Marks</Label>
                            <Input
                                id="totalMarks"
                                type="number"
                                min={10}
                                max={500}
                                value={form.totalMarks}
                                onChange={(e) => setForm((f) => ({ ...f, totalMarks: Number(e.target.value) }))}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label>Mode</Label>
                        <Select value={form.mode} onValueChange={(v) => setForm((f) => ({ ...f, mode: v }))}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select mode" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Online">Online</SelectItem>
                                <SelectItem value="Offline">Offline</SelectItem>
                                <SelectItem value="Hybrid">Hybrid</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="submit">Save Exam</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
