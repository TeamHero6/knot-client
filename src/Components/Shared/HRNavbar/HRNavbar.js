import React from 'react';
import { AiFillClockCircle } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

const HRNavbar = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='bg-[#EEEEEE] text-[#0182BE]'>
                    <h1 className='md:text-3xl px-3 md:px-12 py-4'>HR Management</h1>
                </div>
                <div className='flex py-4'>
                    <p className='md:text-xl flex justify-center'><AiFillClockCircle className='m-1 text-[#0182BE]'></AiFillClockCircle>8:20PM</p>
                    <p className='md:mx-20 mx-4 md:text-xl flex'>User Name <BiUserCircle className='m-1 text-[#0182BE]'></BiUserCircle></p>
                </div>
            </div>
        </div>
    );
};

export default HRNavbar;