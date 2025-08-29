import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

const CourseDetails: React.FC = () => {
    //const { id } = useParams(); // for dynamic routing
    const navigate = useNavigate();
    const id = 1;

    // ✅ Replace with API call based on `id`
    const course = {
        id: "1",
        image: "https://picsum.photos/1200/400?random=10",
        tags: ["Beginner", "Math"],
        title: "Algebra Basics: From Zero to Hero",
        description:
            "This comprehensive course covers the foundations of algebra, designed for beginners who want to build a strong base in mathematics. With hands-on examples, quizzes, and practice problems, you'll gain confidence in solving equations, understanding variables, and applying algebra in real-world scenarios.",
        price: "₹999",
        oldPrice: "₹1999",
        discount: "50% OFF",
        learn: [
            "Understand variables, constants, and coefficients",
            "Learn to solve linear equations step-by-step",
            "Master algebraic expressions and polynomials",
            "Apply algebra in practical, real-life problems",
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <SideBar />

            <main className="flex-1 ml-50 mt-15">

                <Header />
                {/* Banner */}
                <div className="relative h-64 w-full">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                            {course.title}
                        </h1>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-5xl mx-auto p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {course.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="text-sm px-3 py-1 bg-gray-200 text-gray-700 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl font-bold text-blue-600">{course.price}</span>
                        {course.oldPrice && (
                            <span className="text-lg line-through text-gray-400">
                                {course.oldPrice}
                            </span>
                        )}
                        {course.discount && (
                            <span className="text-lg font-medium text-green-600">
                                {course.discount}
                            </span>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">{course.description}</p>

                    {/* What you'll learn */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">
                            What you’ll learn
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            {course.learn.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Enroll button */}
                    <button
                        onClick={() => navigate("/lecture")}
                        className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition"
                    >
                        Enroll Now
                    </button>
                </div>

            </main>
        </div>
    );
};

export default CourseDetails;
