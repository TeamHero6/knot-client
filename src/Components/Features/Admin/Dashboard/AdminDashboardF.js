import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import taskIc from "../../../../Assets/task1.png";
import organizeIc from "../../../../Assets/teamOrganize.png";
import ExNavbar from "../../../ExampleDesign/ExNavbar";

const AdminDashboardF = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="min-h-screen bg-custom-gray">
            <span
                className="fixed block md:hidden bottom-6 bg-custom-light-gray p-3 hover:bg-custom-green hover:text-custom-light-gray duration-300 shadow-sm rounded-full right-6 border-2 border-green-400 hover:shadow-lg z-50"
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
            <ExNavbar />
            <section className="flex w-full">
                <div
                    className={`bg-[#FFFFFF] md:w-2/12 duration-300 min-h-screen shadow-md justify-center 
                ease-in-out ${open ? "w-9/12" : "hidden md:flex"}`}
                >
                    <div>
                        <NavLink to="dailyTask">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex items-center sm:text-sm my-4 px-auto p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400 sm:max-w-sm"
                                            : "flex sm:text-sm items-center hover:bg-custom-cyan-100 bg-custom-gray my-4 px-auto p-2"
                                    }
                                >
                                    <img src={taskIc} className="w-7" alt="" />
                                    <span>Daily Task</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="teamOrganize">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex items-center sm:text-sm my-4 px-auto p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400 sm:max-w-sm"
                                            : "flex sm:text-sm items-center hover:bg-custom-cyan-100 bg-custom-gray my-4 px-auto p-2"
                                    }
                                >
                                    <span>
                                        <img
                                            src={organizeIc}
                                            className="w-7"
                                            alt=""
                                        />
                                    </span>
                                    <span>Team Organize</span>
                                </span>
                            )}
                        </NavLink>
                    </div>
                </div>
                <div className="px-3 overflow-x-auto w-full">
                    <Outlet />
                </div>
            </section>
        </div>
    );
};

export default AdminDashboardF;
