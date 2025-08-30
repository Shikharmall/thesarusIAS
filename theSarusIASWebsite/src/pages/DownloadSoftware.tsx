import { ArrowBigLeft, ChevronRight } from "lucide-react";
import { themeColor } from "../utils/Color";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DownloadSoftware = () => {

    const { systemType } = useParams<{ systemType: string }>();
    const [url, setUrl] = useState<string>("");

    useEffect(() => {
        if (systemType === "Andriod") {
            setUrl("");
        } else if (systemType === "Windows") {
            setUrl("");
        }
    }, [systemType])

    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-6">
            <div className="max-w-4xl w-full flex flex-col md:flex-row items-start gap-8">
                {/* Left: Logo */}
                <div className="flex-shrink-0">
                    <img
                        src="../../images/thesaruslogo.jpg"
                        alt="Drishti Learning App"
                        className="w-50 h-50 rounded-lg shadow-md"
                    />
                </div>

                {/* Right: Content */}
                <div className="flex flex-col space-y-4">
                    <h1 className="text-3xl" style={{
                        color: themeColor.primary
                    }}>
                        The SARUS Learning App ({systemType})
                    </h1>
                    <p className="text-gray-600">Version 1.1.0</p>
                    <p className="text-gray-700">The SARUS Learning App</p>

                    {/* Button */}
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex justify-center items-center cursor-pointer" style={{
                        backgroundColor: themeColor.secondary
                    }}>
                        Get the app
                        <ChevronRight className="mx-2" size={20} />
                    </button>

                    {/* Troubleshoot link */}
                    <a href="https://learn.microsoft.com/en-us/windows/msix/app-installer/troubleshoot-appinstaller-issues" className="text-blue-600 hover:underline text-sm">
                        Troubleshoot installation
                    </a>

                    {/* Application Info */}
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold text-gray-800">
                            Application Information
                        </h2>
                        <div className="mt-2 space-y-2 text-gray-700 text-sm">
                            <p>
                                <span className="font-medium">Version: </span>1.1.0
                            </p>
                            <p>
                                <span className="font-medium">Required Operating System: </span>
                                10.0.20348.0
                            </p>
                            <p>
                                <span className="font-medium">Architectures: </span>x64
                            </p>
                            <p>
                                <span className="font-medium">Publisher: </span>
                                The SARUS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadSoftware;
