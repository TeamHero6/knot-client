import React from "react";
import handleLaunchMaker from "../../../Assets/images/undraw_maker_launch_re_rq81.svg";

const CompanyGoals = () => {
    return (
        <section className="flex flex-col md:flex-row-reverse md:justify-center md:align-center w-full min-h-screen md:px-8 lg:px-12 mt-12">
            <div className="text-left w-[100%] flex flex-col justify-center  md:w-1/2 px-4">
                <h2 className="text-2xl font-bold tracking-wide mb-4 text-blue-500">
                    Mission
                </h2>
                <p>
                    Our developers are passionate to eliminate all types of challenges a businessman could face in the starting of his business or at any stage of the business. We do that by adding new technology to our project. We work to make our features extraordinary and make them user-friendly. Our research is ongoing on every possible sector of a business. Every day we join to break down business challenges and make the business process as simple as it should be.
                </p>
                <h2 className="text-2xl font-bold tracking-wide mb-4 text-orange-500 mt-5">
                    Vision
                </h2>
                <p>
                    Our vision is to create a simple, user-friendly, flexible, customizable, and most effective solution for any type of business whether it is small or giant. A world where no one needs to think about how to start his dream business or how to manage everything. We will provide every type of tool that a businessman wants to make his dream true and succeed.
                </p>
            </div>
            <div className="w-[100%] md:w-1/2 mt-6 md:mt-0 flex justify-center items-center">
                <img src={handleLaunchMaker} className="w-full" alt="" />
            </div>
        </section>
    );
};

export default CompanyGoals;
