import { useState } from "react";
import { Play, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { themeColor } from "../../utils/Color";

type Video = {
    id: number;
    title: string;
    description: string;
    src: string;
    thumbnail: string;
};

export default function VideoPlayerPage() {
    const navigate = useNavigate();

    const videos: Video[] = [
        {
            id: 1,
            title: "Introduction to IAS GS Foundation",
            description: "A quick overview of the GS Foundation program.",
            src: "https://res.cloudinary.com/drb1ds8e3/video/upload/v1755963094/demo_xskpxn.mp4",
            thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
        },
        {
            id: 2,
            title: "Polity Basics - Demo Class",
            description: "Understand the fundamentals of Indian Polity.",
            src: "https://www.w3schools.com/html/movie.mp4",
            thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
        },
        {
            id: 3,
            title: "Modern History Overview",
            description: "Learn about modern history for IAS preparation.",
            src: "https://www.w3schools.com/html/mov_bbb.mp4",
            thumbnail: "https://img.youtube.com/vi/XC0Gsk4sP6E/hqdefault.jpg",
        },
    ];

    const [currentVideo, setCurrentVideo] = useState<Video>(videos[0]);

    return (
        <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
            {/* Main Video Section */}
            <div className="flex-1 p-4">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-white hover:text-[#eee] mb-4 transition fixed top-10 left-10 z-50 px-3 py-2 rounded-full cursor-pointer"
                    style={{
                        backgroundColor: themeColor.primary
                    }}
                >
                    <ArrowLeft size={20} />
                    {/* <span className="font-medium">Back</span> */}
                </button>

                <div className="bg-black rounded-lg overflow-hidden shadow-md">
                    <video
                        key={currentVideo.id}
                        src={currentVideo.src}
                        controls
                        autoPlay
                        controlsList="nodownload"
                        className="w-full h-[400px] lg:h-[600px] object-cover"
                        disablePictureInPicture
                        disableRemotePlayback
                    />
                </div>

                <div className="mt-4">
                    <h1 className="text-2xl font-bold text-gray-800">{currentVideo.title}</h1>
                    <p className="text-gray-600 mt-2">{currentVideo.description}</p>
                </div>
            </div>

            {/* Sidebar Video List */}
            <div className="w-full lg:w-80 bg-white border-l border-gray-200 p-4 overflow-y-auto">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">More Videos</h2>
                <ul className="space-y-3">
                    {videos.map((video) => (
                        <li
                            key={video.id}
                            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition 
                ${currentVideo.id === video.id ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"}`}
                            onClick={() => setCurrentVideo(video)}
                        >
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-20 h-14 object-cover rounded"
                            />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-800">{video.title}</p>
                                <p className="text-xs text-gray-500">Click to play</p>
                            </div>
                            <Play size={18} className="text-blue-600" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
