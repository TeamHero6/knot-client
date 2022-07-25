import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Hrdashboard.css'

const Hrdashboard = () => {
    return (
        <div>
            <div className='flex'>
                    <div className='gray w-48'>
                    <h2 className='text-2xl font-bold dash_color'>HR Management</h2>
                    </div>
                    <div>
                        <h3>something</h3>
                    </div>
                </div>
            <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h3>Hello</h3>
                
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">DashBoard</Link></li>
                   
                </ul>

            </div>
        </div>
        </div>
    );
};

export default Hrdashboard;