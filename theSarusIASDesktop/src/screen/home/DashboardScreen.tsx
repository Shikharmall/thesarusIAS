import { FileText, Shield, User } from "lucide-react";
import ChartsPage from "../../components/dashboard/Chart";
import Header from "../../components/dashboard/Header";
import SideBar from "../../components/dashboard/SideBar";
import type { ReactNode } from "react";

interface Item {
    id: number;
    count: number;
    label: string;
    color: string;
    icon: ReactNode;
}

const Dashboard = () => {

    const items: Item[] = [
        {
            id: 1,
            count: 6,
            label: "Students",
            color: "bg-cyan-500",
            icon: <User className="h-20 w-20 opacity-20 absolute right-4 top-4" />,
        },
        {
            id: 2,
            count: 30,
            label: "Tes",
            color: "bg-green-500",
            icon: <FileText className="h-20 w-20 opacity-20 absolute right-4 top-4" />,
        },
        {
            id: 3,
            count: 8,
            label: "Administrator",
            color: "bg-yellow-400",
            icon: <User className="h-20 w-20 opacity-20 absolute right-4 top-4" />,
        },
        {
            id: 4,
            count: 1,
            label: "Super Administrator",
            color: "bg-red-500",
            icon: <Shield className="h-20 w-20 opacity-20 absolute right-4 top-4" />,
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

                <div className="p-8">



                    {/* Exam Status */}
                    <h2 className="text-xl font-bold mb-4">Exam Status</h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        {[
                            {
                                title: "Business Transformation",
                                status: "Completed",
                                color: "text-green-500",
                                image:
                                    "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1",
                            },
                            {
                                title: "Design Principles",
                                status: "65% Done",
                                color: "text-green-400",
                                image:
                                    "https://images.unsplash.com/photo-1557683316-973673baf926",
                            },
                            {
                                title: "Software Engineering",
                                status: "Not started",
                                color: "text-blue-500",
                                image:
                                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
                            },
                        ].map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden"
                            >
                                <img src={card.image} alt={card.title} className="h-40 w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg">{card.title}</h3>
                                    <p className={`${card.color} text-sm font-semibold`}>
                                        {card.status}
                                    </p>
                                    <p className="text-gray-500 text-sm mt-1">By Prof Someone</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Exam Paper Manager + Ongoing Sessions */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Exam Paper Manager */}
                        <div>
                            <h2 className="text-xl font-bold mb-4">Exam paper manager</h2>
                            <div className="flex gap-6 mb-4">
                                <button className="border-b-2 border-purple-600 font-semibold">
                                    Pending
                                </button>
                                <button className="text-gray-500">Reviewed</button>
                                <button className="text-gray-500">Published</button>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">Software process II</h3>
                                        <p className="text-gray-500 text-sm">Final assessment</p>
                                    </div>
                                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                                        Resume
                                    </button>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">Project management mid term I</h3>
                                        <p className="text-gray-500 text-sm">Mid term exam</p>
                                    </div>
                                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                                        Start
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Ongoing Sessions */}
                        <div>
                            <h2 className="text-xl font-bold mb-4">Ongoing sessions</h2>
                            <div className="bg-white p-6 rounded-xl shadow">
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <h3 className="font-semibold">Scaling agile technical practices</h3>
                                        <p className="text-sm text-gray-500">Prof Lee Dan Qi</p>
                                    </div>
                                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
                                        Join
                                    </button>
                                </div>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex justify-between">
                                        <span>✅ Project management basics</span>
                                        <span>03:40 min • Medium</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>✅ Object oriented advanced</span>
                                        <span>06:08 min • Hard</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>✅ Basics of agile II</span>
                                        <span>09:30 min • Medium</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
