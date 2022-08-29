import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Plug from '../Assets/icons/Plug.png'
import logo from "../Assets/logo/KnotLogo.png";

const NotFoundPage = () => {
    return (
        <div>
            <div className=" md:px-8 lg:px-12 bg-cyan-400">
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabindex="0" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabindex="0"
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-100 rounded-box w-52"
                            >
                                <li>
                                    <Link
                                        to="/FAQ"
                                        className="text-black font-bold mx-2"
                                    >
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/FAQ/Guides"
                                        className="text-cyan-400 mx-2"
                                    >
                                        Guides
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contactus"
                                        className="text-cyan-400 border-2 border-cyan-400 px-3 py-1 rounded-full mx-2 hover:bg-cyan-400 duration-300 hover:border-cyan-400 outline-none hover:text-white"
                                    >
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/**/}
                        <div>
                            <img
                                src={logo}
                                className="w-20 p-1 md:w-20 md:p-2"
                                alt="logo"
                            />
                        </div>
                        {/*Nav Link*/}
                        <div className="hidden lg:block">
                            <Link to="/FAQ" className="text-white font-bold mx-2">
                                Help Center
                            </Link>
                            <Link to="/FAQ/Guides" className="text-gray-200 mx-2">
                                Guides
                            </Link>
                            <Link
                                to="/contactus"
                                className="text-gray-200 border-2 border-gray-200 px-3 py-1 rounded-full mx-2 hover:bg-white duration-300 hover:border-white outline-none hover:text-cyan-400"
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>
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