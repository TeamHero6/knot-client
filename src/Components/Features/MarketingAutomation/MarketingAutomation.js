import React from 'react';
import { BsClockHistory } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';

const MarketingAutomation = () => {
    return (
        <div>
            <div className='px-10 flex justify-between py-4 bg-[#EEEEEE]  border-b border-gray-300'>
                <p className='text-2xl text-[#0182BE]'>Marketing Automation</p>
                <div className='flex gap-20'>
                    <div className='flex justify-center items-center gap-2 text-xl'>
                        <BsClockHistory className='text-[#0182BE]' />
                        <p>8.20 PM</p>
                    </div>
                    <div className='flex justify-center items-center text-xl gap-4'>
                        <p>User Name</p>
                        <FaRegUserCircle className='text-4xl' />
                    </div>
                </div>
            </div>
            <div class="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side ">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-[#EEEEEE] text-base-content">
                        <li className='mx-auto text-xl'>
                            <Link to=''>Email-Marketing</Link>
                        </li>
                        <li className='mx-auto text-xl'>
                            <Link to='customerListing'>Customer-Listing</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default MarketingAutomation;