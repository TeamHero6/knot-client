import React from "react";
import { Link } from "react-router-dom";
import crm from "../../../../Assets/icons/Featued icon/crm.png";
import finance from "../../../../Assets/icons/financereport.png";
import liveChat from "../../../../Assets/icons/livechat.png";
import marketing from "../../../../Assets/icons/marketing-automation.png";
import sales2 from "../../../../Assets/icons/sales2.png";

const FeaturedApp = () => {
    return (
        <div className="lg:px-12">
            <p className="my-3 tracking-widest text-gray-400 text-sm text-center">
                Magnificent Features
            </p>
            <section className="grid w-[100%] mx-auto mb-20 md:mb-36 md:w-[90%] grid-cols-1 md:grid-cols-2 items-center bg-cyan-100 md:bg-gradient-to-r from-cyan-200 via-white to-white rounded-md">
                <section className="md:flex md:items-center">
                    <div className="hidden md:block">
                        <img
                            src={crm}
                            className="w-20 md:ml-20 flex justify-center"
                            alt=""
                        />
                    </div>
                    <div className="text-center md:text-left w-[100%] md:w-[60%] px-0 lg:px-4 mx-auto my-10 md:my-0">
                        <h3 className="font-semibold text-xl my-2">
                            Complete CRM Platform
                        </h3>
                        <p className="my-4 mb-8">
                            End-to-end, fully customizable CRM solution for
                            growing business and enterprises
                        </p>
                        <Link
                            to="/learnMore"
                            className="bg-red-500 text-white font-semibold px-2 py-1 lg:px-4 lg:py-2 hover:bg-red-400"
                        >
                            LEARN MORE
                        </Link>
                    </div>
                </section>
                <div className="text-start">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="text-center sm:border-t-[1px] md:border-t-[0px] md:border-r-[1px] md:border-b-[1px] py-6 lg:py-14 border-gray-200 w-[100%] mx-auto flex justify-center items-center">
                            <div className="flex items-center">
                                <section>
                                    <img
                                        src={sales2}
                                        className="w-14 mr-2"
                                        alt=""
                                    />
                                </section>
                                <section className="text-left mt-3 ml-1">
                                    <h3>Sales</h3>
                                    <p className="mb-4">Tracking Tool</p>
                                    <p className="bg-transparent border-[1px] border-sky-400 text-sky-400 font-medium px-1 lg:px-4 py-2   transform  duration-[.7s] transition-all text-sm lg:text-md">
                                        LEARN MORE
                                    </p>
                                </section>
                            </div>
                        </div>
                        <div className="text-center  md:border-b-[1px] py-6 lg:py-14 border-gray-200 flex justify-center items-center">
                            <section className="flex items-center justify-evenly">
                                <div>
                                    <img
                                        src={finance}
                                        className="w-14 mr-2"
                                        alt=""
                                    />
                                </div>
                                <div className="text-left mt-3 ml-1">
                                    <h3>Finance</h3>
                                    <p className="mb-4">Tracking Tool</p>
                                    <p className="bg-transparent border-[1px] border-sky-400 text-sky-400 font-medium px-1 lg:px-4 py-2   transform  duration-[.7s] transition-all text-sm lg:text-md">
                                        LEARN MORE
                                    </p>
                                </div>
                            </section>
                        </div>
                        <div className="text-center border-r-[1px] py-6 lg:py-14 border-gray-200 flex justify-center items-center">
                            <section className="flex items-center justify-evenly">
                                <div>
                                    <img
                                        src={marketing}
                                        className="w-14 mr-2"
                                        alt=""
                                    />
                                </div>
                                <div className="text-left mt-3 ml-1">
                                    <h3>Marketing</h3>
                                    <p className="mb-4">Automation Tool</p>
                                    <p className="bg-transparent border-[1px] border-sky-400 text-sky-400 font-medium px-1 lg:px-4 py-2   transform  duration-[.7s] transition-all text-sm lg:text-md">
                                        LEARN MORE
                                    </p>
                                </div>
                            </section>
                        </div>
                        <div className="text-center py-6 lg:py-14 border-gray-200 flex items-start justify-center">
                            <section className="flex items-center">
                                <div>
                                    <img
                                        src={liveChat}
                                        className="w-14 mr-2"
                                        alt=""
                                    />
                                </div>
                                <div className="text-left mt-3 ml-1">
                                    <p className="mb-4">Live Chatting</p>

                                    <p className="bg-transparent border-[1px] border-sky-400 text-sky-400 font-medium px-1 lg:px-4 py-2   transform  duration-[.7s] transition-all text-sm lg:text-md">
                                        LEARN MORE
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturedApp;
