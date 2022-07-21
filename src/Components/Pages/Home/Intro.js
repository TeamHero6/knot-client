import React from "react";
import IntroImg from "../../../Image/Image/Intro.png";
import "../../Pages/Style/Style.css";

const Intro = () => {
    return (
        <div className="w-[80%] mx-auto mt-20 md:mt-36">
            <section className="text-[#333333] text-[24px] font-semibold mb-6 mt-12 text-center">
                <h1>Trusted by more than 15 million users globally</h1>
            </section>
            <section className=" md:flex md:justify-center">
                <div className="sm:max-w-sm md:w-[500px] md:mr-12 lg:mr-20">
                    <img src={IntroImg} alt="" />
                </div>

                <div className="text-left text-[#333333] text-[22px]">
                    <h2 className="font-semibold py-4">Partner with Knot</h2>
                    <p>
                        Knot partners with top notch <br /> VARs, MSPs, SIs,
                        consultants and <br /> technology partners.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Intro;
