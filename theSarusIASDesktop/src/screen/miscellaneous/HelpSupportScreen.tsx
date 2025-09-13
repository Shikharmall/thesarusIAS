import { useState } from "react";
import { Search, MessageCircle, Mail, Phone } from "lucide-react";
import Header from "../../components/common/Header";
import type { faqsType } from "../../utils/types/miscellaneous";
import { themeColor } from "../../utils/constant/Color";
import Sidebar from "../../components/common/Sidebar";
// import { useNavigate } from "react-router-dom";

const faqs: faqsType[] = [
    {
        question: "How do I reset my password?",
        answer:
            "Go to settings > account > reset password. You'll receive an email to create a new password.",
    },
    {
        question: "How do I contact customer support?",
        answer:
            "You can reach us via live chat, email at thesarus.2022@gmail.com, or call our helpline.",
    },
    {
        question: "Can I upgrade my plan later?",
        answer: "Yes, you can upgrade or downgrade your plan anytime in the billing section.",
    },
];

const HelpSupportScreen = () => {
    const [search, setSearch] = useState("");
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    //const navigate = useNavigate();

    const filteredFaqs = faqs?.filter((faq) =>
        faq?.question?.toLowerCase()?.includes(search?.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <Sidebar />
            <main className="flex-1 ml-50 mt-15">
                <Header />
                <div className="mx-auto p-6">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-800">Help & Support</h1>
                            <p className="text-sm text-gray-500">
                                We're here to help you with account, settings, and technical support.
                            </p>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mb-6">
                        <Search className="absolute left-3 top-5 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search for help..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className={`w-full pl-10 pr-4 py-4 border border-[#eee] rounded-lg focus:shadow outline-none`}
                        // className={`w-full pl-10 pr-4 py-2 border border-[${themeColor?.primary}] rounded-lg focus:ring-2 focus:ring-[${themeColor?.secondary}] outline-none`}
                        />
                    </div>

                    {/* FAQs */}
                    <div className="space-y-4 mb-8">
                        {filteredFaqs?.length > 0 ? (
                            filteredFaqs?.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-[#eee] rounded-lg p-4 cursor-pointer hover:shadow"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <h2 className="font-medium text-gray-700 flex justify-between">
                                        {faq.question}
                                        <span style={{ color: themeColor?.primary, fontSize: 20 }}>{openIndex === index ? "-" : "+"}</span>
                                    </h2>
                                    {openIndex === index && (
                                        <p className="text-gray-600 mt-2">{faq.answer}</p>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center">No results found.</p>
                        )}
                    </div>

                    {/* Contact Options */}
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="p-6 border border-[#eee] rounded-lg shadow hover:shadow-md transition">
                            <MessageCircle className="mx-auto" size={32} color={themeColor?.primary} />
                            <h3 className="font-semibold mt-2">Live Chat</h3>
                            <p className="text-gray-500 text-sm">Chat with our support team instantly</p>
                        </div>
                        <div className="p-6 border border-[#eee] rounded-lg shadow hover:shadow-md transition">
                            <Mail className="mx-auto" size={32} color={themeColor?.primary} />
                            <h3 className="font-semibold mt-2">Email Support</h3>
                            <p className="text-gray-500 text-sm">thesarus.2020@gmail.com</p>
                        </div>
                        <div className="p-6 border border-[#eee] rounded-lg shadow hover:shadow-md transition">
                            <Phone className="mx-auto" size={32} color={themeColor?.primary} />
                            <h3 className="font-semibold mt-2">Phone</h3>
                            <p className="text-gray-500 text-sm">+1 (800) 123-4567</p>
                        </div>
                    </div>

                    {/* Support Ticket Button */}
                    {/* <div className="text-center mt-8">
                        <button onClick={() => navigate('/ticket')} className="text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition" style={{
                            backgroundColor: themeColor?.primary
                        }}>
                            Create Support Ticket
                        </button>
                    </div> */}
                </div>
            </main>
        </div>
    );
};

export default HelpSupportScreen;
