import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import HRNavbar from "./HRNavbar";

const HRManagement = () => {
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
            <HRNavbar />
            <section className="flex w-full">
                <div
                    className={`bg-[#FFFFFF] md:w-2/12 duration-300 min-h-screen shadow-md justify-center 
            ease-in-out ${open ? "w-9/12" : "hidden md:flex"}`}
                >
                    <div className="md:mx-2 lg:mx-4">
                    
                    <NavLink to="hrLeaveRequest">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>Leave Request</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="employeeManagement">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>Management</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="hrPerformance">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>Performance</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="hrPayroll">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>Payroll</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="hrEmployeeDetails">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span className="whitespace-nowrap">Employee Details</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="hrVacancy">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>Vacancy</span>
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="hrJoining">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive
                                            ? "flex  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded bg-custom-cyan-100 border-l-4 border-blue-400"
                                            : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                                    }
                                >
                                    <span>Joining</span>
                                </span>
                            )}
                        </NavLink>
                        
                        {/* <Link
                            to=""
                            className="flex bg-custom-gray my-4 px-6 py-2 duration-300 transition cursor-pointer rounded hover:bg-custom-cyan-100"
                        >
                            Leave Request
                        </Link> */}
                        {/* <Link
                            to="employeeManagement"
                            className="flex bg-custom-gray my-4 px-6 py-2 duration-300 transition  cursor-pointer rounded hover:bg-custom-cyan-100"
                        >
                            Management
                        </Link> */}
                        {/* <Link
                            to="hrPerformance"
                            className="flex my-4 bg-custom-gray duration-300 px-6 py-2 transition cursor-pointer rounded hover:bg-custom-cyan-100 whitespace-nowrap"
                        >
                            Performance
                        </Link> */}
                        {/* <Link
                            to="hrPayroll"
                            className="flex bg-custom-gray my-4 px-6 py-2 duration-300 transition cursor-pointer rounded hover:bg-custom-cyan-100"
                        >
                            Payroll
                        </Link> */}
                        {/* <Link
                            to="hrEmployeeDetails"
                            className="flex my-4 bg-custom-gray duration-300 px-6 py-2 transition cursor-pointer rounded hover:bg-custom-cyan-100 whitespace-nowrap"
                        >
                            Employee Details
                        </Link> */}
                        {/* <Link
                            to="hrVacancy"
                            className="flex bg-custom-gray my-4 px-6 py-2 duration-300 transition cursor-pointer rounded hover:bg-custom-cyan-100 whitespace-nowrap"
                        >
                            Vacancy
                        </Link> */}
                        {/* <Link
                            to="hrJoining"
                            className="flex my-4 bg-custom-gray duration-300 px-6 py-2 transition cursor-pointer rounded hover:bg-custom-cyan-100 "
                        >
                            Joining
                        </Link> */}
                        {/* <Link
                        to="vendor"
                        className="flex bg-custom-gray my-4 px-6 py-2 duration-300 transition cursor-pointer rounded hover:bg-custom-cyan-100"
                    >
                        Vendor
                    </Link> */}
                        {/* <Link
                        to="purchaseOrder"
                        className="flex my-4 bg-custom-gray duration-300 px-6 py-2 transition cursor-pointer rounded hover:bg-custom-cyan-100 whitespace-nowrap"
                    >
                        Purchase order
                    </Link> */}
                        {/* <Link
                        to="bill"
                        className="flex bg-custom-gray my-4 px-6 py-2 duration-300 transition cursor-pointer rounded hover:bg-custom-cyan-100"
                    >
                        Bill
                    </Link> */}
                    </div>
                </div>
                <div className="px-3 overflow-auto w-full">
                    <Outlet />
                </div>
            </section>
        </div>
    );
};

export default HRManagement;
