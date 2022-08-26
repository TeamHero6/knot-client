import React from 'react';
import DigitalClock from '../../Shared/DigitalClock/DigitalClock';
import access from '../../../Assets/icons/Dashboard/access.svg';
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";


const SalesNavbar = () => {
    const navigate = useNavigate();

    // sign out handler
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
    };

    return (
        <div className="h-[60px] w-full flex items-center justify-between bg-[#FFFFFF] mb-3 shadow-md">
            <div className="flex items-center w-64 justify-center cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-10"
                    viewBox="0 0 16 16"
                >
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                </svg>
                <span>Sales Management</span>
            </div>

            <div className=" lg:absolute lg:left-64 hover:bg-custom-cyan-100 p-2 rounded-full duration-500">
                <Link to='/accessApps'><img src={access} className={`w-6`} alt="icon" /></Link>
            </div>

            {/*Profile DropDown*/}
            <div className="px-6 flex items-center gap-4">
                <div>
                    <p className='text-xl font-medium'><DigitalClock></DigitalClock></p>
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabindex="0"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt="" />
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
                            <p>Settings</p>
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

export default SalesNavbar;