import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../../Shared/Navbar/Navbar";

const AdminDashboard = () => {
    return (
        <div>
            <Navbar />
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    <Outlet />
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li>
                            <Link to="">Daily Task</Link>
                        </li>
                        <li>
                            <Link to="addtask">Add Task</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
