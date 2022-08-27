import { motion } from "framer-motion";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import FeaturedApp from "../FeaturedApp/FeaturedApp";

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    return (
        <div>
            <div className="w-[100%] md:w-[80%] lg:w-[70%] mx-auto mb-12 md:mb-32 px-1 md:px-0 text-center">
                <motion.h1
                    animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-5xl mt-12 md:mt-20 font-semibold"
                >
                    Life is Easy With Powerful Business Management Tools
                </motion.h1>
                <motion.p
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm md:text-xl px-8 mt-4"
                >
                    Unique and powerful tools make it easy for office management
                    for your entire business. Manage all the official work in
                    one place to make life easier and ignore office complexity.
                    your time is too much important for grow up your business
                    and goal.
                </motion.p>
                {!user && (
                    <div className="flex-col md:flex-col-reverse w-full md:justify-center mt-12">
                        <button
                            className="px-8 py-3 bg-cyan-400 hover:bg-cyan-500 text-white mx-1 my-2 rounded-md"
                            onClick={() => navigate("/BusinessSignUp")}
                        >
                            Get Started
                        </button>
                        <button className="px-8 py-3 my-1 border-2 text-cyan-400 hover:bg-cyan-400 hover:text-white duration-300 transition-all rounded-md mx-2">
                            Learn More
                        </button>
                    </div>
                )}
            </div>
            <FeaturedApp />
        </div>
    );
};

export default Header;
