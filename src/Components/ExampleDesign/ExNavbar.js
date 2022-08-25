import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import access from "../../Assets/icons/Dashboard/access.svg";
import auth from "../../firebase.init";

const ExNavbar = () => {
    const [user, loading, error] = useAuthState(auth);

    // Getting all neccasary user information from redux store
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyLogo } = loggerInfo;

    // sign out handler
    const handleSignOut = () => {
        console.log("click for sign out");
        signOut(auth);
        localStorage.removeItem("accessToken");
    };
    return (
        <div className="h-[60px] w-full flex items-center justify-between bg-[#FFFFFF] mb-3 shadow-md">
            <div className="flex items-center w-64 justify-center cursor-pointer">
                <span>
                    <img src={companyLogo} className="w-10 h-10 mr-2" alt="" />
                </span>
                <span>Dashboard</span>
            </div>

            <div className=" lg:absolute lg:left-64 hover:bg-custom-cyan-100 p-2 rounded-full duration-500">
                <Link to="/accessApps">
                    <img src={access} className={`w-6`} alt="icon" />
                </Link>
            </div>

            {/*Profile DropDown*/}
            <div className="px-6">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <label
                            tabindex="0"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul
                            tabindex="0"
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
                                <p onClick={handleSignOut}>Logout</p>
                            </li>
                        </ul>
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
