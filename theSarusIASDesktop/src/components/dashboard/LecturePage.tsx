import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";

const LecturePage: React.FC = () => {
    const lecture = {
        id: "101",
        title: "Introduction to Algebra",
        videoUrl: "https://res.cloudinary.com/drb1ds8e3/video/upload/v1755963094/demo_xskpxn.mp4", // ✅ your own hosted video file
        description:
            "In this lecture, we’ll explore the basics of algebra, including variables, constants, and simple equations.",
        notes: [
            "Algebra is the study of symbols and rules for manipulating those symbols.",
            "Variables (x, y) represent unknowns.",
            "Equations help us solve problems logically.",
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <SideBar />
            <main className="flex-1 ml-50 mt-15">
                <Header />
                {/* Video Player */}
                <div className="w-full bg-black flex justify-center">
                    <div className="w-full max-w-5xl">
                        <video
                            controls
                            className="w-full h-auto rounded-lg"
                            controlsList="nodownload"
                            poster="https://picsum.photos/1200/600?blur" // thumbnail
                        >
                            <source src={'https://res.cloudinary.com/drb1ds8e3/video/upload/v1755963094/demo_xskpxn.mp4'} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-5xl mx-auto p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-3">
                        {lecture.title}
                    </h1>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        {lecture.description}
                    </p>

                    {/* Notes */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">Notes</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            {lecture.notes.map((note, idx) => (
                                <li key={idx}>{note}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LecturePage;
