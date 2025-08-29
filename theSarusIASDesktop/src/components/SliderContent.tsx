import React, { useState } from 'react';
import {
    Apple,
    Smartphone,
    Monitor,
    AppWindow,
    Video,
    Phone,
    X,
    Mail,
    MapPin,
    Clock,
    ChevronLeft,
    ChevronRight,
    Calendar,
    Users,
    BookOpen,
    Award,
} from "lucide-react";
import { Link } from 'react-router-dom';
import type { ProgrammeItem } from '../utils/type';

export default function SliderContent() {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const programmes = [
        {
            id: 1,
            title: "UPSC CSE Foundation Course 2025",
            description:
                "Comprehensive foundation course for UPSC Civil Services Examination with expert faculty and structured curriculum.",
            duration: "12 Months",
            students: "2,500+",
            subjects: "All Subjects",
            price: "₹45,000",
            image: "/placeholder-apfpk.png",
            features: [
                "Live Classes",
                "Test Series",
                "Study Material",
                "Doubt Clearing",
            ],
        },
        {
            id: 2,
            title: "State PCS Comprehensive Program",
            description:
                "Complete preparation program for State Public Service Commission examinations across all states.",
            duration: "10 Months",
            students: "1,800+",
            subjects: "State Specific",
            price: "₹35,000",
            image: "/indian-government-building.png",
            features: [
                "State-wise Syllabus",
                "Mock Tests",
                "Current Affairs",
                "Interview Prep",
            ],
        },
        {
            id: 3,
            title: "Prelims Test Series 2025",
            description:
                "Intensive test series designed to crack UPSC Prelims with detailed analysis and performance tracking.",
            duration: "6 Months",
            students: "5,000+",
            subjects: "GS & CSAT",
            price: "₹15,000",
            image: "/placeholder-v4ppg.png",
            features: [
                "50+ Tests",
                "All India Ranking",
                "Detailed Solutions",
                "Performance Analytics",
            ],
        },
        {
            id: 4,
            title: "Mains Answer Writing Program",
            description:
                "Specialized program to master answer writing skills for UPSC Mains examination with expert evaluation.",
            duration: "8 Months",
            students: "3,200+",
            subjects: "All GS Papers",
            price: "₹25,000",
            image: "/writing-pen-notebook-essays.png",
            features: [
                "Daily Practice",
                "Expert Evaluation",
                "Model Answers",
                "Writing Techniques",
            ],
        },
        {
            id: 5,
            title: "Current Affairs Mastery Course",
            description:
                "Stay updated with comprehensive current affairs coverage for all competitive examinations.",
            duration: "12 Months",
            students: "8,000+",
            subjects: "Current Affairs",
            price: "₹12,000",
            image: "/newspaper-digital-news.png",
            features: [
                "Daily Updates",
                "Monthly Magazines",
                "Video Analysis",
                "MCQ Practice",
            ],
        },
    ];

    const items: ProgrammeItem[] = [
        { id: 1, name: "News & Editorials", nameHindi: "समाचार", url: "" },
        { id: 2, name: "The SARUS Media", nameHindi: "द सारस मीडिया", url: "" },
        { id: 3, name: "Optional Subjects", nameHindi: "वैकल्पिक विषय", url: "" },
        { id: 4, name: "Classroom Prog.", nameHindi: "कक्षा कार्यक्रम", url: "" },
        { id: 5, name: "Prelims Test Series", nameHindi: "मुख्य परीक्षा श्रृंखला", url: "/instructionPage" },
        { id: 6, name: "Daily MCQs", nameHindi: "दैनिक बहुविकल्पीय प्रश्न", url: "" },
    ];

    const nextSlide = (): void => {
        setCurrentSlide((prev) => (prev + 1) % programmes.length);
    };

    const prevSlide = (): void => {
        setCurrentSlide(
            (prev) => (prev - 1 + programmes.length) % programmes.length
        );
    };

    return (
        <div className="bg-white rounded-2xl p-8 w-full max-w-6xl shadow-2xl">

            {/* <div className="overflow-hidden rounded-2xl">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {programmes.map((programme) => (
                        <div key={programme.id} className="w-full flex-shrink-0">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">

                                <div className="relative">
                                    <img
                                        src={programme.image || "/placeholder.svg"}
                                        alt={programme.title}
                                        className="w-full h-80 object-cover rounded-2xl shadow-lg"
                                    />
                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                                        {programme.price}
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-3xl font-bold text-gray-800 mb-4">
                                            {programme.title}
                                        </h4>
                                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                            {programme.description}
                                        </p>

                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl border border-cyan-200">
                                                <Calendar className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                                                <div className="font-bold text-gray-800">
                                                    {programme.duration}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    Duration
                                                </div>
                                            </div>
                                            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                                                <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                                                <div className="font-bold text-gray-800">
                                                    {programme.students}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    Students
                                                </div>
                                            </div>
                                            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                                                <Award className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                                                <div className="font-bold text-gray-800">
                                                    {programme.subjects}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    Coverage
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h5 className="font-bold text-gray-800 mb-3">
                                                Key Features:
                                            </h5>
                                            <div className="grid grid-cols-2 gap-2">
                                                {programme.features.map((feature, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-2"
                                                    >
                                                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full"></div>
                                                        <span className="text-gray-700 text-sm">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                                            Enroll Now
                                        </button>
                                        <button className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-gray-300">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* English Section */}
                <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-6">
                        {/* <span className="text-white font-bold text-2xl">d</span> */}
                        <img src="../../images/thesaruslogo.jpg" className='border-1 border-gray-300 rounded' />
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {
                            items?.map((item) => (
                                <Link to={item?.url} className="bg-cyan-400 hover:bg-cyan-500 text-white py-3 px-4 rounded-lg font-semibold text-sm cursor-pointer" key={item?.id}>
                                    {item?.name}
                                </Link>
                            ))
                        }
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-lg font-bold text-xs">
                        VISIT ENGLISH WEBSITE
                    </button>
                </div>

                {/* Hindi Section */}
                <div className="text-center">
                    <div className="w-16 h-16 bg-white border-0 border-red-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                        {/* <span className="text-red-600 font-bold text-lg">दृष्टि</span> */}
                        <img src="../../images/thesaruslogo.jpg" className='border-1 border-gray-300 rounded' />
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {
                            items?.map((item) => (
                                <button className="bg-cyan-400 hover:bg-cyan-500 text-white py-3 px-4 rounded-lg font-semibold text-sm cursor-pointer" key={item?.id}>
                                    {item?.nameHindi}
                                </button>
                            ))
                        }
                    </div>

                    <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-lg font-bold text-xs">
                        हिंदी वेबसाइट पर जाएँ
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center gap-2">
                <button
                    onClick={prevSlide}
                    className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={nextSlide}
                    className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}
