import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import access from "../../../Assets/icons/Dashboard/access.svg";
import auth from "../../../firebase.init";
import DigitalClock from "../../Shared/DigitalClock/DigitalClock";

const LiveChatNavbar = () => {
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { Department } = loggerInfo;
    const navigate = useNavigate();
    const [userProfile, setuserprofile] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const authInfo = useSelector((state) => state.auth);

    useEffect(() => {
        console.log(loggerInfo);
        if (authInfo.loggerInfo !== null) {
            const { userPhoto, email } = authInfo?.loggerInfo;
            setuserprofile(userPhoto);
            setUserEmail(email);
        }
    }, [authInfo, loggerInfo]);
    // sign out handler
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
    };

    return (
        <div className="h-[60px] w-full flex items-center justify-between bg-[#FFFFFF] mb-3 shadow-md">
            <div className="flex items-center w-64 justify-center cursor-pointer">
                <img
                    src={loggerInfo.companyLogo}
                    className="w-6 h-6 mr-2"
                    alt=""
                />
                <span>{Department} Chat</span>
            </div>

            <div className=" lg:absolute lg:left-64 hover:bg-custom-cyan-100 p-2 rounded-full duration-500">
                <Link to="/accessApps">
                    <img src={access} className={`w-6`} alt="icon" />
                </Link>
            </div>

            {/*Profile DropDown*/}
            <div className="px-6 flex items-center gap-4">
                <div>
                    <p className="text-xl font-medium">
                        <DigitalClock></DigitalClock>
                    </p>
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex="0"
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
                        tabIndex="0"
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <p className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </p>
                        </li>
                        <li>
                            <Link to="/settings/profile">Settings</Link>
                        </li>
                        <li>
                            <p onClick={handleSignOut}>Logout</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LiveChatNavbar;
