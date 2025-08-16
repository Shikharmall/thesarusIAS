import {
  Apple,
  Smartphone,
  Monitor,
  Video,
  Phone,
  X,
  Mail,
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  BookOpen,
  Award,
} from "lucide-react";
import { useState } from "react";
// import Footer from "@/components/footer";

export default function Slider() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const programmes = [
    {
      id: 1,
      title: "UPSC CSE Foundation Course 2025",
      description:
        "Comprehensive foundation course for UPSC Civil Services Examination with expert faculty and structured curriculum.",
      duration: "12 Months",
      students: "2,500+",
      subjects: "All Subjects",
      price: "₹45,000",
      image: "/placeholder-apfpk.png",
      features: [
        "Live Classes",
        "Test Series",
        "Study Material",
        "Doubt Clearing",
      ],
    },
    {
      id: 2,
      title: "State PCS Comprehensive Program",
      description:
        "Complete preparation program for State Public Service Commission examinations across all states.",
      duration: "10 Months",
      students: "1,800+",
      subjects: "State Specific",
      price: "₹35,000",
      image: "/indian-government-building.png",
      features: [
        "State-wise Syllabus",
        "Mock Tests",
        "Current Affairs",
        "Interview Prep",
      ],
    },
    {
      id: 3,
      title: "Prelims Test Series 2025",
      description:
        "Intensive test series designed to crack UPSC Prelims with detailed analysis and performance tracking.",
      duration: "6 Months",
      students: "5,000+",
      subjects: "GS & CSAT",
      price: "₹15,000",
      image: "/placeholder-v4ppg.png",
      features: [
        "50+ Tests",
        "All India Ranking",
        "Detailed Solutions",
        "Performance Analytics",
      ],
    },
    {
      id: 4,
      title: "Mains Answer Writing Program",
      description:
        "Specialized program to master answer writing skills for UPSC Mains examination with expert evaluation.",
      duration: "8 Months",
      students: "3,200+",
      subjects: "All GS Papers",
      price: "₹25,000",
      image: "/writing-pen-notebook-essays.png",
      features: [
        "Daily Practice",
        "Expert Evaluation",
        "Model Answers",
        "Writing Techniques",
      ],
    },
    {
      id: 5,
      title: "Current Affairs Mastery Course",
      description:
        "Stay updated with comprehensive current affairs coverage for all competitive examinations.",
      duration: "12 Months",
      students: "8,000+",
      subjects: "Current Affairs",
      price: "₹12,000",
      image: "/newspaper-digital-news.png",
      features: [
        "Daily Updates",
        "Monthly Magazines",
        "Video Analysis",
        "MCQ Practice",
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % programmes.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + programmes.length) % programmes.length
    );
  };

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
        {/* Additional educational geometric elements */}
        <div className="absolute top-1/3 left-1/2 w-12 h-12 rotate-45 border border-white/50"></div>
        <div className="absolute bottom-1/2 right-10 w-8 h-8 rotate-12 border border-white/40"></div>
      </div>

      {/* Subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-teal-600/20"></div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-xl font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            ASMITA SCHEME 2025
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">d</span>
            </div>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-red-600 font-bold text-sm">दृष्टि</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-800">
            <span className="font-semibold">+91-87501-87501</span>
            <button
              variant="ghost"
              className="text-slate-800 hover:text-slate-900 hover:bg-white/20 px-6 py-2 rounded-lg font-semibold transition-all duration-200"
            >
              Login
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-slate-800 hover:bg-slate-900 text-white p-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 relative"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <div
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-white rounded-full my-1 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Animated dropdown menu */}
      {isMenuOpen && (
        <div className="absolute top-24 right-6 z-20 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform animate-in fade-in-0 slide-in-from-top-2 duration-300">
          <div className="p-6 w-80">
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  <button
                    variant="ghost"
                    className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                  >
                    Current Affairs
                  </button>
                  <button
                    variant="ghost"
                    className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                  >
                    Test Series
                  </button>
                  <button
                    variant="ghost"
                    className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                  >
                    Study Materials
                  </button>
                  <button
                    variant="ghost"
                    className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                  >
                    Video Lectures
                  </button>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  Courses
                </h3>
                <div className="space-y-2">
                  <button
                    variant="ghost"
                    className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                  >
                    UPSC CSE
                  </button>
                  <button
                    variant="ghost"
                    className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                  >
                    State PCS
                  </button>
                  <button
                    variant="ghost"
                    className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                  >
                    Optional Subjects
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  Support
                </h3>
                <div className="space-y-2">
                  <button
                    variant="ghost"
                    onClick={() => {
                      setIsContactOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                  >
                    Contact Us
                  </button>
                  <button
                    variant="ghost"
                    className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                  >
                    Help Center
                  </button>
                  <button
                    variant="ghost"
                    className="w-full justify-start text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg"
                  >
                    About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Think IAS Think Drishti
          </h1>
          <p className="text-2xl text-white/90 font-light drop-shadow-md">
            Think - Connect - Express
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-5xl">
          <button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white py-6 px-8 rounded-2xl flex items-center gap-4 text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border border-slate-600">
            <Apple className="w-8 h-8" />
            <div className="text-left">
              <div className="text-sm opacity-80">Download for</div>
              <div>IOS DEVICES</div>
            </div>
          </button>

          <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white py-6 px-8 rounded-2xl flex items-center gap-4 text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ring-2 ring-red-300">
            <Smartphone className="w-8 h-8" />
            <div className="text-left">
              <div className="text-sm opacity-90">Download for</div>
              <div>ANDROID</div>
            </div>
          </button>

          <button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white py-6 px-8 rounded-2xl flex items-center gap-4 text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border border-slate-600">
            <Monitor className="w-8 h-8" />
            <div className="text-left">
              <div className="text-sm opacity-80">Download for</div>
              <div>WINDOWS</div>
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 w-full max-w-3xl">
          <button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white py-6 px-8 rounded-2xl flex items-center gap-4 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border border-slate-600">
            <Video className="w-8 h-8" />
            <div>ONLINE COURSES (ENG)</div>
          </button>

          <button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white py-6 px-8 rounded-2xl flex items-center gap-4 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border border-slate-600">
            <Video className="w-8 h-8" />
            <div>ONLINE COURSES (HINDI)</div>
          </button>
        </div>

        {/* Latest Programme Slider Section */}
        <section className="w-full max-w-7xl mt-20 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Latest Programmes
            </h2>
            <p className="text-xl text-white/90 font-light drop-shadow-md">
              Discover our comprehensive coaching programs designed for your
              success
            </p>
          </div>

          <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            {/* Slider Navigation */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Featured Programs
                  </h3>
                  <p className="text-gray-600">
                    Choose the perfect course for your career goals
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Slider Content */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {programmes.map((programme) => (
                  <div key={programme.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                      {/* Programme Image */}
                      <div className="relative">
                        <img
                          src={programme.image || "/placeholder.svg"}
                          alt={programme.title}
                          className="w-full h-80 object-cover rounded-2xl shadow-lg"
                        />
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                          {programme.price}
                        </div>
                      </div>

                      {/* Programme Details */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <h4 className="text-3xl font-bold text-gray-800 mb-4">
                            {programme.title}
                          </h4>
                          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            {programme.description}
                          </p>

                          {/* Programme Stats */}
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl border border-cyan-200">
                              <Calendar className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                              <div className="font-bold text-gray-800">
                                {programme.duration}
                              </div>
                              <div className="text-sm text-gray-600">
                                Duration
                              </div>
                            </div>
                            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                              <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                              <div className="font-bold text-gray-800">
                                {programme.students}
                              </div>
                              <div className="text-sm text-gray-600">
                                Students
                              </div>
                            </div>
                            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                              <Award className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                              <div className="font-bold text-gray-800">
                                {programme.subjects}
                              </div>
                              <div className="text-sm text-gray-600">
                                Coverage
                              </div>
                            </div>
                          </div>

                          {/* Programme Features */}
                          <div className="mb-6">
                            <h5 className="font-bold text-gray-800 mb-3">
                              Key Features:
                            </h5>
                            <div className="grid grid-cols-2 gap-2">
                              {programme.features.map((feature, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full"></div>
                                  <span className="text-gray-700 text-sm">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-4">
                          <button className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                            Enroll Now
                          </button>
                          <button className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-gray-300">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {programmes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? "bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-lg"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="bg-white rounded-3xl p-10 w-full max-w-7xl shadow-2xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* English Section */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <span className="text-white font-bold text-3xl">d</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white py-4 px-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  News & Editorials
                </button>
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white py-4 px-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Drishti Media
                </button>
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white py-4 px-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Optional Subjects
                </button>
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white py-4 px-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Classroom Prog.
                </button>
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white py-4 px-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Mains Test Series
                </button>
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white py-4 px-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Daily MCQs
                </button>
              </div>

              <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-4 px-10 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ring-2 ring-red-200">
                VISIT ENGLISH WEBSITE
              </button>
            </div>

            {/* Hindi Section */}
            <div className="text-center">
              <div className="w-20 h-20 bg-white border-4 border-red-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <span className="text-red-600 font-bold text-xl">दृष्टि</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white py-4 px-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  दृष्टि मीडिया
                </button>
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white py-4 px-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  कथा कार्यक्रम
                </button>
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white py-4 px-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  प्रिलिम्स टेस्ट सीरीज
                </button>
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white py-4 px-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  मेन्स एप्रोच पेपर
                </button>
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white py-4 px-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  करेंट अफेयर्स
                </button>
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white py-4 px-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  एप्रोच टेस्ट
                </button>
              </div>

              <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-4 px-10 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ring-2 ring-red-200">
                हिंदी वेबसाइट पर जाएँ
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Contact Popup */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-cyan-400 via-cyan-500 to-teal-500 z-50 overflow-y-auto">
          {/* Background Pattern for full screen popup */}
          <div
            className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/education-bg.png')",
            }}
          ></div>

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between p-6 bg-white/10 backdrop-blur-sm border-b border-white/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <Phone className="w-6 h-6 text-cyan-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Contact Drishti IAS
                </h2>
                <p className="text-white/80">
                  Get in touch with our expert team
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsContactOpen(false)}
              className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Full Screen Content */}
          <div className="relative z-10 min-h-screen p-6 pt-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form Section */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      Send us a message
                    </h3>
                    <p className="text-gray-600 text-lg">
                      We'd love to hear from you. Fill out the form below and
                      we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 text-lg"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 text-lg"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 text-lg"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 text-lg"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Course Interest
                      </label>
                      <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 text-lg">
                        <option>Select your course interest</option>
                        <option>UPSC CSE</option>
                        <option>State PCS</option>
                        <option>Optional Subjects</option>
                        <option>Test Series</option>
                        <option>Current Affairs</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Message
                      </label>
                      <textarea
                        rows={6}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 resize-none text-lg"
                        placeholder="Tell us how we can help you achieve your IAS dreams..."
                      />
                    </div>

                    <button className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Information Section */}
                <div className="space-y-8">
                  {/* Contact Details Card */}
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8">
                      Get in touch
                    </h3>
                    <div className="space-y-8">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Phone className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-xl mb-2">
                            Phone Numbers
                          </h4>
                          <p className="text-gray-600 text-lg mb-1">
                            +91-87501-87501
                          </p>
                          <p className="text-gray-600 text-lg mb-1">
                            +91-11-43532333
                          </p>
                          <p className="text-gray-600">
                            Available 24/7 for student support
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Mail className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-xl mb-2">
                            Email Addresses
                          </h4>
                          <p className="text-gray-600 text-lg mb-1">
                            info@drishtiias.com
                          </p>
                          <p className="text-gray-600 text-lg mb-1">
                            support@drishtiias.com
                          </p>
                          <p className="text-gray-600">
                            We respond within 24 hours
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <MapPin className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-xl mb-2">
                            Office Address
                          </h4>
                          <p className="text-gray-600 text-lg mb-1">
                            641, First Floor, Dr. Mukherjee Nagar,
                          </p>
                          <p className="text-gray-600 text-lg mb-1">
                            Delhi - 110009, India
                          </p>
                          <p className="text-gray-600">
                            Visit us for personal consultation
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Clock className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-xl mb-2">
                            Office Hours
                          </h4>
                          <p className="text-gray-600 text-lg mb-1">
                            Monday - Saturday: 9:00 AM - 6:00 PM
                          </p>
                          <p className="text-gray-600 text-lg mb-1">
                            Sunday: 10:00 AM - 4:00 PM
                          </p>
                          <p className="text-gray-600">
                            Extended hours during exam season
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Links Card */}
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Quick Actions
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                        Book Demo Class
                      </button>
                      <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                        Download Brochure
                      </button>
                      <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                        Schedule Call
                      </button>
                      <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                        Live Chat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-8 right-8 z-20">
        <button
          onClick={() => setIsContactOpen(true)}
          className="bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 border-2 border-gray-600"
        >
          <Phone className="w-6 h-6 mb-1" />
          <span className="text-xs font-semibold">Contact</span>
        </button>
      </div>
    </div>
  );
}
