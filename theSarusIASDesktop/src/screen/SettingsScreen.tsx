import { Bell, Lock, Moon, Trash2, User } from "lucide-react";
import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";

const SettingsScreen = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <SideBar />
            <main className="flex-1 ml-50 mt-15">
                <Header />
                <div className="max-w-4xl mx-auto p-6">
                    {/* Header */}
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Settings</h1>

                    <div className="space-y-8">
                        {/* Profile Settings */}
                        <section className="bg-white shadow rounded-xl p-6 space-y-4">
                            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                <User className="text-green-600" /> Profile Settings
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-600 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        defaultValue="Shikhar Mall"
                                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-1">Email</label>
                                    <input
                                        type="email"
                                        defaultValue="user@example.com"
                                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-1">Profile Picture</label>
                                    <input type="file" className="w-full border rounded-lg px-3 py-2" />
                                </div>
                                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                                    Save Profile
                                </button>
                            </div>
                        </section>

                        {/* Account Settings */}
                        <section className="bg-white shadow rounded-xl p-6 space-y-4">
                            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                <Lock className="text-green-600" /> Account Settings
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-600 mb-1">Password</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                                    />
                                </div>
                                <div className="flex items-center justify-between border p-3 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <Bell className="text-yellow-500" />
                                        <span>Enable Notifications</span>
                                    </div>
                                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                                </div>
                                <div className="flex items-center justify-between border p-3 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <Moon className="text-indigo-500" />
                                        <span>Dark Mode</span>
                                    </div>
                                    <input type="checkbox" className="w-5 h-5" />
                                </div>
                                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                                    Save Changes
                                </button>
                            </div>
                        </section>

                        {/* Danger Zone */}
                        <section className="bg-white shadow rounded-xl p-6 space-y-4 border border-red-300">
                            <h2 className="text-xl font-semibold text-red-600 flex items-center gap-2">
                                <Trash2 className="text-red-600" /> Danger Zone
                            </h2>
                            <p className="text-gray-600">
                                Deleting your account is permanent and cannot be undone.
                            </p>
                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                                Delete Account
                            </button>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SettingsScreen;
