import { useQuery } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../Assets/logo/KnotLogo.png";
import auth from "../../../firebase.init";
import { logout } from "../../../Redux/Auth/authAction";
import { NotifiyStatusUpdate } from "../../../Redux/notification/NotificationAction";
import Notification from "../Notification/Notification";

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const [userProfile, setuserprofile] = useState("");
    const [userEmail, setUserEmail] = useState("");
    // const [notification, setNotification] = useState([]);
    const [unseenNotify, setUnseenNotify] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // get all notification
    // useEffect(() => {
    //     fetch(`https://knot-business-solution-server.herokuapp.com/getNotification/${userEmail}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setNotification(data);
    //             const unseen = data.filter((n) => !n.seen);
    //             setUnseenNotify(unseen.length);
    //         });
    // }, [userEmail]);

    const {
        data: notification,
        isLoading,
        refetch,
    } = useQuery(["notification", userEmail], () =>
        fetch(
            `https://knot-business-solution-server.herokuapp.com/getNotification/${userEmail}`
        ).then((res) => res.json())
    );

    useEffect(() => {
        const unseen = notification?.filter((n) => !n.seen);
        setUnseenNotify(unseen?.length);
    }, [notification]);

    // get redux state
    const isOpen = useSelector((state) => state.notification.isOpen);
    //use Info from Redux
    const authInfo = useSelector((state) => state.auth);
    useEffect(() => {
        if (authInfo.loggerInfo !== null) {
            const { userPhoto, email } = authInfo?.loggerInfo;
            setuserprofile(userPhoto);
            setUserEmail(email);
        }
    }, [authInfo]);
    console.log(authInfo);

    const handleLogout = () => {
        dispatch(logout());
        signOut(auth);
        navigate("/");
    };

    // handle Notification handler
    const handleNotificationHandler = () => {
        dispatch(NotifiyStatusUpdate(!isOpen));
    };

    if (isLoading || loading) {
        return;
    }

    return (
        <div className="relative">
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
                                            ? "bg-green-400 text-white py-2 px-2 rounded-md mx-1"
                                            : "text-green-400  px-2 py-2 rounded-md mx-1"
                                    }
                                >
                                    Pricing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/FAQ"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-green-400 text-white py-2 px-2 rounded-md mx-1"
                                            : "text-green-400  px-2 py-2 rounded-md mx-1"
                                    }
                                >
                                    Support
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-green-400 text-white px-4 py-1 rounded-md"
                                            : "text-green-400  rounded-md px-4 py-2"
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
                                            : "text-green-400  px-4 py-2"
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
                    <div className="ml-auto md:ml-0 hidden md:block">
                        <a href="/">
                            <img
                                src={logo}
                                className="w-20 p-1 md:w-36 md:p-2"
                                alt="logo"
                            />
                        </a>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="ml-auto md:hidden">
                        <a href="/">
                            <img
                                src={logo}
                                className="w-20 p-1 md:w-36 md:p-2"
                                alt="logo"
                            />
                        </a>
                    </div>
                    <div className="hidden lg:flex items-center">
                        <div className="hidden md:flex items-center">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-green-400 text-white py-2 px-2 rounded-md mx-1"
                                        : "text-green-400  px-2 py-2 rounded-md mx-1"
                                }
                            >
                                Pricing
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-green-400 text-white py-2 px-2 rounded-md mx-1"
                                        : "text-green-400  px-2 py-2 rounded-md mx-1"
                                }
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/FAQ"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-green-400 text-white py-2 px-2 rounded-md mx-1"
                                        : "text-green-400  px-2 py-2 rounded-md mx-1"
                                }
                            >
                                Support
                            </NavLink>
                            <NavLink
                                to="/accessApps"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-green-400 text-white px-2 py-2 rounded-md mx-1"
                                        : "text-green-400  rounded-md px-2 py-2 mx-1"
                                }
                            >
                                Access your apps
                            </NavLink>
                            {user && (
                                <NavLink
                                    to=""
                                    onClick={handleNotificationHandler}
                                    className={({ isActive }) =>
                                        isActive
                                            ? " px-2 py-2 rounded-md mx-1"
                                            : " rounded-full px-2 py-2 mx-1"
                                    }
                                >
                                    <span className="relative">
                                        <sup className="absolute right-0">
                                            {unseenNotify ? unseenNotify : 0}
                                        </sup>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class=""
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                        </svg>
                                    </span>
                                </NavLink>
                            )}
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
                                                    Settings
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
            {isOpen && (
                <Notification {...{ notification, refetch, userEmail }} />
            )}
        </div>
    );
};

export default Navbar;
