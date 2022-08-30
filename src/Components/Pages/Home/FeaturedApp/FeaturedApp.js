import React from "react";
import { Link } from "react-router-dom";
import crm from "../../../../Assets/icons/Featured-icon/crm.png";
import teamManagement from "../../../../Assets/homepageFeaturedAppIcon/team.png";
import hr from "../../../../Assets/homepageFeaturedAppIcon/hr.png";
import finance from "../../../../Assets/homepageFeaturedAppIcon/financeManagement.svg";
import sales from "../../../../Assets/homepageFeaturedAppIcon/sales.png";
import marketing from "../../../../Assets/homepageFeaturedAppIcon/digital-marketing.png";
import userDashboard from "../../../../Assets/homepageFeaturedAppIcon/dashboards.png";
import groupChat from "../../../../Assets/homepageFeaturedAppIcon/chat.png";
import adminManagement from "../../../../Assets/homepageFeaturedAppIcon/admin.png";

const FeaturedApp = () => {
    return (
        <div className="md:mx-12 lg:mx-20 bg-cyan-100 md:bg-gradient-to-r from-cyan-100 via-white to-cyan-100">
            <section className="w-full mx-auto py-4 rounded-md">
                <section className="w-full">
                    <div className="md:w-1/3 mx-auto">
                        <div className="md:flex justify-center hidden ">
                            <img
                                src={crm}
                                className="w-1/5"
                                alt=""
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="font-semibold text-xl">
                                Complete CRM Platform
                            </h3>
                            <p className="mb-3 mx-2">
                                End-to-end, fully customizable CRM solution for
                                growing business and enterprises
                            </p>
                            <div className="mb-2">
                                <Link
                                    to="/learnMore"
                                    className="bg-red-500 text-white font-semibold px-2 py-1 lg:px-4 lg:py-2 hover:bg-red-400"
                                >
                                    LEARN MORE
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="w-full text-start mt-4">
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                        <div className="text-center sm:border-t-[1px] md:border-t-[0px] md:border-r-[1px] md:border-b-[1px] py-2 md:py-4  border-gray-200 w-[100%] mx-auto flex justify-center items-center">
                            <div className="flex items-center">
                                <section>
                                    <img
                                        src={teamManagement}
                                        className="w-14 mr-2"
                                        alt=""
                                    />
                                </section>
                                <section className="text-left mt-3 ml-1">
                                    <h3>Team</h3>
                                    <p className="mb-1 md:mb-4">Management</p>
                                    <Link
                                        to="/teamManagementMore"
                                        className="bg-transparent border-[1px] border-sky-400 text-sky-400 font-medium px-1 lg:px-4 py-2   transform  duration-[.7s] transition-all text-sm lg:text-md">
                                        LEARN MORE
                                    </Link>
                                </section>
                            </div>
                        </div>
                        <div className="text-center md:border-b-[1px] md:border-r-[1px] py-2 md:py-4 border-gray-200 flex justify-center items-center">
                            <section className="flex items-center justify-evenly">
                                <div>
                                    <img
                                        src={hr}
                                        className="w-14 mr-2"
                                        alt=""
                                    />
                                </div>
                                <div className="text-left mt-3 ml-1">
                                    <h3>Human</h3>
                                    <p className="mb-1 md:mb-4">Resource</p>
                                    <Link
                                        to="/humanResourceMore"
                                        className="bg-transparent border-[1px] border-sky-400 text-sky-400 font-medium px-1 lg:px-4 py-2   transform  duration-[.7s] transition-all text-sm lg:text-md">
                                        LEARN MORE
                                    </Link>
                                </div>
                            </section>
                        </div>
                        <div className="text-center border-r-[1px] md:border-b-[1px] py-2 md:py-4  border-gray-200 flex justify-center items-center">
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
                                    <p className="mb-1 md:mb-4">Management</p>
                                    <Link
                                        to="/financeManagementMore"
                                        className="bg-transparent border-[1px] border-sky-400 text-sky-400 font-medium px-1 lg:px-4 py-2 transform  duration-[.7s] transition-all text-sm lg:text-md">
                                        LEARN MORE
                                    </Link>
                                </div>
                            </section>
                        </div>
                        <div className="text-center py-2 md:py-4  md:border-b-[1px] border-gray-200 flex items-start justify-center">
                            <section className="flex items-center">
                                <div>
                                    <img
                                        src={sales}
                                        className="w-14 mr-2"
                                        alt=""
                                    />
                                </div>
                                <div className="text-left mt-3 ml-1">
                                    <h3>Sales</h3>
                                    <p className="mb-1 md:mb-4">Management</p>
                                    <Link
                                        to="salesManagementMore"
                                        className="bg-transparent border-[1px] border-sky-400 text-sky-400 font-medium px-1 lg:px-4 py-2   transform  duration-[.7s] transition-all text-sm lg:text-md">
                                        LEARN MORE
                                    </Link>
                                </div>
                            </section>
                        </div>
                        <div className="text-center sm:border-t-[1px] md:border-t-[0px] md:border-r-[1px] md:border-b-[1px] py-2 md:py-4  border-gray-200 w-[100%] mx-auto flex justify-center items-center">
                            <div className="flex items-center">
                                <section>
                                    <img
                                        src={marketing}
                                        className="w-14 mr-2"
                                        alt=""
                                    />
                                </section>
                                <section className="text-left mt-3 ml-1">
                                    <h3>Marketing</h3>
                                    <p className="mb-1 md:mb-4">Automation</p>
                                    <Link
                                        to="/marketingAutomationMore"
                                        className="bg-transparent border-[1px] border-sky-400 text-sky-400 font-medium px-1 lg:px-4 py-2   transform  duration-[.7s] transition-all text-sm lg:text-md">
                                        LEARN MORE
                                    </Link>
                                </section>
                            </div>
                        </div>
                        <div className="text-center md:border-r-[1px] py-2 md:py-4  border-gray-200 flex justify-center items-center">
                            <section className="flex items-center justify-evenly">
                                <div>
                                    <img
                                        src={userDashboard}
                                        className="w-14 mr-2"
                                        alt=""
                                    />
                                </div>
                                <div className="text-left mt-3 ml-1">
                                    <h3>User</h3>
                                    <p className="mb-1 md:mb-4">Dashboard</p>
                                    <Link
                                        to="/userDashboardMore"
                                        className="bg-transparent border-[1px] border-sky-400 text-sky-400 font-medium px-1 lg:px-4 py-2   transform  duration-[.7s] transition-all text-sm lg:text-md">
                                        LEARN MORE
                                    </Link>
                                </div>
                            </section>
                        </div>
                        <div className="text-center md:border-r-[1px] py-2 md:py-4  border-gray-200 flex justify-center items-center">
                            <section className="flex items-center justify-evenly">
                                <div>
                                    <img
                                        src={groupChat}
                                        className="w-14 mr-2"
                                        alt=""
                                    />
                                </div>
                                <div className="text-left mt-3 ml-1">
                                    <h3>Group</h3>
                                    <p className="mb-1 md:mb-4">Chat</p>
                                    <Link
                                        to="/groupChatMore"
                                        className="bg-transparent border-[1px] border-sky-400 text-sky-400 font-medium px-1 lg:px-4 py-2   transform  duration-[.7s] transition-all text-sm lg:text-md">
                                        LEARN MORE
                                    </Link>
                                </div>
                            </section>
                        </div>
                        <div className="text-center py-2 md:py-4  border-gray-200 flex items-start justify-center">
                            <section className="flex items-center">
                                <div>
                                    <img
                                        src={adminManagement}
                                        className="w-14 mr-2"
                                        alt=""
                                    />
                                </div>
                                <div className="text-left mt-3 ml-1">
                                    <h3>Admin</h3>
                                    <p className="mb-1 md:mb-4">Management</p>
                                    <Link
                                        to="/adminManagementMore"
                                        className="bg-transparent border-[1px] border-sky-400 text-sky-400 font-medium px-1 lg:px-4 py-2   transform  duration-[.7s] transition-all text-sm lg:text-md">
                                        LEARN MORE
                                    </Link>
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
