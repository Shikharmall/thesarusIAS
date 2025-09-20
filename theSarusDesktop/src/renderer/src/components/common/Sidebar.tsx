import { File, Folder, GraduationCap, HelpCircle, Home, LayoutList, User, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { themeColor } from "../../utils/constant/Color";
import logo from "../../../../../resources/thesaruslogo.ico";

export default function SideBar() {
    const location = useLocation();
    const { pathname } = location;
    const [isAdmin, setIsAdmin] = useState<boolean>(true);

    useEffect(() => {
        setIsAdmin(true);
    }, []);

    const navItems = [
        { to: "/home", label: "Home", icon: Home },
        { to: "/courses", label: "Courses", icon: GraduationCap, match: ["/courses", "/courseDetails", "/addCourse"] },
        ...(isAdmin ? [{ to: "/questionBanks", label: "Question Banks", icon: Folder, match: ["/questionBanks", "/questionBankList"] }] : []),
        ...(isAdmin ? [{ to: "/testPapers", label: "Online Tests", icon: File, match: ["/testPapers", "/testDetails"] }] : []),
        // ...(isAdmin ? [{ to: "/testPapers", label: "Staffs", icon: Users, match: ["/testPapers", "/examSectionPaper"] }] : []),
        // ...(isAdmin ? [{ to: "/testPapers", label: "Candidates", icon: User, match: ["/testPapers", "/examSectionPaper"] }] : []),
        { to: "/testSeries", label: "Test Series", icon: LayoutList },
        { to: "/helpSupport", label: "Help & Support", icon: HelpCircle }
    ];

    return (
        <aside
            className="fixed left-0 top-0 h-screen w-50 text-white flex flex-col justify-between p-0"
            style={{ backgroundColor: themeColor?.secondary }}
        >
            <div>
                <div className="text-2xl font-bold my-5 flex justify-center items-center">
                    <img
                        className="w-15 h-15 border-1 border-white rounded-full"
                        src={logo}
                        alt="logo"
                    />
                </div>

                <nav className="relative">
                    {navItems.map(({ to, label, icon: Icon, match }) => {
                        const isActive =
                            match?.some((m) => pathname.includes(m)) ?? pathname.includes(to);

                        return (
                            <Link
                                key={to}
                                to={to}
                                className={`relative flex flex-row items-center gap-3 px-5 py-5 text-sm transition-colors duration-300 
                                    ${isActive ? "text-white" : "text-[#b8b8b8ff] hover:text-white"}`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeHighlight"
                                        className="absolute left-0 top-0 h-full w-full bg-slate-800 rounded-md"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeBorder"
                                        className="absolute left-0 top-0 h-full w-1 bg-white"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}

                                <Icon size={20} color={isActive ? "#fff" : "#b8b8b8ff"} className="relative z-10" />
                                <p className="relative z-10">{label}</p>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="flex justify-center my-4">
                <div className="text-sm">@{new Date().getFullYear()} thesarus.in</div>
            </div>
        </aside>
    );
}
