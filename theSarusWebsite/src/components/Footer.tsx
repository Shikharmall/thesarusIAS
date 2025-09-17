// import { button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-20 w-24 h-24 rounded-full border border-white"></div>
                <div className="absolute top-32 right-32 w-16 h-16 rounded-full border border-white"></div>
                <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full border border-white"></div>
                <div className="absolute bottom-32 right-20 w-12 h-12 rotate-45 border border-white"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-6">
                            {/* <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-2xl">d</span>
                            </div>
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                                <span className="text-red-600 font-bold text-lg">दृष्टि</span>
                            </div> */}
                            <img src="../../images/thesaruslogo.jpg" className='w-15 h-15 rounded' />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                            The SARUS
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            India's leading platform for UPSC Civil Services preparation - your trusted
                            partner in achieving your IAS dreams.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 rounded-full p-3">
                                <Facebook className="w-4 h-4" />
                            </button>
                            <button className="bg-sky-500 hover:bg-sky-600 rounded-full p-3">
                                <Twitter className="w-4 h-4" />
                            </button>
                            <button className="bg-pink-600 hover:bg-pink-700 rounded-full p-3">
                                <Instagram className="w-4 h-4" />
                            </button>
                            <button className="bg-red-600 hover:bg-red-700 rounded-full p-3">
                                <Youtube className="w-4 h-4" />
                            </button>
                            <button className="bg-blue-700 hover:bg-blue-800 rounded-full p-3">
                                <Linkedin className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-cyan-400">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <button

                                    className="text-gray-300 hover:text-cyan-400 p-0 h-auto font-normal justify-start"
                                >
                                    About The SARUS IAS
                                </button>
                            </li>
                            <li>
                                <button

                                    className="text-gray-300 hover:text-cyan-400 p-0 h-auto font-normal justify-start"
                                >
                                    Our Faculty
                                </button>
                            </li>
                            <li>
                                <button

                                    className="text-gray-300 hover:text-cyan-400 p-0 h-auto font-normal justify-start"
                                >
                                    Success Stories
                                </button>
                            </li>
                            <li>
                                <button

                                    className="text-gray-300 hover:text-cyan-400 p-0 h-auto font-normal justify-start"
                                >
                                    Current Affairs
                                </button>
                            </li>
                            <li>
                                <button

                                    className="text-gray-300 hover:text-cyan-400 p-0 h-auto font-normal justify-start"
                                >
                                    Daily News Analysis
                                </button>
                            </li>
                            <li>
                                <button

                                    className="text-gray-300 hover:text-cyan-400 p-0 h-auto font-normal justify-start"
                                >
                                    Editorial Analysis
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Courses & Programs */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-cyan-400">Courses & Programs</h4>
                        <ul className="space-y-3">
                            <li>
                                <button

                                    className="text-gray-300 hover:text-cyan-400 p-0 h-auto font-normal justify-start"
                                >
                                    UPSC CSE Foundation
                                </button>
                            </li>
                            <li>
                                <button

                                    className="text-gray-300 hover:text-cyan-400 p-0 h-auto font-normal justify-start"
                                >
                                    Prelims Test Series
                                </button>
                            </li>
                            <li>
                                <button

                                    className="text-gray-300 hover:text-cyan-400 p-0 h-auto font-normal justify-start"
                                >
                                    Mains Test Series
                                </button>
                            </li>
                            <li>
                                <button

                                    className="text-gray-300 hover:text-cyan-400 p-0 h-auto font-normal justify-start"
                                >
                                    Optional Subjects
                                </button>
                            </li>
                            <li>
                                <button

                                    className="text-gray-300 hover:text-cyan-400 p-0 h-auto font-normal justify-start"
                                >
                                    State PCS Programs
                                </button>
                            </li>
                            <li>
                                <button

                                    className="text-gray-300 hover:text-cyan-400 p-0 h-auto font-normal justify-start"
                                >
                                    Interview Guidance
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-cyan-400">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <MapPin className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {/* 641, First Floor, Dr. Mukherjee Nagar,
                                        <br /> */}
                                        Uttar Pradesh, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-300 text-sm">+91-XXXXX-XXXXX</p>
                                    {/* <p className="text-gray-300 text-sm">+91-11-43532333</p> */}
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-300 text-sm">thesarus.2022@gmail.com</p>
                                    {/* <p className="text-gray-300 text-sm">support@drishtiias.com</p> */}
                                </div>
                            </div>
                        </div>

                        {/* App Download buttons */}
                        <div className="mt-6 space-y-3">
                            <button className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white py-3 px-4 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex flex-row items-center cursor-pointer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Download Mobile App
                            </button>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-gray-700 pt-12 mb-12">
                    <div className="max-w-2xl mx-auto text-center">
                        <h4 className="text-2xl font-bold mb-4 text-cyan-400">Stay Updated</h4>
                        <p className="text-gray-300 mb-6">
                            Subscribe to our newsletter for daily current affairs, study materials, and exam updates.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200"
                            />
                            <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                            <button className="text-gray-400 hover:text-cyan-400 p-0 h-auto text-sm">
                                Privacy Policy
                            </button>
                            <button className="text-gray-400 hover:text-cyan-400 p-0 h-auto text-sm">
                                Terms of Service
                            </button>
                            <button className="text-gray-400 hover:text-cyan-400 p-0 h-auto text-sm">
                                Refund Policy
                            </button>
                            <button className="text-gray-400 hover:text-cyan-400 p-0 h-auto text-sm">
                                Sitemap
                            </button>
                        </div>
                        <div className="text-sm text-gray-400">© {new Date().getFullYear()} The SARUS. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
