import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../Assets/logo/KnotLogo.png'
import auth from "../../firebase.init";
import DigitalClock from "../Shared/DigitalClock/DigitalClock";



const AdminNavbar = () => {
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { userPhoto } = loggerInfo;

    const navigate = useNavigate();
    // sign out handler
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
    };
    return (
        <div className=" md:px-8 lg:px-12 bg-cyan-400">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-100 rounded-box w-52"
                        >
                            <li>
                                {/* <Link
                                    to="/FAQ/Guides"
                                    className="text-cyan-400 mx-2"
                                >
                                    Guides
                                </Link> */}
                            </li>
                            <li>
                                <Link className="text-gray-200 border-2 border-gray-200 px-3 py-1 rounded-full mx-2 hover:bg-white duration-300 hover:border-white outline-none hover:text-cyan-400" to='/contactus'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    {/**/}
                    <div>
                        <img
                            src={logo}
                            className="w-20 p-1 md:w-20 md:p-2 cursor-pointer"
                            alt="logo"
                            onClick={() => navigate("/")}
                        />
                    </div>
                    {/*Nav Link*/}
                    <div className="hidden lg:block">
                        {/* <Link to="/FAQ/Guides" className="text-gray-200 mx-2">
                            Guides
                        </Link> */}

                        <Link className="text-gray-200 border-2 border-gray-200 px-3 py-1 rounded-full mx-2 hover:bg-white duration-300 hover:border-white outline-none hover:text-cyan-400" to='/contactus'>Contact Us</Link>

                    </div>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex="0"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    src={
                                        userPhoto
                                            ? userPhoto
                                            : "https://placeimg.com/80/80/people"
                                    }
                                    alt=""
                                />
                            </div>
                        </label>
                        <ul
                            tabIndex="0"
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <button
                                    className="justify-between"
                                    onClick={() =>
                                        navigate("/settings/profile")
                                    }
                                >
                                    Profile
                                </button>
                            </li>
                            <li>
                                <p onClick={() => signOut(auth)}>Logout</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNavbar;