import { motion } from "framer-motion";
import React from "react";
import handleBusiness from "../../../Assets/images/undraw_engineering_team_re_fvat.svg";

const WhatWeDo = () => {
    return (
        <section className="md:flex md:justify-center md:align-center w-full h-auto md:px-8 lg:px-12 mt-12">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 1 }}
                className="text-left w-[100%] flex flex-col justify-center  md:w-1/2 px-4"
            >
                <h2 className="text-4xl font-bold tracking-wide mb-4 text-blue-500">
                    Our Goal
                </h2>
                <p>
                We build to make your business Secure, Straightforward, and Simple. KNOT is a powerful user-friendly software to run your entire business. KNOT will help to get the best out of your customer-facing teams with Marketing Automation, Finance Tracking Tool, Task Management, and more. It will work as your Virtual Business Manager. Customers can interact with your team through the Live Chatting service. Our job is to help you to grow your dream business with acceleration.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, transition: 2, x: 1 }}
                exit={{ opacity: 0, x: 150 }}
                className="w-[100%] md:w-1/2 mt-6 md:mt-0"
            >
                <img src={handleBusiness} className="w-full" alt="" />
            </motion.div>
        </section>
    );
};

export default WhatWeDo;
