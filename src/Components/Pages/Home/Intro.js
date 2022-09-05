import React from "react";
import IntroImg from "../../../Image/Image/Intro.png";
import "../../Pages/Style/Style.css";

const Intro = () => {
    return (
        <div className="w-[90%] mx-auto mt-20 md:mt-48">
            <section className="text-[#333333] text-[24px] font-semibold mb-6 mt-12 text-center">
                <h1 className="hidden md:block">
                    Manage Your Investments Easily And Effectively
                </h1>
            </section>
            <section className="md:flex md:justify-center">
                <div className="sm:max-w-sm md:w-[500px] md:mr-8 lg:mr-20">
                    <img src={IntroImg} alt="" className="w-full h-[250px]" />
                </div>

                <div className="text-left text-[#333333] px-1 w-[100%] md:max-w-md">
                    <h2 className="font-semibold py-4 text-xl md:text-2xl">
                        Knot with clients
                    </h2>
                    <p className="text-sm md:text-lg">
                        We help organizations work smarter and grow faster.
                        Reach out to us to build effective organizations, reduce
                        costs, manage risk and regulation leverage talent.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Intro;
