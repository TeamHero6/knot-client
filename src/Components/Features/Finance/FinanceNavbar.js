import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import access from "../../../Assets/icons/Dashboard/access.svg";
import DigitalClock from "../../Shared/DigitalClock/DigitalClock";

const FinanceNavbar = () => {
    // const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    // const { companyLogo, userPhoto } = loggerInfo;
    // console.log(loggerInfo);
    return (
        <div className="h-[60px] w-full flex items-center justify-between bg-[#FFFFFF] mb-3 shadow-md">
            <div className="flex items-center w-64 justify-center cursor-pointer">
                {/* <img
                    src={loggerInfo.companyLogo}
                    className="w-6 h-6 mr-2"
                    alt=""
                /> */}
                <span>Finance</span>
            </div>

            <div className=" lg:absolute lg:left-64 hover:bg-custom-cyan-100 p-2 rounded-full duration-500">
                <Link to="/accessApps">
                    {/* <img src={access} className={`w-6`} alt="icon" /> */}
                </Link>
            </div>

            {/*Profile DropDown*/}
            <div className="px-6 flex items-center gap-4">
                <div>
                    <p className="text-xl font-medium">
                        <DigitalClock></DigitalClock>
                    </p>
                </div>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            {/* <img
                                src={
                                    userPhoto
                                        ? userPhoto
                                        : "https://placeimg.com/80/80/people"
                                }
                                alt=""
                            /> */}
                        </div>
                    </label>
                    <ul
                        tabindex="0"
                        class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a href="/" class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">Settings</a>
                        </li>
                        <li>
                            <p>Logout</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FinanceNavbar;
