import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import controll from "../../../../Assets/icons/control.png";

const AdminDashboard = () => {
    const [open, setOpen] = useState(true);
    return (
        <section className="flex">
            <div
                className={`${
                    open ? "w-72" : "w-20"
                } min-h-screen bg-cyan-400 text-white relative`}
            >
                <img
                    src={controll}
                    className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-cyan-400 ${
                        !open && "rotate-180"
                    }`}
                    alt=""
                    onClick={() => setOpen(!open)}
                />
            </div>
            <div className="min-h-screen flex-1">
                <Outlet />
            </div>
        </section>
    );
};

export default AdminDashboard;
