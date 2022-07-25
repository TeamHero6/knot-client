import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Hrdashboard.css'

const Hrdashboard = () => {
    return (
        <div>
            <div className='flex border-b border-gray-600'>
                <div className='gray w-56 p-4'>
                    <h2 className='text-2xl font-bold dash_color'>HR Management</h2>
                </div>
                <div>

                </div>
            </div>

            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">

                    <div className='pt-5'>
                        <h1 className='text-2xl text-center font-bold'>Employee Database</h1>
                        <div className='grid grid-cols-3 gap-5 mt-5 p-5'>
                            <div className='gray pb-3'>
                                <div class="w-24 h-24 rounded-full bg-white mx-auto text-center pt-3 mt-4 border-4 border-indigo-500/100">
                                    <span className='font-medium'>Total
                                        Employees
                                        12</span>
                                </div>
                                <h3 className='text-center font-medium pt-3'>Employee By Gender</h3>
                            </div>
                            <div className='gray pb-3'>
                                <div class="w-24 h-24 rounded-full bg-white mx-auto text-center pt-3 mt-4 border-4 border-indigo-500/100">
                                    <span className='font-medium'>HR <br /> 8</span>
                                </div>
                                <h3 className='text-center font-medium pt-3'>Employee By Department</h3>
                            </div>
                            <div className='gray pb-3'>
                                <div class="w-24 h-24 rounded-full bg-white mx-auto text-center pt-3 mt-4 border-4 border-indigo-500/100">
                                <span className='font-medium'>CEO <br />1</span>
                                </div>
                                <h3 className='text-center font-medium pt-3'>Employee By Designation</h3>
                            </div>

                        </div>
                    </div>

                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-56 text-base-content gray">
                        <li><Link className='font-bold' to="/hrDashboard">DashBoard</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Hrdashboard;