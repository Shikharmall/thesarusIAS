import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { themeColor } from "../utils/Color";

const LoginScreen: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="flex min-h-screen bg-white">
            {/* Left Section - Signup Form */}
            <div className="flex flex-1 items-center justify-center px-6 md:px-16">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <div className="mb-8 flex items-center">
                        <div className=" rounded-lg bg-green-700 flex items-center justify-center">
                            {/* <span className="text-white font-bold text-xl">⟲</span> */}
                            <img src="../../images/thesaruslogo.jpg" className='w-15 h-15 rounded border-1 border-[#eee]' />
                        </div>
                        <h1 className="ml-3 text-xl font-semibold text-gray-700">The SARUS Learning Application</h1>
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-900">Get Started</h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Welcome to The SARUS Learning Application - Let's expore it
                    </p>

                    {/* Form */}
                    <form className="mt-8 space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="hi@fillianta.com"
                                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#072c73] focus:outline-none focus:ring-1 focus:ring-[#072c73]"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <a
                                    href="#"
                                    className="text-sm font-medium"
                                    style={{ color: themeColor.primary }}
                                >
                                    Forgot?
                                </a>
                            </div>
                            <input
                                id="password"
                                type="password"
                                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#072c73] focus:outline-none focus:ring-1 focus:ring-[#072c73]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-md py-2 text-white font-medium shadow-md hover:opacity-90 transition cursor-pointer"
                            style={{ background: "linear-gradient(to right, #072c73, #0ab7f3)", }}
                            onClick={() => navigate("/home")}
                        //className="w-full rounded-md bg-gradient-to-r from-green-900 to-green-600 py-2 text-white font-medium shadow-md hover:opacity-90 transition"
                        >
                            Login
                        </button>
                    </form>

                    <p className="mt-6 text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link to={'/register'} className="hover:text-green-700 font-medium" style={{
                            color: themeColor.primary
                        }}>
                            Register
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right Section - Marketing Panel */}
            <div className="hidden md:flex flex-1 bg-gradient-to-br from-[#0ab7f3] to-[#072c73] text-white items-center justify-center relative p-10">
                <div className="max-w-md text-center">
                    <h2 className="text-4xl font-serif italic leading-snug">
                        Enter the Future
                    </h2>
                    <h2 className="text-4xl font-bold leading-snug mt-1">
                        of Payments, today
                    </h2>

                    {/* Card Mockup */}
                    <div className="mt-10 flex justify-center">
                        <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6 w-72">
                            <div className="text-2xl font-bold">12,347.23 $</div>
                            <p className="text-sm text-gray-500">Combined balance</p>

                            <div className="mt-4 flex justify-between items-center">
                                <div>
                                    <p className="text-sm font-semibold">Primary Card</p>
                                    <p className="text-xs text-gray-500">3495 **** **** 6917</p>
                                </div>
                                <p className="text-lg font-semibold">2,546.64 $</p>
                            </div>

                            <div className="mt-6 flex justify-between items-center">
                                <span className="text-sm font-semibold text-gray-600">VISA</span>
                                <button className="rounded-md bg-green-700 text-white px-3 py-1 text-xs hover:bg-green-800">
                                    View All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
