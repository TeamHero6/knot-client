import React from "react";
import topBG from "../../../Assets/images/wave.svg";
import WhatWeDo from "./WhatWeDo";

const About = () => {
    return (
        <div>
            <header className="w-[100%]">
                <img src={topBG} alt="relative" />
                <div className="absolute top-[2%] md:top-[10%] left-[45%] ">
                    <h2 className="text-xl md:text-4xl font-semibold text-white">
                        About US
                    </h2>
                </div>
            </header>
            <WhatWeDo />
        </div>
    );
};

export default About;
