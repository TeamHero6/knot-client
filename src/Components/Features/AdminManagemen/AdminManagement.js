import React from "react";
import { Outlet } from "react-router-dom";
import AdminDrawer from "./AdminDrawer/AdminDrawer";
import AdminNavbar from "./AdminNavbar/AdminNavbar";

const AdminManagement = () => {
    return (
        <div>
            <AdminNavbar />
            <section className="flex w-[100%]">
                <div className="w-48 min-h-screen flex-col items-center ">
                    <AdminDrawer />
                </div>
                <div className="w-3/4">
                    <Outlet />
                </div>
            </section>
        </div>
    );
};

export default AdminManagement;
