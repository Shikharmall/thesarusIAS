// import React from 'react'
import { Book, Calendar, File, Folder, Home, Settings } from "lucide-react";
import { themeColor } from "../../utils/Color";
import { Link, useLocation } from "react-router-dom";

export default function SideBar() {
    const location = useLocation();
    const { pathname } = location;

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
                    <Link to={'/'}
                        className={`flex flex-row items-center gap-3 hover:bg-slate-800 hover:bg-opacity-3 px-5 py-5 text-[#b8b8b8ff] ${pathname.includes("/home") && "text-white border-l-3 border-white bg-slate-800"} `}
                    >
                        <Home size={20} color={pathname.includes("/home") ? "#fff" : "#b8b8b8ff"} />
                        <p className="text-sm">
                            Dashboard
                        </p>
                    </Link>

                    <Link to={'/courses'} //text-[#b8b8b8ff]
                        className={`flex flex-row items-center gap-3 hover:bg-slate-800 hover:bg-opacity-3 px-5 py-5 text-[#b8b8b8ff] ${pathname.includes("/courses") && "text-white text-white border-l-3 border-white bg-slate-800"} `}
                    >
                        <Book size={20} color={pathname.includes("/courses") ? "#fff" : "#b8b8b8ff"} />
                        <p className="text-sm">
                            Courses
                        </p>
                    </Link>

                    <Link to={'/questionBank'}
                        className={`flex flex-row items-center gap-3 hover:bg-slate-800 hover:bg-opacity-3 px-5 py-5 text-[#b8b8b8ff] ${pathname.includes("/questionBank") && "text-white border-l-3 border-white bg-slate-800"} `}
                    >
                        <Folder size={20} color={pathname.includes("/questionBank") ? "#fff" : "#b8b8b8ff"} />
                        <p className="text-sm">
                            Question Bank
                        </p>
                    </Link>

                    <Link to={'/addQuestion'}
                        className={`flex flex-row items-center gap-3 hover:bg-slate-800 hover:bg-opacity-3 px-5 py-5 text-[#b8b8b8ff] ${pathname.includes("/addQuestion") && "text-white border-l-3 border-white bg-slate-800"} `}
                    >
                        <File size={20} color={pathname.includes("/addQuestion") ? "#fff" : "#b8b8b8ff"} />
                        <p className="text-sm">
                            Exam Paper
                        </p>
                    </Link>

                    <Link to={'/'}
                        className={`flex flex-row items-center gap-3 hover:bg-slate-800 hover:bg-opacity-3 px-5 py-5 text-[#b8b8b8ff] ${pathname.includes("/home") && "text-white border-l-3 border-white bg-slate-800"} `}
                    >
                        <Calendar size={20} color={pathname.includes("/home") ? "#fff" : "#b8b8b8ff"} />
                        <p className="text-sm">
                            Conduct Exam
                        </p>
                    </Link>

                    <Link to={'/'}
                        className={`flex flex-row items-center gap-3 hover:bg-slate-800 hover:bg-opacity-3 px-5 py-5 text-[#b8b8b8ff] ${pathname.includes("/home") && "text-white border-l-3 border-white bg-slate-800"} `}
                    >
                        <Settings size={20} color={pathname.includes("/home") ? "#fff" : "#b8b8b8ff"} />
                        <p className="text-sm">
                            Settings
                        </p>
                    </Link>
                </nav>
            </div>
            <div className="flex justify-center my-5">
                <div className="text-sm">@2025 thesarus.in</div>
                {/* <button className="mt-3 bg-red-500 text-white font-bold px-4 py-2 rounded-lg text-sm">
                    Logout
                </button> */}
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
