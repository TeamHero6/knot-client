import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import UserNavbar from '../../Shared/UserNavbar/UserNavbar';

const UserDashboard = () => {

    return (
        <div>
            <UserNavbar></UserNavbar>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-52 text-base-content gray">
                        <li>
                            <Link className='' to="/userdashboard">
                                Leave Request</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
