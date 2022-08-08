import React, { useEffect, useState } from "react";
import LeaveRequest from "../Leave/LeaveRequest/LeaveRequest";
import Award from "./Award";
import LeaveInfo from "./LeaveInfo";
import Meeting from "./Meeting";
import Warming from "./Warming";

const Leave = () => {
    const [show, setShow] = useState(false);
    const [userinfo, setUserinfo] = useState([]);

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/leaveData")
            .then((res) => res.json())
            .then((data) => setUserinfo(data));
    }, []);

    return (
        <div>
            <div>
                <div class="drawer drawer-mobile">
                    <input
                        id="my-drawer-2"
                        type="checkbox"
                        class="drawer-toggle"
                    />
                    <div class="drawer-content">
                        <div class="dropdown">
                            <label tabindex="0">
                                <div class="w-10">
                                    <label
                                        for="my-drawer"
                                        class="btn btn-xs bg-[#0182be] mt-5 ml-3 md:ml-5 drawer-button"
                                    >
                                        Request
                                    </label>
                                </div>
                            </label>
                            <ul
                                tabindex="0"
                                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ml-16"
                            >
                                {userinfo?.map((user) => (
                                    <li>
                                        <a onClick={() => setShow(!show)}>
                                            {user.Name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            {show ? (
                                <div className="ml-3 md:ml-5">
                                    <p className="text-xl text-[#0182BE]">
                                        Leave Request
                                    </p>
                                    {userinfo?.map((user) => (
                                        <LeaveInfo user={user}></LeaveInfo>
                                    ))}
                                    <div className="md:flex my-4">
                                        <p>
                                            Approval :{" "}
                                            <input
                                                className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:mr-16"
                                                type="text"
                                            />
                                        </p>
                                        <p>
                                            ID :{" "}
                                            <input
                                                className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] mt-2 md:mt-0"
                                                type="text"
                                            />
                                        </p>
                                    </div>
                                    <button className="text-xl block mx-auto bg-[#EEEEEE] border-2 border-[#0182BE] rounded-md px-5">
                                        Save
                                    </button>
                                </div>
                            ) : (
                                ""
                            )}
                            <LeaveRequest></LeaveRequest>
                        </div>
                        <Meeting></Meeting>
                        <Warming></Warming>
                        <Award></Award>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leave;
