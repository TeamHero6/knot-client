import { motion } from "framer-motion";
import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import topBG from "../../../Assets/images/wave.svg";
import OurTeam from "../../../FromSample/OurTeam";
import CompanyGoals from "./CompanyGoals";
// import OurTeam from "./OurTeam";
import WhatWeDo from "./WhatWeDo";

const About = () => {
    return (
        <div>
            <motion.header
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 1, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="w-[100%]"
                id="about"
            >
                <motion.img
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 1, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    src={topBG}
                    alt="relative"
                />
                <div className="absolute top-[2%] md:top-[10%] left-[45%] ">
                    <h2 className="text-xl md:text-4xl font-semibold text-white">
                        About US
                    </h2>
                </div>
            </motion.header>
            <WhatWeDo />
            <CompanyGoals />
            {/* <OurTeam /> */}
            <OurTeam/>
            <div className="flex justify-center">
                <Link to="/">
                    <FaHome className="text-6xl mt-12 hover:text-cyan-400 duration-500" />
                </Link>
            </div>
        </div>
    );
};

export default About;
