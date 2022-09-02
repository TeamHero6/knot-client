import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { RotatingSquare } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import access from "../../../Assets/icons/Dashboard/access.svg";
import auth from "../../../firebase.init";
import DigitalClock from "../../Shared/DigitalClock/DigitalClock";

const LiveChatNavbar = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    // Getting all neccasary user information from redux store
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyLogo, userPhoto } = loggerInfo;

    // sign out handler
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
    };

    //Sign out user
    if (loading) {
        return;
    }

    return (
        <div className="h-[60px] w-full flex items-center justify-between bg-[#FFFFFF] mb-3 shadow-md">
            <div className="flex items-center w-auto px-3 md:w-64 justify-center cursor-pointer">
                <div
                    className="flex justify-center items-center gap-5"
                    onClick={() => navigate("/")}
                >
                    <span>
                        <img
                            src={companyLogo}
                            className="w-6/12 ml-10 mr-2"
                            alt=""
                        />
                    </span>
                    <span className="whitespace-nowrap">Group Chat</span>
                </div>
            </div>

            {/*Profile DropDown*/}
            <div className="">
                {user ? (
                    <div className="px-3 flex items-center gap-4">
                        <div className="hover:bg-custom-cyan-100 p-2 rounded-full duration-500">
                            <Link to="/accessApps">
                                <img
                                    src={access}
                                    className={`w-6`}
                                    alt="icon"
                                />
                            </Link>
                        </div>
                        <div className="hidden lg:block">
                            <p className="text-xl font-medium">
                                <DigitalClock></DigitalClock>
                            </p>
                        </div>
                        <div className="dropdown dropdown-end">
                            <label
                                tabIndex="0"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                {loading ? (
                                    <>
                                        <RotatingSquare
                                            height="50"
                                            width="50"
                                            color="#67E8F9"
                                            ariaLabel="rotating-square-loading"
                                            strokeWidth="4"
                                            wrapperStyle={{}}
                                            wrapperclassName=""
                                            visible={true}
                                        />
                                    </>
                                ) : (
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
                                )}
                            </label>
                            <ul
                                tabIndex="0"
                                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <Link to="/settings/profile">Profile</Link>
                                </li>
                                <li>
                                    <p onClick={handleSignOut}>Logout</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <Link to="/BusinessSignUp" className="px-4 text-green-500">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default LiveChatNavbar;
