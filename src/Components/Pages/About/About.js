import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import topBG from "../../../Assets/images/wave.svg";
import CompanyGoals from "./CompanyGoals";
import OurTeam from "./OurTeam";
import WhatWeDo from "./WhatWeDo";

const About = () => {
    return (
        <div>
            <header className="w-[100%]" id="about">
                <img src={topBG} alt="relative" />
                <div className="absolute top-[2%] md:top-[10%] left-[45%] ">
                    <h2 className="text-xl md:text-4xl font-semibold text-white">
                        About US
                    </h2>
                </div>
            </header>
            <WhatWeDo />
            <CompanyGoals />
            <OurTeam />
            <div className="flex justify-center">
                <Link to="/">
                    <FaHome className="text-6xl mt-12 hover:text-cyan-400 duration-500" />
                </Link>
            </div>
        </div>
    );
};

export default About;
