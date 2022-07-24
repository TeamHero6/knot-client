import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className=" md:px-8 lg:px-12">
            <div class="navbar bg-base-100 ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
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
                            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="/customers">Customers</Link>
                            </li>
                            <li>
                                <Link to="/support" className="px-4">
                                    Support
                                </Link>
                            </li>
                            <li>
                                <Link to="/contactSales" className="px-4">
                                    Contact Sales
                                </Link>
                            </li>
                            <li>
                                <Link to="/events" className="px-4">
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/accessYourApps"
                                    className="px-4 text-green-500"
                                >
                                    Access your apps
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <p className="text-white text-xl md:text-3xl flex">
                        <p className="bg-red-500 px-1 origin-bottom -rotate-12 rounded-sm">
                            k
                        </p>
                        <p className="px-1 bg-green-500 origin-top-left rotate-12 rounded-sm">
                            N
                        </p>
                        <p className="px-1 bg-blue-500 origin-top-right -rotate-6 rounded-sm">
                            O
                        </p>
                        <p className="px-1 bg-yellow-500 skew-y-6 rounded-sm">
                            T
                        </p>
                    </p>
                </div>
                <div class="navbar-end">
                    <div className="hidden lg:flex">
                        <Link to="/customers" className="px-4">
                            Customers
                        </Link>
                        <Link to="/support" className="px-4">
                            Support
                        </Link>
                        <Link to="/contactSales" className="px-4">
                            Contact Sales
                        </Link>
                        <Link to="/events" className="px-4">
                            Events
                        </Link>
                        <Link
                            to="/accessYourApps"
                            className="px-4 text-green-500"
                        >
                            Access your apps
                        </Link>
                    </div>
                    <section>
                        {user ? (
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
                                        <p onClick={() => signOut(auth)}>
                                            Logout
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="login">
                                <FaUserCircle className="text-2xl ml-2" />
                            </Link>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
