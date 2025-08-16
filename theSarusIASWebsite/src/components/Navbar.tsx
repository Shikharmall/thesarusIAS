import React, { useState } from 'react'
import { colors, themeColor } from '../utils/Color'

export default function Navbar() {
    const [isContactOpen, setIsContactOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className="relative z-10 flex items-center justify-between p-6 mx-40">
            <div className="flex items-center gap-4">
                <button className="px-6 py-2 rounded-md font-semibold" style={{ color: colors?.white, backgroundColor: themeColor?.secondary }}>
                    ASMITA SCHEME 2025
                </button>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                    {/* <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">d</span>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-red-600 font-bold text-sm">दृष्टि</span>
                    </div> */}
                    <img src="../../images/thesaruslogo.jpg" className='w-15 h-15 rounded' />
                </div>

                <div className="flex items-center gap-4 text-slate-800">
                    <span className="font-semibold">+91-87501-87501</span>
                    <button
                        //variant="ghost" 
                        className="text-slate-800 hover:text-slate-900">
                        Login
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="bg-slate-800 hover:bg-slate-900 text-white p-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 relative"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <div
                                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1" : ""
                                    }`}
                            ></div>
                            <div
                                className={`w-full h-0.5 bg-white rounded-full my-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"
                                    }`}
                            ></div>
                            <div
                                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                                    }`}
                            ></div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Animated dropdown menu */}
            {isMenuOpen && (
                <div className="absolute top-24 right-6 z-20 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform animate-in fade-in-0 slide-in-from-top-2 duration-300">
                    <div className="p-6 w-80">
                        <div className="space-y-4">
                            <div className="border-b border-gray-100 pb-4">
                                <h3 className="font-bold text-gray-800 text-lg mb-2">Quick Links</h3>
                                <div className="space-y-2">
                                    <button
                                        // variant="ghost"
                                        className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                                    >
                                        Current Affairs
                                    </button>
                                    <button
                                        // variant="ghost"
                                        className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                                    >
                                        Test Series
                                    </button>
                                    <button
                                        // variant="ghost"
                                        className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                                    >
                                        Study Materials
                                    </button>
                                    <button
                                        // variant="ghost"
                                        className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                                    >
                                        Video Lectures
                                    </button>
                                </div>
                            </div>

                            <div className="border-b border-gray-100 pb-4">
                                <h3 className="font-bold text-gray-800 text-lg mb-2">Courses</h3>
                                <div className="space-y-2">
                                    <button
                                        // variant="ghost"
                                        className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                                    >
                                        UPSC CSE
                                    </button>
                                    <button
                                        // variant="ghost"
                                        className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                                    >
                                        State PCS
                                    </button>
                                    <button
                                        // variant="ghost"
                                        className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                                    >
                                        Optional Subjects
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-800 text-lg mb-2">Support</h3>
                                <div className="space-y-2">
                                    <button
                                        // variant="ghost"
                                        onClick={() => {
                                            setIsContactOpen(true)
                                            setIsMenuOpen(false)
                                        }}
                                        className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                                    >
                                        Contact Us
                                    </button>
                                    <button
                                        // variant="ghost"
                                        className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                                    >
                                        Help Center
                                    </button>
                                    <button
                                        //variant="ghost"
                                        className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                                    >
                                        About Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
