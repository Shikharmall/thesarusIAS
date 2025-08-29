import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { PerformanceChart } from "@/components/dashboard/performance-chart"
import { SubjectDistribution } from "@/components/dashboard/subject-distribution"
import { ExamsTable } from "@/components/dashboard/exams-table"
import { RecentActivity } from "@/components/dashboard/recent-activity"

export default function HomeScreen() {
    return (
        <main className="min-h-svh bg-background">
            <div className="mx-auto flex w-full max-w-7xl flex-col md:flex-row">
                <aside className="md:w-64 md:border-r">
                    <Sidebar />
                </aside>

                <section className="flex-1">
                    <Header />

                    <div className="px-4 pb-6 md:px-6">
                        <div className="mt-4">
                            <StatsCards />
                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <PerformanceChart />
                            <SubjectDistribution />
                        </div>

                        <div className="mt-6">
                            <ExamsTable />
                        </div>

                        <div className="mt-6">
                            <RecentActivity />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
