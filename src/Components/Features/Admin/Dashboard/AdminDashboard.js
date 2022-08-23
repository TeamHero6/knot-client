import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../../Shared/Navbar/Navbar";

const AdminDashboard = () => {
    return (
        <div className="relative">
            <Navbar />

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <div className="md:hidden absolute top-[3%] left-0">
                        <label
                            for="my-drawer-2"
                            className="drawer-button lg:hidden"
                        >
                            <BsArrowRightCircleFill className="text-2xl" />
                        </label>
                    </div>
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li>
                            <Link to="">Daily Task</Link>
                        </li>
                        <li>
                            <Link to="addtask">Add Task</Link>
                        </li>
                        <li>
                            <Link to="teamManagement">Team Management</Link>
                        </li>
                        <li>
                            <Link to="teamOrganize">Team Organize</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
