import React, { useState } from "react";
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

interface NotificationType {
  id: number;
  title: string;
  message: string;
  date?: string;
  type: "meeting" | "session" | "error" | "message" | "profile" | "wallet";
  new: boolean;
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

const NotificationScreen: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "new" | "unread">("all");
  const [notifications, setNotifications] = useState<NotificationType[]>(notificationsData);

  const filteredNotifications =
    filter === "all"
      ? notifications
      : filter === "new"
        ? notifications.filter((n) => n.new)
        : notifications.filter((n) => !n.new);

  const handleDelete = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, new: false })));
  };

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
        <div className=" mx-auto p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-semibold text-gray-800">Notifications</h1>
              <p className="text-sm text-gray-500">
                You've {notifications.filter((n) => n.new).length} unread notifications
              </p>
            </div>
            <button
              onClick={handleMarkAllAsRead}
              className="text-sm text-green-600 font-medium hover:underline"
            >
              Mark all as read
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b-1 border-[#eee] mb-6 text-sm">
            {["all", "new", "unread"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab as any)}
                className={`pb-2 capitalize cursor-pointer ${filter === tab
                  ? "font-medium"
                  : "hover:text-gray-700"
                  }`}
                style={{ color: filter === tab ? themeColor.primary : 'gray', borderBottomWidth: filter === tab ? 2 : 0, borderColor: filter === tab ? themeColor.primary : '' }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* List */}
          <div className="space-y-3">
            {filteredNotifications.map((n) => (
              <div
                key={n.id}
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
                    {n.date && (
                      <span className="text-xs text-gray-400">{n.date}</span>
                    )}
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
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotificationScreen;
