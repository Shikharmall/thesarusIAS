import React, { useState } from "react";
import SideBar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";
import SubHeader from "../../components/common/SubHeader";
import { useNavigate } from "react-router-dom";
import { LaptopMinimalCheckIcon, LaptopMinimalIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { CardProps, Tab } from "../../utils/types/testseries";
import { themeColor } from "../../utils/constant/Color";

const cards: CardProps[] = [
    {
        id: 1,
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png", // replace with icon
        examName: "Union Public Service Commission",
        title: "General Studies I",
        description: "New BlackMonk with UI updates + enhanced features.",
        time: "FEW SECONDS",
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png", // replace with icon
        examName: "Union Public Service Commission",
        title: "General Studies II",
        description: "New BlackMonk with UI updates + enhanced features.",
        time: "FEW SECONDS",
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756099014/uppcs_ybcobx.png",
        examName: "Uttar Pradesh Public Service Commission",
        title: "General Studies I",
        description: "Easy Apple Pay integration for businesses built on Stripe.",
        time: "A MINUTE",
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756099014/uppcs_ybcobx.png",
        examName: "Uttar Pradesh Public Service Commission",
        title: "General Studies II",
        description: "Easy Apple Pay integration for businesses built on Stripe.",
        time: "A MINUTE",
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/ssccgl_rknj1o.png",
        examName: "Staff Selection Commission",
        title: "Combined Graduate Level",
        description: "New template that exclusively built for local search.",
        time: "FEW SECONDS",
    },
    {
        id: 6,
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/sscchsl_fwfdka.png",
        examName: "Staff Selection Commission",
        title: "Combined High School Level",
        description:
            "Web Components usher in a new era of web development based on encapsulated and interoperable custom.",
        time: "7 MINUTES",
    },
    {
        id: 7,
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/sscmts_j31n5a.png",
        examName: "Staff Selection Commission",
        title: "MTS",
        description: "UI update + Reengineered almost everything from the ground up.",
        time: "2 DAYS",
    },
    {
        id: 8,
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756031617/railwayblue_tjaeud.jpg",
        examName: "Railway",
        title: "Non Technical Popular Categories",
        description: "Stripe + Amex Express Checkout",
        time: "A WEEK",
    },
];

// const Card: React.FC<CardProps> = ({ id, image, examName, title, description, time }) => {
const Card: React.FC<CardProps> = ({ id, image, examName }) => {
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-sm p-5 border-l-4"
            style={{
                borderColor: themeColor?.primary
            }}
        >
            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-lg font-semibold">{examName}</h2>
                    <p className="text-sm text-gray-500">Mock Test - 22</p>
                </div>
                <div className="flex space-x-2 text-gray-500">
                    <img src={image} alt={examName} className="w-20 rounded-10" />
                </div>
            </div>

            {/* Tag */}
            <span className="inline-block mt-3 px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                Online exam
            </span>

            {/* Exam Details */}
            <div className="grid grid-cols-3 gap-3 mt-4 text-sm">
                <div>
                    <p className="text-gray-500">Date</p>
                    <p className="font-medium text-sm">25-03-2026</p>
                </div>
                <div>
                    <p className="text-gray-500">Duration</p>
                    <p className="font-medium">120 min</p>
                </div>
                <div>
                    <p className="text-gray-500">Marks</p>
                    <p className="font-medium">100</p>
                </div>
            </div>

            {/* Checkin + Buttons */}
            <div className="mt-5 flex justify-between items-center">
                <div>
                    <p className="text-orange-600 text-sm font-medium">Checkin Time:</p>
                    <p className="font-semibold">10:00 AM</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => navigate(`/instructionPage/${id}`)}
                        className="px-4 py-2 text-sm text-white text-bold cursor-pointer rounded-lg"
                        style={{
                            backgroundColor: themeColor?.primary
                        }}
                    >
                        Start
                    </button>
                </div>
            </div>
        </div>
    );
};

// const CardAttended: React.FC<CardProps> = ({ id, image, examName, title, description, time }) => {
const CardAttended: React.FC<CardProps> = ({ id, image, examName }) => {
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-sm p-5 border-l-4"
            style={{
                borderColor: themeColor?.primary
            }}
        >
            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-lg font-semibold">{examName}</h2>
                    <p className="text-sm text-gray-500">Mock Test - 22</p>
                </div>
                <div className="flex space-x-2 text-gray-500">
                    <img src={image} alt={examName} className="w-20 rounded-10" />
                </div>
            </div>

            {/* Tag */}
            <span className="inline-block mt-3 px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                Online exam
            </span>

            {/* Exam Details */}
            <div className="grid grid-cols-3 gap-3 mt-4 text-sm">
                <div>
                    <p className="text-gray-500">Date</p>
                    <p className="font-medium text-sm">25-03-2026</p>
                </div>
                <div>
                    <p className="text-gray-500">Duration</p>
                    <p className="font-medium">120 min</p>
                </div>
                <div>
                    <p className="text-gray-500">Marks</p>
                    <p className="font-medium">100</p>
                </div>
            </div>

            {/* Checkin + Buttons */}
            <div className="mt-5 flex justify-between items-center">
                <div className="flex gap-2">
                    <button
                        onClick={() => navigate(`/exam/${id}`)}
                        className="px-4 py-2 text-sm text-white cursor-pointer rounded-lg"
                        style={{
                            backgroundColor: 'green'
                        }}
                    >
                        Attended
                    </button>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => navigate(`/exam/${id}`)}
                        className="px-4 py-2 text-sm text-white cursor-pointer rounded-lg"
                        style={{
                            backgroundColor: themeColor?.primary
                        }}
                    >
                        Check Result
                    </button>
                </div>
            </div>
        </div>
    );
};

const TestSeriesScreen: React.FC = () => {

    const tabs: Tab[] = [
        {
            id: "schedule",
            label: "Upcoming Test",
            icon: LaptopMinimalIcon,
            content: (
                <div className="min-h-screen bg-gray-50 py-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cards?.map((card, index) => (
                            <Card key={index} {...card} />
                        ))}
                    </div>
                </div>
            ),
        },
        {
            id: "features",
            label: "Attended test",
            icon: LaptopMinimalCheckIcon,
            content: (
                <div className="min-h-screen bg-gray-50 py-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cards?.map((card, index) => (
                            <CardAttended key={index} {...card} />
                        ))}
                    </div>
                </div>
            ),
        }
    ];

    const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

    return (
        <div className="flex min-h-screen bg-gray-50 p-6">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <main className="flex-1 ml-50 mt-15">
                <Header />

                <SubHeader title="Test Series" isBack={false} isAdd={false} route={'/addCourse'} tooltip="Add Exam" />

                {/* Tab Headers */}
                <div
                    className="flex border-b border-gray-200 overflow-x-auto bg-gray-50 rounded-t-lg"
                    role="tablist"
                >
                    {tabs?.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                role="tab"
                                aria-selected={isActive}
                                className={`cursor-pointer relative flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors duration-200 
          ${isActive ? "text-blue-600 bg-white" : "text-gray-500 hover:text-gray-700"}
        `}
                            >
                                <Icon size={18} />
                                {tab.label}

                                {isActive && (
                                    <motion.div
                                        layoutId="active-tab-underline"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className="p-6">
                    {tabs.find((tab) => tab.id === activeTab)?.content}
                </div>

                {/* <div className="min-h-screen bg-gray-50 py-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cards.map((card, index) => (
                            <Card key={index} {...card} />
                        ))}
                    </div>
                </div> */}

            </main>
        </div>
    );
};

export default TestSeriesScreen;
