import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Calendar,
    Video,
    AlertCircle,
    MessageCircle,
    Trash2,
    CheckCircle,
} from "lucide-react";
import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";
import { themeColor } from "../utils/Color";
import { useNavigate } from "react-router-dom";

const initialForm = {
    name: "Shivam Singh",
    email: "shivam@gmail.com",
    location: "New Delhi, India",
    bio: "Full-stack developer passionate about React, Node.js, and AI projects.",
    socials: {
        twitter: "@shikharmall",
        linkedin: "linkedin.com/in/shikharmall",
        website: "https://shikharmall.dev",
    },
};

interface NotificationType {
    id: number;
    title: string;
    message: string;
    date?: string;
    type: "meeting" | "session" | "error" | "message" | "profile" | "wallet";
    new: boolean;
}

interface Socials {
    twitter?: string;
    linkedin?: string;
    website?: string;
}

interface ProfileForm {
    name?: string;
    email?: string;
    location?: string;
    bio?: string;
    socials?: Socials;
}

const notificationsData: NotificationType[] = [
    {
        id: 1,
        title: "Meeting at 07:30 PM.",
        message: "You have an upcoming meeting with Alex regarding digital marketing.",
        type: "meeting",
        new: true,
    },
    {
        id: 2,
        title: "New Session booked by Anthony M.",
        message: "New session is booked by Anthony, on 27th January at 05:30 PM.",
        type: "session",
        new: true,
    },
    {
        id: 3,
        title: "Error processing payment!",
        message: "Please review the wallet details and fix the error to process your payments.",
        type: "error",
        new: true,
    },
    {
        id: 4,
        title: "You have a new message from Luke.",
        message: "You have a new message in conversations from Luke Wield.",
        date: "24/12/2022",
        type: "message",
        new: false,
    },
    {
        id: 5,
        title: "Meeting at 06:45 PM.",
        message: "You have a meeting with Lauren regarding career navigation.",
        date: "13/12/2022",
        type: "meeting",
        new: false,
    },
    {
        id: 6,
        title: "Congratulations! Your profile is 100% complete",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date: "23/11/2022",
        type: "profile",
        new: false,
    },
    {
        id: 7,
        title: "Add your education and experience",
        message: "Add your education and experience to stand out and get discovered.",
        date: "23/11/2022",
        type: "profile",
        new: false,
    },
    {
        id: 8,
        title: "Congratulations your wallet is attached.",
        message: "You can now request payment withdrawals and receive directly in your e-wallet.",
        date: "22/11/2022",
        type: "wallet",
        new: false,
    },
];

