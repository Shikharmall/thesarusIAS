import type React from "react"

// import { button } from "@/components/ui/button"
import { Clock, Mail, Bell, Calendar, ArrowRight, CheckCircle } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function ComingSoon() {
    const [email, setEmail] = useState("")
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            setIsSubscribed(true)
            setTimeout(() => setIsSubscribed(false), 3000)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-cyan-500 to-teal-500 relative overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/education-bg.png')",
                }}
            ></div>

            <div className="absolute inset-0 opacity-15">
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-2 border-white"></div>
                <div className="absolute top-40 right-20 w-24 h-24 rounded-full border border-white"></div>
                <div className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full border border-white"></div>
                <div className="absolute bottom-20 right-1/3 w-20 h-20 rounded-full border-2 border-white"></div>
                <div className="absolute top-1/3 left-1/2 w-12 h-12 rotate-45 border border-white/50"></div>
                <div className="absolute bottom-1/2 right-10 w-8 h-8 rotate-12 border border-white/40"></div>
            </div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-teal-600/20"></div>

            {/* Header */}
            <header className="relative z-10 flex items-center justify-between p-6">
                {/* <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">d</span>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-red-600 font-bold text-sm">दृष्टि</span>
                    </div>
                </div> */}
                <Link to={'/'}>
                    <img src="../../images/thesaruslogo.jpg" className='w-15 h-15 rounded' />
                </Link>
                <div className="text-white font-semibold">+91-87501-87501</div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex flex-col items-center justify-center px-6 py-16 min-h-[80vh]">
                <div className="text-center mb-12 max-w-4xl">
                    <div className="mb-8">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl border border-white/30">
                            <Clock className="w-12 h-12 text-white" />
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                        Coming Soon
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-light drop-shadow-md mb-8">
                        We're working hard to bring you the next generation of IAS preparation platform
                    </p>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        Get ready for revolutionary features, enhanced learning experiences, and cutting-edge tools that will
                        transform your civil services preparation journey.
                    </p>
                </div>

                {/* Countdown Timer */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20 shadow-2xl">
                    <div className="grid grid-cols-4 gap-6 text-center">
                        <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">15</div>
                            <div className="text-white/80 font-semibold">Days</div>
                        </div>
                        <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">08</div>
                            <div className="text-white/80 font-semibold">Hours</div>
                        </div>
                        <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">42</div>
                            <div className="text-white/80 font-semibold">Minutes</div>
                        </div>
                        <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">33</div>
                            <div className="text-white/80 font-semibold">Seconds</div>
                        </div>
                    </div>
                </div>

                {/* Email Subscription */}
                <div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl border border-gray-100 mb-12">
                    <div className="text-center mb-6">
                        <Bell className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Be the First to Know</h3>
                        <p className="text-gray-600">
                            Subscribe to get notified when we launch and receive exclusive early access benefits
                        </p>
                    </div>

                    <form onSubmit={handleSubscribe} className="flex gap-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 text-lg"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
                        >
                            {isSubscribed ? (
                                <>
                                    <CheckCircle className="w-5 h-5" />
                                    Subscribed!
                                </>
                            ) : (
                                <>
                                    <Mail className="w-5 h-5" />
                                    Notify Me
                                </>
                            )}
                        </button>
                    </form>

                    {isSubscribed && (
                        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                            <p className="text-green-800 font-semibold text-center">
                                🎉 Thank you! You'll be the first to know when we launch.
                            </p>
                        </div>
                    )}
                </div>

                {/* Features Preview */}
                <div className="bg-white rounded-3xl p-8 w-full max-w-6xl shadow-2xl border border-gray-100">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">What's Coming</h3>
                        <p className="text-gray-600 text-lg">Exciting new features that will revolutionize your IAS preparation</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <Calendar className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="font-bold text-gray-800 text-xl mb-2">Smart Study Planner</h4>
                            <p className="text-gray-600">
                                AI-powered personalized study schedules that adapt to your learning pace and exam timeline
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <ArrowRight className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="font-bold text-gray-800 text-xl mb-2">Interactive Learning</h4>
                            <p className="text-gray-600">
                                Immersive video lessons, interactive quizzes, and real-time doubt resolution system
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <CheckCircle className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="font-bold text-gray-800 text-xl mb-2">Progress Analytics</h4>
                            <p className="text-gray-600">
                                Detailed performance insights and recommendations to optimize your preparation strategy
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 text-center py-8 text-white/80">
                <p className="mb-2">© 2025 Drishti IAS. All rights reserved.</p>
                <p>Follow us on social media for updates and preparation tips</p>
            </footer>
        </div>
    )
}
