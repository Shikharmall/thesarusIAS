import { Bell, Settings } from "lucide-react";
import { themeColor } from "../../utils/Color";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    return (
        <header className="fixed top-0 left-50 right-0 z-50  flex items-center justify-between bg-white px-6 py-4 shadow-sm">
            {/* Left: Title (optional) */}
            <h1 className="text-md font-semibold text-gray-800" style={{ color: themeColor?.primary }}>The SARUS Learning Application</h1>

            {/* Right: Actions */}
            <div className="flex items-center gap-6">
                {/* Notification Bell */}
                <button onClick={() => navigate('/notification')} className="relative text-gray-600 hover:text-gray-800 cursor-pointer">
                    <Bell size={20} color={themeColor?.secondary} />
                    <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full px-1" style={{ backgroundColor: themeColor?.primary }}>
                        2
                    </span>
                </button>

                {/* Settings */}
                <button onClick={() => navigate('/settings')} className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    <Settings size={20} />
                </button>

                {/* Profile Avatar */}
                <img
                    src="https://avatar.iran.liara.run/public/44"
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover border"
                />
            </div>
        </header>
    );
};

export default Header;