const SettingsScreen: React.FC = () => {
    const [filter, setFilter] = useState<"Profile" | "Password" | "Purchased">("Profile");
    const [notifications, setNotifications] = useState<NotificationType[]>(notificationsData);
    const [form, setForm] = useState<ProfileForm>(initialForm);
    const [editing, setEditing] = useState(false);
    const navigate = useNavigate();

    const handleChange = (key: keyof ProfileForm, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleSocialChange = (key: keyof Socials, value: string) => {
        setForm((prev) => ({
            ...prev,
            socials: { ...prev.socials, [key]: value },
        }));
    };

    const handleDelete = (id: number) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
    };

    // const handleMarkAllAsRead = () => {
    //     setNotifications((prev) => prev.map((n) => ({ ...n, new: false })));
    // };

    const getIcon = (type: NotificationType["type"]) => {
        switch (type) {
            case "meeting":
                return <Video className="w-6 h-6 text-green-500" />;
            case "session":
                return <Calendar className="w-6 h-6 text-green-500" />;
            case "error":
                return <AlertCircle className="w-6 h-6 text-red-500" />;
            case "message":
                return <MessageCircle className="w-6 h-6 text-green-500" />;
            case "profile":
                return <CheckCircle className="w-6 h-6 text-green-500" />;
            case "wallet":
                return <CheckCircle className="w-6 h-6 text-green-500" />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <SideBar />
            <main className="flex-1 ml-50 mt-15">
                <Header />
                <div className="mx-auto p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-800">Settings</h1>
                            <p className="text-sm text-gray-500">
                                Manage your account settings and preferences.
                            </p>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-6 border-b border-[#eee] mb-6 text-sm relative">
                        {["Profile", "Password", "Purchased"]?.map((tab) => {
                            const isActive = filter === tab;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setFilter(tab as any)}
                                    className={`relative pb-2 capitalize transition-colors cursor-pointer duration-300 ${isActive ? "font-medium" : "hover:text-gray-700"
                                        }`}
                                    style={{ color: isActive ? themeColor?.primary : "gray" }}
                                >
                                    {tab}
                                    {isActive && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                                            style={{ backgroundColor: themeColor?.primary }}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>


                    {/* List */}
                    <div className="space-y-3">
                        {
                            filter === "Profile" && (
                                <div className={`max-w-3xl mx-auto bg-white rounded-2xl shadow p-6`}>
                                    {/* Name */}
                                    <div className="sm:col-span-2 mb-4">
                                        <label className="block text-xs text-gray-500">Full Name</label>
                                        {editing ? (
                                            <input
                                                value={form?.name || ""}
                                                onChange={(e) => handleChange("name", e.target.value)}
                                                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200 border-gray-200"
                                            />
                                        ) : (
                                            <div className="mt-1 text-sm text-gray-700">{form?.name || "—"}</div>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div className="sm:col-span-2 mb-4">
                                        <label className="block text-xs text-gray-500">Email</label>
                                        {editing ? (
                                            <input
                                                value={form?.email || ""}
                                                onChange={(e) => handleChange("email", e.target.value)}
                                                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200 border-gray-200"
                                            />
                                        ) : (
                                            <div className="mt-1 text-sm text-gray-700">{form?.email || "—"}</div>
                                        )}
                                    </div>

                                    {/* Location */}
                                    <div className="sm:col-span-2 mb-4">
                                        <label className="block text-xs text-gray-500">Location</label>
                                        {editing ? (
                                            <input
                                                value={form?.location || ""}
                                                onChange={(e) => handleChange("location", e.target.value)}
                                                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200 border-gray-200"
                                            />
                                        ) : (
                                            <div className="mt-1 text-sm text-gray-700">{form?.location || "—"}</div>
                                        )}
                                    </div>

                                    {/* Bio */}
                                    <div className="sm:col-span-2 mb-4">
                                        <label className="block text-xs text-gray-500">Bio</label>
                                        {editing ? (
                                            <textarea
                                                value={form?.bio || ""}
                                                onChange={(e) => handleChange("bio", e.target.value)}
                                                rows={3}
                                                className="mt-1 w-full resize-none rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200 border-gray-200"
                                            />
                                        ) : (
                                            <div className="mt-1 text-sm text-gray-700">{form?.bio || "—"}</div>
                                        )}
                                    </div>

                                    {/* Socials */}
                                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                        {/* Twitter */}
                                        <div>
                                            <label className="block text-xs text-gray-500">Twitter</label>
                                            {editing ? (
                                                <input
                                                    value={form?.socials?.twitter || ""}
                                                    onChange={(e) => handleSocialChange("twitter", e.target.value)}
                                                    className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200 border-gray-200"
                                                />
                                            ) : (
                                                <div className="mt-1 text-sm text-gray-700">{form?.socials?.twitter || "—"}</div>
                                            )}
                                        </div>

                                        {/* LinkedIn */}
                                        <div>
                                            <label className="block text-xs text-gray-500">LinkedIn</label>
                                            {editing ? (
                                                <input
                                                    value={form?.socials?.linkedin || ""}
                                                    onChange={(e) => handleSocialChange("linkedin", e.target.value)}
                                                    className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200 border-gray-200"
                                                />
                                            ) : (
                                                <div className="mt-1 text-sm text-gray-700">{form?.socials?.linkedin || "—"}</div>
                                            )}
                                        </div>

                                        {/* Website */}
                                        <div>
                                            <label className="block text-xs text-gray-500">Website</label>
                                            {editing ? (
                                                <input
                                                    value={form?.socials?.website || ""}
                                                    onChange={(e) => handleSocialChange("website", e.target.value)}
                                                    className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200 border-gray-200"
                                                />
                                            ) : (
                                                <div className="mt-1 text-sm text-gray-700">{form?.socials?.website || "—"}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-6 flex justify-end gap-3">
                                        {editing ? (
                                            <>
                                                <button
                                                    onClick={() => setEditing(false)}
                                                    className="rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 cursor-pointer"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    onClick={() => setEditing(false)} // save action can be added here
                                                    className="rounded-lg px-4 py-2 text-sm text-white cursor-pointer"
                                                    style={{
                                                        backgroundColor: themeColor?.primary
                                                    }}
                                                >
                                                    Save
                                                </button>
                                            </>
                                        ) : (
                                            <button
                                                onClick={() => setEditing(true)}
                                                className="rounded-lg px-4 py-2 text-sm text-white cursor-pointer"
                                                style={{
                                                    backgroundColor: themeColor?.primary
                                                }}
                                            >
                                                Edit
                                            </button>
                                        )}
                                    </div>

                                    <div className="mt-6 flex gap-3 border-t border-[#eee] py-6">
                                        {editing ?
                                            null
                                            : (
                                                <button
                                                    onClick={() => navigate('/')}
                                                    className="rounded-lg px-4 py-2 text-sm text-semibold text-red-500 cursor-pointer border border-red-500"
                                                >
                                                    Logout
                                                </button>
                                            )}
                                    </div>
                                </div>
                            )
                        }
                        {
                            filter === "Password" && (
                                <>

                                </>
                            )
                        }
                        {
                            filter === "Purchased" && (
                                <AnimatePresence>
                                    {notifications.map((n) => (
                                        <motion.div
                                            key={n.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: 50 }}
                                            transition={{ duration: 0.3 }}
                                            className={`flex items-start justify-between p-4 rounded-xl border ${n.type === "error"
                                                ? "bg-red-50 border-red-200"
                                                : n.new
                                                    ? "bg-green-50 border-green-200"
                                                    : "bg-white border-gray-200"
                                                }`}
                                        >
                                            {/* Left Section */}
                                            <div className="flex items-start gap-4">
                                                <div>{getIcon(n.type)}</div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-800">{n.title}</h3>
                                                    <p className="text-sm text-gray-600">{n.message}</p>
                                                    {n.date && <span className="text-xs text-gray-400">{n.date}</span>}
                                                </div>
                                            </div>

                                            {/* Right Section */}
                                            <div className="flex flex-col items-end gap-2">
                                                {n.new && (
                                                    <span
                                                        className={`text-xs font-semibold px-2 py-1 rounded ${n.type === "error"
                                                            ? "bg-red-100 text-red-600"
                                                            : "bg-green-100 text-green-600"
                                                            }`}
                                                    >
                                                        New
                                                    </span>
                                                )}
                                                <button
                                                    onClick={() => handleDelete(n.id)}
                                                    className="flex items-center gap-1 text-xs text-red-500 border border-red-200 px-2 py-1 rounded hover:bg-red-50 transition"
                                                >
                                                    <Trash2 size={14} /> Delete
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            )
                        }
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SettingsScreen;

