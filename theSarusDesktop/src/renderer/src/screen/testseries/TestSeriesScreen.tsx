import React, { useState } from "react";
import SideBar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";
import SubHeader from "../../components/common/SubHeader";
import { useNavigate } from "react-router-dom";
import {
    CheckCircle,
    LaptopMinimalCheckIcon,
    LaptopMinimalIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { CardProps, Tab } from "../../utils/types/testseries";
import { themeColor } from "../../utils/constant/Color";

const cards: CardProps[] = [
    {
        id: 1,
        image:
            "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png",
        examName: "Union Public Service Commission",
        title: "General Studies I",
        description: "New BlackMonk with UI updates + enhanced features.",
        time: "FEW SECONDS",
    },
    {
        id: 2,
        image:
            "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png",
        examName: "Union Public Service Commission",
        title: "General Studies II",
        description: "New BlackMonk with UI updates + enhanced features.",
        time: "FEW SECONDS",
    },
    {
        id: 3,
        image:
            "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756099014/uppcs_ybcobx.png",
        examName: "Uttar Pradesh Public Service Commission",
        title: "General Studies I",
        description: "Easy Apple Pay integration for businesses built on Stripe.",
        time: "A MINUTE",
    },
    {
        id: 4,
        image:
            "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756099014/uppcs_ybcobx.png",
        examName: "Uttar Pradesh Public Service Commission",
        title: "General Studies II",
        description: "Easy Apple Pay integration for businesses built on Stripe.",
        time: "A MINUTE",
    },
    {
        id: 5,
        image:
            "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/ssccgl_rknj1o.png",
        examName: "Staff Selection Commission",
        title: "Combined Graduate Level",
        description: "New template that exclusively built for local search.",
        time: "FEW SECONDS",
    },
    {
        id: 6,
        image:
            "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/sscchsl_fwfdka.png",
        examName: "Staff Selection Commission",
        title: "Combined High School Level",
        description:
            "Web Components usher in a new era of web development based on encapsulated and interoperable custom.",
        time: "7 MINUTES",
    },
    {
        id: 7,
        image:
            "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/sscmts_j31n5a.png",
        examName: "Staff Selection Commission",
        title: "MTS",
        description: "UI update + Reengineered almost everything from the ground up.",
        time: "2 DAYS",
    },
    {
        id: 8,
        image:
            "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756031617/railwayblue_tjaeud.jpg",
        examName: "Railway",
        title: "Non Technical Popular Categories",
        description: "Stripe + Amex Express Checkout",
        time: "A WEEK",
    },
];

// Reusable Exam Card with animation
const ExamCard: React.FC<CardProps & { isAttended?: boolean }> = ({
    id,
    image,
    examName,
    isAttended,
}) => {
    const navigate = useNavigate();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md mx-auto bg-white shadow-lg rounded-sm p-5 border-l-4"
            style={{ borderColor: themeColor.primary }}
        >
            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-lg font-semibold">{examName}</h2>
                    <p className="text-sm text-gray-500">Mock Test - 22</p>
                </div>
                <img src={image} alt={examName} className="w-20 rounded-10" />
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

            {/* Footer */}
            <div className="mt-5 flex justify-between items-center">
                {isAttended ? (
                    <>
                        <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                        <button
                            onClick={() => navigate(`/examResult`)}
                            className="px-4 py-2 text-sm text-white rounded-lg cursor-pointer"
                            style={{ backgroundColor: themeColor.primary }}
                        >
                            Check Result
                        </button>
                    </>
                ) : (
                    <>
                        <div>
                            <p className="text-orange-600 text-sm font-medium">
                                Checkin Time:
                            </p>
                            <p className="font-semibold">10:00 AM</p>
                        </div>
                        <button
                            onClick={() => navigate(`/instructionPage/${id}`)}
                            className="px-4 py-2 text-sm text-white rounded-lg cursor-pointer"
                            style={{ backgroundColor: themeColor.primary }}
                        >
                            Start
                        </button>
                    </>
                )}
            </div>
        </motion.div>
    );
};

const TestSeriesScreen: React.FC = () => {
    const [activeTab, setActiveTab] = useState("schedule");

    const tabs: Tab[] = [
        {
            id: "schedule",
            label: "Upcoming Test",
            icon: LaptopMinimalIcon,
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
                    {cards.map((card) => (
                        <ExamCard key={card.id} {...card} />
                    ))}
                </div>
            ),
        },
        {
            id: "attended",
            label: "Attended Test",
            icon: LaptopMinimalCheckIcon,
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
                    {cards.map((card) => (
                        <ExamCard key={card.id} {...card} isAttended />
                    ))}
                </div>
            ),
        },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50 p-6">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <main className="flex-1 ml-50 mt-15">
                <Header />
                <SubHeader
                    title="Test Series"
                    isBack={false}
                    isAdd={false}
                    route="/addCourse"
                    tooltip="Add Exam"
                />

                {/* Tabs */}
                <div
                    className="flex border-b border-gray-200 overflow-x-auto bg-gray-50 rounded-t-lg"
                    role="tablist"
                >
                    {tabs.map(({ id, label, icon: Icon }) => {
                        const isActive = activeTab === id;
                        return (
                            <button
                                key={id}
                                onClick={() => setActiveTab(id)}
                                role="tab"
                                aria-selected={isActive}
                                className={`relative flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors duration-200 cursor-pointer ${isActive
                                    ? "text-blue-600 bg-white"
                                    : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                <Icon size={18} />
                                {label}
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

                {/* Tab Content with animation */}
                <div className="p-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3 }}
                        >
                            {tabs.find((tab) => tab.id === activeTab)?.content}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
};

export default TestSeriesScreen;
