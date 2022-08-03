import React from 'react';
import { AiFillClockCircle } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';

const HRNavbar = () => {
    return (
        <div>
            <div>
            <div className="flex justify-between  border-b border-gray-600">
                <div className="bg-[#EEEEEE] text-[#0182BE] w-52">
                    <h1 className="md:text-xl px-5 py-4">HR Management</h1>
                </div>
                <div className="flex items-center py-4">
                    <Link className='text-xl mr-4' to='/'>Home</Link>

                    <p className="md:text-xl flex justify-center items-center">
                        <AiFillClockCircle className="m-1 text-[#0182BE]"></AiFillClockCircle>
                        8:20PM
                    </p>
                    <p className="md:mx-20 mx-4 md:text-xl flex justify-center items-center">
                        User Name{" "}
                        <BiUserCircle className="m-1 text-[#0182BE]"></BiUserCircle>
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HRNavbar;