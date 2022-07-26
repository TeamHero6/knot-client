import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Faq = () => {
    return (
        <div>
            <div>
                <section className="flex justify-between px-8 h-[80px] items-center lg:px-12 bg-cyan-400">
                    <div className=" hidden md:flex">
                        <p className="mx-4 text-sm py-2 text-gray-100 font-semibold">
                            Help Center
                        </p>
                        <p className="mx-4 text-sm py-2 text-gray-200">
                            Help topics
                        </p>
                        <p className="mx-4 text-sm py-2 text-gray-200">
                            Guides
                        </p>
                        <p className="border-2 border-gray-200 text-gray-200 bg-transparent mx-4 py-2 rounded-full px-4 hover:bg-white hover:text-cyan-400 hover:border-gray-100 duration-300 cursor-pointer">
                            Contact us
                        </p>
                    </div>
                    <div>
                        <div class="dropdown dropdown-end">
                            <label
                                tabindex="0"
                                class="btn btn-ghost btn-circle avatar"
                            >
                                <div class="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul
                                tabindex="0"
                                class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <a class="justify-between">
                                        Profile
                                        <span class="badge">New</span>
                                    </a>
                                </li>
                                <li>
                                    <a>Settings</a>
                                </li>
                                <li>
                                    <p>Logout</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className=" md:flex md:justify-between py-28 px-8 lg:px-12 bg-cyan-400">
                    <div>
                        <h1 className="text-4xl font-semibold">
                            Hi <span className="text-white">@Monir100</span>,{" "}
                            <br />
                            How can we help?
                        </h1>
                    </div>
                    <div className="border-b-2 border-white flex items-center rounded-full h-[50px] px-12 mt-32 md:mt-0">
                        <input
                            type="text"
                            name="faq"
                            id=""
                            className="bg-transparent flex-1 w-full outline-none text-gray-400"
                            placeholder="Search"
                        />{" "}
                        <button>
                            <FaSearch className="text-gray-400" />
                        </button>
                    </div>
                </section>
            </div>{" "}
            {/*FAQ Header*/}
            {/* //Dashboard */}
            <section className="w-full flex my-12">
                <div className="text-gray-500 w-1/3 text-center">
                    <Link to="/FAQ">
                        <p>Account</p>
                    </Link>
                    <Link to="safetyandsecuirity">
                        <p>Safety and security</p>
                    </Link>
                    <Link to="rules&politics">
                        <p>Rules and politics</p>
                    </Link>
                </div>
                <div>
                    <Outlet />
                </div>
            </section>
        </div>
    );
};

export default Faq;
