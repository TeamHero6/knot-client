import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import addtask from "../../../../Assets/icons/Admin/addtask.png";
import allTask from "../../../../Assets/icons/Admin/AllTasks.png";
import report from "../../../../Assets/icons/Admin/report.png";
import controll from "../../../../Assets/icons/control.png";
import logo from "../../../../Assets/logo/KnotLogo.png";

const AdminDashboard = () => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const menus = [
        { id: 1, title: "Daily Task", icon: allTask, link: "" },
        { id: 2, title: "Add Task", icon: addtask, link: "addTask" },
        { id: 3, title: "Report", icon: report, link: "report" },
    ];
    return (
        <section className="flex ">
            <div
                className={`${
                    open ? "w-72" : "w-20"
                } min-h-screen bg-cyan-400 pt-8 p-5 text-white relative origin-left duration-300`}
            >
                <img
                    src={controll}
                    className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-cyan-400 ${
                        !open && "rotate-180"
                    }`}
                    alt=""
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src={logo}
                        alt=""
                        className={`cursor-pointer duration-500 w-20`}
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-300 ${
                            !open && "scale-0"
                        }`}
                    >
                        Admin
                    </h1>
                </div>
                <ul className="pt-6">
                    {menus.map((menu) => (
                        <>
                            <li
                                className="text-gray-100 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md hover:text-cyan-400"
                                onClick={() => navigate(menu?.link)}
                            >
                                <img src={menu.icon} className="w-10" alt="" />
                                <span
                                    className={`${
                                        !open && "hidden"
                                    } origin-left duration-200`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
            <div className="min-h-screen flex-1">
                <Outlet />
            </div>
        </section>
    );
};

export default AdminDashboard;
