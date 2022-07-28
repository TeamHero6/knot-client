import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo/KnotLogo.png";
import auth from "../../../firebase.init";

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [arrow, setArrow] = useState(false);
    if (user) {
        console.log(user.displayName);
    }
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
                                <Link
                                    to="/accessApps"
                                    className="px-4 text-green-500"
                                >
                                    Access your apps
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <a href="/">
                        <img
                            src={logo}
                            className="w-20 p-1 md:w-36 md:p-2"
                            alt="logo"
                        />
                    </a>
                </div>
                <div class="navbar-end">
                    <div className="hidden lg:flex">
                        <Link to="/admin" className="px-4">
                            Admin
                        </Link>
                        <Link to="/accessApps" className="px-4 text-green-500">
                            Access your apps
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <label
                            for="my-drawer-2"
                            class="drawer-button lg:hidden"
                        >
                            <AiOutlineMenu />
                        </label>
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
                            <Link to="login" className="btn btn-sm">
                                Login
                            </Link>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
