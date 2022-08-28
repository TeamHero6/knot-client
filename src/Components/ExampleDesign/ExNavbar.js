import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import access from "../../Assets/icons/Dashboard/access.svg";
import auth from "../../firebase.init";
import DigitalClock from "../Shared/DigitalClock/DigitalClock";

const ExNavbar = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    // Getting all neccasary user information from redux store
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyLogo } = loggerInfo;

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
                    className="flex justify-center items-center"
                    onClick={() => navigate("/")}
                >
                    <span>
                        <img
                            src={companyLogo}
                            className="w-10 h-8 mr-2"
                            alt=""
                        />
                    </span>
                    <span>Dashboard</span>
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
                                tabindex="0"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        src="https://placeimg.com/80/80/people"
                                        alt=""
                                    />
                                </div>
                            </label>
                            <ul
                                tabindex="0"
                                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <p className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </p>
                                </li>
                                <li>
                                    <Link to="/settings/profile">
                                        Settings
                                    </Link>
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

export default ExNavbar;
