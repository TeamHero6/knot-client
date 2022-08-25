import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../Assets/logo/KnotLogo.png";
import auth from "../../../firebase.init";
import { logout } from "../../../Redux/Auth/authAction";

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const [userProfile, setuserprofile] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //use Info from Redux
    const authInfo = useSelector((state) => state.auth);
    useEffect(() => {
        if (authInfo.loggerInfo !== null) {
            const { userPhoto } = authInfo?.loggerInfo;
            setuserprofile(userPhoto);
        }
    }, [authInfo]);

    const handleLogout = () => {
        dispatch(logout());
        signOut(auth);
        navigate("/");
    };

    //Sign out user
    if (loading) {
        return;
    }
    return (
        <div className="relative ">
            <div className="navbar md:px-8 lg:px-12 bg-white h-[80px]">
                <div className="navbar-start">
                    <div className="dropdown relative">
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
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-green-400 text-white px-4 py-1 rounded-md"
                                            : "text-green-400 hover:bg-green-400 hover:text-white rounded-md px-4 py-2"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/accessApps"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-green-400 text-white px-4 py-1 rounded-md"
                                            : "text-green-400 hover:bg-green-400 hover:text-white px-4 py-2"
                                    }
                                >
                                    Access your apps
                                </NavLink>
                            </li>
                            {/*Login Button for small device*/}
                            {!user && (
                                <NavLink
                                    to="/BusinessLogin"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-green-400 text-white px-2 mx-1 py-2 rounded-md"
                                            : "bg-green-400 text-white px-2 mx-1 py-2 rounded-md"
                                    }
                                >
                                    Login
                                </NavLink>
                            )}
                            {user && (
                                <NavLink
                                    to="/settings/profile"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-green-400 text-white px-4 py-1 rounded-md"
                                            : "text-green-400 hover:bg-green-400 text-sm hover:text-white px-4 py-2 rounded-md"
                                    }
                                >
                                    Profile
                                </NavLink>
                            )}
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
                <div className="navbar-end">
                    <div className="hidden lg:flex items-center">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-green-400 text-white py-2 px-2 rounded-md mx-1"
                                    : "text-green-400 hover:bg-green-400 hover:text-white px-2 py-2 rounded-md mx-1"
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/accessApps"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-green-400 text-white px-2 py-2 rounded-md mx-1"
                                    : "text-green-400 hover:bg-green-400 hover:text-white rounded-md px-2 py-2 mx-1"
                            }
                        >
                            Access your apps
                        </NavLink>
                        <div>
                            {user ? (
                                <div className="dropdown dropdown-end">
                                    <label
                                        tabindex="0"
                                        className="btn btn-ghost btn-circle avatar"
                                    >
                                        <div className="w-10 rounded-full">
                                            <img
                                                src={`${
                                                    userProfile
                                                        ? userProfile
                                                        : "https://placeimg.com/80/80/people"
                                                }`}
                                                alt=""
                                            />
                                        </div>
                                    </label>
                                    <ul
                                        tabindex="0"
                                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                                    >
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">
                                                    New
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <Link to="/settings/profile">
                                                Setting
                                            </Link>
                                        </li>
                                        <li>
                                            <button onClick={handleLogout}>
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <NavLink
                                    to="/BusinessLogin"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-green-400 text-white px-2 mx-1 py-2 rounded-md"
                                            : "bg-green-400 text-white px-2 mx-1 py-2 rounded-md"
                                    }
                                >
                                    Login
                                </NavLink>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
