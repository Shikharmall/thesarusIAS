// import React from 'react'
import { Book, Calendar, File, Folder, Home, Settings } from "lucide-react";
import { themeColor } from "../../utils/Color";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SideBar() {

    const [currTab, setCurrTab] = useState<number>(0);

    return (
        <aside className="fixed left-0 top-0 h-screen w-50 text-white flex flex-col justify-between p-0" style={{
            backgroundColor: themeColor?.secondary
        }}> {/* w-64 bg-[#3f2768] */}
            <div>
                <div className="text-2xl font-bold my-10 flex justify-center items-center">
                    <img
                        className="w-15 h-15 border-1 border-white rounded-full"
                        src="../../images/thesaruslogoCrop.png"
                        alt="logo"
                    />
                </div>
                <nav className="">
                    <Link to={'/'} className="flex flex-row items-center gap-3 hover:bg-gray-600 hover:bg-opacity-3 px-5 py-2 my-5 border-l-3 border-white">
                        <Home size={20} color="#b8b8b8ff" />
                        <p className="hover:text-white text-sm text-[#b8b8b8ff]">
                            Dashboard
                        </p>
                    </Link>

                    <Link to={'/courses'} className="flex flex-row items-center gap-3 hover:bg-gray-600 hover:bg-opacity-3 px-5 py-2 my-5">
                        <Book size={20} color="#b8b8b8ff" />
                        <p className="hover:text-white text-sm text-[#b8b8b8ff]">
                            Courses
                        </p>
                    </Link>

                    <Link to={'/questionBank'} className="flex flex-row items-center gap-3 hover:bg-gray-600 hover:bg-opacity-3 px-5 py-2 my-5">
                        <Folder size={20} color="#b8b8b8ff" />
                        <p className="hover:text-white text-sm text-[#b8b8b8ff]">
                            Question Bank
                        </p>
                    </Link>

                    <Link to={'/addQuestion'} className="flex flex-row items-center gap-3 hover:bg-gray-600 hover:bg-opacity-3 px-5 py-2 my-5">
                        <File size={20} color="#b8b8b8ff" />
                        <p className="hover:text-white text-sm text-[#b8b8b8ff]">
                            Exam Paper
                        </p>
                    </Link>

                    <Link to={'/'} className="flex flex-row items-center gap-3 hover:bg-gray-600 hover:bg-opacity-3 px-5 py-2 my-5">
                        <Calendar size={20} color="#b8b8b8ff" />
                        <p className="hover:text-white text-sm text-[#b8b8b8ff]">
                            Conduct Exam
                        </p>
                    </Link>

                    <Link to={'/'} className="flex flex-row items-center gap-3 hover:bg-gray-600 hover:bg-opacity-3 px-5 py-2 my-5">
                        <Settings size={20} color="#b8b8b8ff" />
                        <p className="hover:text-white text-sm text-[#b8b8b8ff]">
                            Settings
                        </p>
                    </Link>
                </nav>
            </div>
            <div className="flex justify-center my-5">
                {/* <div className="text-sm">Buy Premium</div> */}
                <button className="mt-3 bg-red-500 text-white font-bold px-4 py-2 rounded-lg text-sm">
                    Logout
                </button>
            </div>
            {/* <div className="bg-purple-700 p-4 rounded-xl mt-10 text-center">
                <div className="text-sm">Buy Premium</div>
                <button className="mt-3 bg-yellow-400 text-purple-900 font-bold px-4 py-2 rounded-lg">
                    Learn More
                </button>
            </div> */}
        </aside>
    )
}
