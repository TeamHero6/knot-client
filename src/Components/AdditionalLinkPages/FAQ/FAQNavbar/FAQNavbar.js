import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../../../Assets/logo/KnotLogo.png";
import auth from "../../../../firebase.init";

const FAQNavbar = () => {
    const [user, loading, error] = useAuthState(auth);
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
                                <Link
                                    to="/FAQ"
                                    className="text-cyan-400 font-bold mx-2"
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
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex="0"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul
                            tabIndex="0"
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
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

export default FAQNavbar;
