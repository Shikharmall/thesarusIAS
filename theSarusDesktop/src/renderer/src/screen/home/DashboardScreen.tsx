import { FileText, User } from "lucide-react";
import ChartsPage from "../../components/dashboard/Chart";
import Header from "../../components/common/Header";
import SideBar from "../../components/common/Sidebar";
import { Item } from "@renderer/utils/types/dashboard";

const Dashboard = () => {

    const items: Item[] = [
        {
            id: 1,
            count: 6,
            label: "Total Candidates",
            color: "bg-cyan-500",
            icon: <User className="h-20 w-20 opacity-20 absolute right-4 top-4" />,
        },
        {
            id: 2,
            count: 30,
            label: "Total Staff",
            color: "bg-green-500",
            icon: <User className="h-20 w-20 opacity-20 absolute right-4 top-4" />,
        },
        {
            id: 3,
            count: 8,
            label: "Conducted Tests",
            color: "bg-yellow-400",
            icon: <FileText className="h-20 w-20 opacity-20 absolute right-4 top-4" />,
        },
        {
            id: 4,
            count: 1,
            label: "Today Tests",
            color: "bg-red-500",
            icon: <FileText className="h-20 w-20 opacity-20 absolute right-4 top-4" />,
        },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <main className="flex-1 ml-50 mt-15">
                <Header />

                <div className="p-6 bg-gray-100 flex items-center justify-center">
                    <div className="grid grid-cols-4 gap-6 w-full">
                        {items?.map((item) => (
                            <div
                                key={item?.id}
                                className={`${item?.color} relative text-white rounded-lg shadow-md overflow-hidden`}
                            >
                                <div className="p-4">
                                    <div className="text-3xl font-bold">{item?.count}</div>
                                    <div className="text-sm font-medium">{item?.label}</div>
                                </div>
                                {/* Icon in background */}
                                {item?.icon}
                                {/* Footer button */}
                                <div className="bg-black/20 px-4 py-2 text-sm font-medium flex justify-between items-center cursor-pointer">
                                    <span>More info</span>
                                    <span>➔</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <ChartsPage />
            </main>
        </div>
    );
};

export default Dashboard;
