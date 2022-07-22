import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="flex justify-center items-center w-full flex-1 text-center px-20 bg-gray-100 h-[100vh]">
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                <div className="w-3/5 p-5">
                    <div className="text-left font-bold">
                        <span className="text-cyan-400">Knot</span>Company
                    </div>
                    <div className="py-10">
                        <h2 className="text-3xl font-bold text-cyan-400">
                            Sign in to Account
                        </h2>
                        <div className="border-2 w-10 border-cyan-400 inline-block"></div>
                        <div className="flex justify-center items-center my-2">
                            <a
                                href="facebook.com"
                                target={"_blank"}
                                className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-cyan-400 hover:text-white duration-400 transition-all"
                            >
                                <FaFacebookF className="text-sm" />
                            </a>
                            <a
                                href="Twitter"
                                target={"_blank"}
                                className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-cyan-400 hover:text-white duration-400 transition-all"
                            >
                                <FaGoogle className="text-sm" />
                            </a>
                            <a
                                href="facebook.com"
                                target={"_blank"}
                                className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-cyan-400 hover:text-white duration-400 transition-all"
                            >
                                <FaFacebookF className="text-sm" />
                            </a>
                        </div>{" "}
                        {/* Social Login section */}
                        <p className="text-gray-400 my-3">
                            or use your email account
                        </p>
                    </div>
                </div>{" "}
                {/*Sign in section */}
                <div className="bg-cyan-400 w-2/5 p-5 text-white rounded-tr-2xl rounded-br-2xl md:py-36 md:px-12">
                    <h2 className="font-bold text-3xl mb-2">Hello, Friend!</h2>
                    <div className="border-2 w-10 border-white inline-block"></div>
                    <p className="mb-4">
                        Fill up personal information and start journey with us.
                    </p>
                    <Link
                        to="/signup"
                        className="border-2 border-white rounded-full px-12 py-2 hover:bg-white hover:text-cyan-400 duration-500 transition-all"
                    >
                        Sign Up
                    </Link>
                </div>{" "}
                {/*Sign up section */}
            </div>
        </section>
    );
};

export default Login;
