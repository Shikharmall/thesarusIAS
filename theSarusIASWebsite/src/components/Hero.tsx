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
import { themeColor } from "../utils/Color"
import Navbar from "./Navbar"
import { useState } from "react";
import SliderContent from "./SliderContent";
import ChatBot from "./ChatBot";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <div className={`min-h-screen bg-gradient-to-br from-[${themeColor?.primary}] via-cyan-500 to-[${themeColor?.secondary}] relative overflow-hidden`}>
            {/* <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-cyan-500 to-teal-500 relative overflow-hidden"> */}

            {/* Background Pattern */}
            {/* <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-2 border-white"></div>
                <div className="absolute top-40 right-20 w-24 h-24 rounded-full border border-white"></div>
                <div className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full border border-white"></div>
                <div className="absolute bottom-20 right-1/3 w-20 h-20 rounded-full border-2 border-white"></div>
            </div> */}

            {/* Background Image */}
            <div
                className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/images/education-bg-49BM1lAov44nNdvS60jymyZAGPjHnd.png')",
                }}
            ></div>

            {/* Navbar */}
            <Navbar />

            {/* Hero Content */}
            <main className="relative z-10 flex flex-col items-center justify-center px-6 py-16">

                <div className="text-center mb-12">
                    <h1 className="text-6xl md:text-5xl font-bold text-white mb-4">Think IAS Think Drishti</h1>
                    <p className="text-2xl text-white/90 font-light">Think - Connect - Express</p>
                </div>

                {/* App Download buttons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full max-w-4xl">
                    <button onClick={() => navigate('/download/IOS')} className="bg-slate-800 hover:bg-slate-900 text-white py-6 px-6 rounded-lg flex items-center gap-3 text-xs font-semibold cursor-pointer flex justify-center transition-all transform hover:scale-105" style={{ backgroundColor: themeColor?.secondary }}>
                        <Apple className="w-3 h-3" />
                        The SARUS LEARNING APP (IOS)
                    </button>

                    <button onClick={() => navigate('/download/Android')} className="text-white py-4 px-6 rounded-lg flex items-center gap-3 text-xs font-semibold cursor-pointer border-1 flex justify-center transition-all transform hover:scale-105">
                        <Smartphone className="w-3 h-3" />
                        The SARUS LEARNING APP (ANDROID)
                    </button>

                    <button onClick={() => navigate('/download/Windows')} className="bg-slate-800 hover:bg-slate-900 text-white py-6 px-6 rounded-lg flex items-center gap-3 text-xs font-semibold cursor-pointer flex justify-center transition-all transform hover:scale-105">
                        <AppWindow className="w-3 h-3" />
                        The SARUS APP (WINDOWS)
                    </button>
                </div>

                {/* Course buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 w-full max-w-2xl">
                    <button className="bg-slate-800 hover:bg-slate-900 text-white py-6 px-6 rounded-lg flex items-center gap-3 text-xs font-semibold flex justify-center cursor-pointer transition-all transform hover:scale-105">
                        <Video className="w-3 h-3" />
                        ONLINE COURSES (ENG)
                    </button>

                    <button className="bg-slate-800 hover:bg-slate-900 text-white py-6 px-6 rounded-lg flex items-center gap-3 text-xs font-semibold flex justify-center cursor-pointer transition-all transform hover:scale-105">
                        <Video className="w-3 h-3" />
                        ONLINE COURSES (HINDI)
                    </button>
                </div>

                {/* Bottom Section Slider */}
                <SliderContent />

            </main>

            {/* Latest Programme Slider Section */}
            {/* <section className="w-full max-w-7xl mt-20 mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                        Latest Programmes
                    </h2>
                    <p className="text-xl text-white/90 font-light drop-shadow-md">
                        Discover our comprehensive coaching programs designed for your
                        success
                    </p>
                </div>

                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800">
                                    Featured Programs
                                </h3>
                                <p className="text-gray-600">
                                    Choose the perfect course for your career goals
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={prevSlide}
                                className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {programmes?.map((programme) => (
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
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {programmes.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide
                                    ? "bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-lg"
                                    : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Contact button */}
            {/* <ChatBot /> */}
        </div>
    )
}
