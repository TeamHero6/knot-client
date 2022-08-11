import React from "react";
import { Link, Outlet } from "react-router-dom";
import UserNavbar from "../../Shared/UserNavbar/UserNavbar";

const UserDashboard = () => {
    return (
        <div>
            <UserNavbar />
            <div class="drawer drawer-mobile">
                <input
                    id="dashboard-sidebar"
                    type="checkbox"
                    class="drawer-toggle"
                />
                <div class="drawer-content">
                    {/* <label
                        for="my-drawer"
                        class="btn btn-xs bg-[#0182be] mt-5 ml-3 md:ml-5 drawer-button border-none"
                    >
                        <span>
                            <BiPlus></BiPlus>
                        </span>
                        <span className="capitalize"> New</span>
                    </label> */}

                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label
                        for="dashboard-sidebar"
                        class="drawer-overlay"
                    ></label>
                    <ul class="menu p-4 overflow-y-auto w-52 text-base-content gray">
                        <li>
                            <Link className="" to="/userdashboard">
                                Employee Self Services
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="attendance">
                                Attendance
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="performance">
                                Performance
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="Payrolls">
                                Payrolls
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
