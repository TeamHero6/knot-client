import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Plug from '../Assets/icons/Plug.png'
import logo from "../Assets/logo/KnotLogo.png";

const NotFoundPage = () => {
    return (
        <div >
            <div className="flex justify-between items-center py-3 md:px-8 lg:px-12 bg-cyan-400">
                <div>
                    <Link to='/'>
                        <img
                            src={logo}
                            className="w-20 p-1 md:w-20 md:p-2"
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className="hidden lg:block">
                    <Link
                        to="/contactus"
                        className="text-gray-200 border-2 border-gray-200 px-3 py-1 rounded-full mx-2 hover:bg-white duration-300 hover:border-white outline-none hover:text-cyan-400"
                    >
                        Contact us
                    </Link>
                </div>
            </div>
            <div className='mt-[25vh]'>
                <div className='text-center'>
                    <h1 className='text-8xl text-[#39498E] font-extrabold'>404</h1>
                    <p className='text-red-600 text-xl'>Page Not Found</p>
                </div>
                <div>
                    <img className='mx-auto px-5' src={Plug} alt="" />
                </div>
                <div className='text-center'>
                    <p className='font-medium text-blue-500'>We're sorry the page your requested could not be found <br /> please go back to homepage</p>
                    <div className='flex  justify-center'>
                        <Link className='flex items-center border border-blue-600 px-3 py-2 mt-5 rounded-sm text-blue-600 gap-2' to='/'>
                            <div><AiOutlineHome /></div>
                            <div>GO HOME</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;