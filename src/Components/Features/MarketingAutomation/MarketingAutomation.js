import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import MarketingNavbar from './MarketingNavbar';

const MarketingAutomation = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="min-h-screen bg-custom-gray">
            <span
                className="fixed block lg:hidden bottom-6 bg-custom-light-gray p-3 hover:bg-custom-green hover:text-custom-light-gray duration-300 shadow-sm rounded-full right-3 hover:shadow-lg"
                onClick={() => setOpen(!open)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-expand"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
                    />
                </svg>
            </span>
            <MarketingNavbar></MarketingNavbar>
            <section className="flex w-full">
                <div
                    className={`bg-[#FFFFFF] md:w-2/12 duration-300 min-h-screen shadow-md justify-center 
                ease-in-out ${open ? "w-9/12" : "hidden md:flex"}`}
                >
                    <div>
                        {/* <Link
                            to=""
                            className="flex my-4 mx-2 bg-custom-gray duration-300 px-6 py-2 transition cursor-pointer rounded hover:bg-custom-cyan-100 whitespace-nowrap"
                        >
                            <p>Email-Marketing</p>
                        </Link> */}
                        <NavLink to="emailMarketing">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>Email Marketing</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="customerListing">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex  my-4 pl-6 pr-5 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>Customer Listing</span>
                                </span>
                            )}
                        </NavLink>
                    </div>
                </div>
                <div className="overflow-auto w-full px-3">
                    <Outlet />
                </div>
            </section>
        </div>
    );
};

export default MarketingAutomation;