import React from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';

const UserNavbar = () => {
    return (
        <div>
            <div className='flex justify-between  border-b border-gray-600'>
                <div className='bg-[#EEEEEE] text-[#0182BE] w-52'>
                    <h1 className='md:text-xl px-5 py-4'>User Dashboard</h1>
                </div>
                <div className='flex py-4'>
                    <p className='md:text-xl flex justify-center'><AiFillClockCircle className='m-1 text-[#0182BE]'></AiFillClockCircle>8:20PM</p>
                    <p className='md:mx-20 mx-4 md:text-xl flex'>User Name <BiUserCircle className='m-1 text-[#0182BE]'></BiUserCircle></p>
                </div>
            </div>
        </div>
    );
};

export default UserNavbar;