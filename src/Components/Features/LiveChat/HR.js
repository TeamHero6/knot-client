import moment from "moment";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { useSelector } from "react-redux";
import HRChat from "./HRChat";
import "./LiveChat.css";

const HR = () => {
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    if (loggerInfo) {
        // console.log(loggerInfo);
    }
    const [singChatDetail, setSingleChatDetail] = useState({});
    const { Department, userPhoto } = loggerInfo;
    if (loggerInfo) {
        console.log(loggerInfo);
    }

    const handleHRChat = (e) => {
        e.preventDefault();
        const chat = e.target.chat.value;
        const userName = e.target.userName.value;
        const time = e.target.time.value;
        const department = e.target.department.value;

        const hrchat = { chat, userName, time, userPhoto, Department };

        fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(hrchat),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    e.target.reset();
                }
            });
    };

    return (
        <div>
            <section className="h-[87vh]  bg-white">
                <div className="chat flex justify-between  ">
                    <div className="profile lg:w-3/12 lg:h-[74vh]">
                        <div className="flex items-center gap-2 rounded bg-custom-light-gray shadow-sm py-1 my-2 mx-6 justify-center">
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                                    <img src={loggerInfo?.userPhoto} alt="" />
                                </div>
                            </div>
                            <div>
                                <p>{loggerInfo?.name}</p>
                                <p>
                                    <small className="italic text-gray-400">
                                        {loggerInfo?.Designation}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-l-2 pr-1"></div>
                    <div className="chat w-9/12">
                        <div className="h-[72vh] lg:overflow-y-scroll ">
                            <HRChat
                                setSingleItemDetail={singChatDetail}
                            ></HRChat>
                        </div>
                        <div>
                            <hr className="mx-8 " />
                            <form
                                onSubmit={handleHRChat}
                                className="chatForm flex gap-5 bg-white pt-4 pr-36"
                            >
                                <input
                                    type="hidden"
                                    name="userName"
                                    id=""
                                    value={loggerInfo?.name}
                                />
                                <input
                                    type="hidden"
                                    name="department"
                                    id=""
                                    value={loggerInfo?.Department}
                                />
                                <input
                                    type="hidden"
                                    name="userPhoto"
                                    id=""
                                    value={loggerInfo?.userPhoto}
                                />
                                <input
                                    type="hidden"
                                    name="time"
                                    id=""
                                    value={moment().format(
                                        "MMMM Do YYYY, h:mm:ss a"
                                    )}
                                />
                                <div className="flex items-center">
                                    <div>
                                        <textarea
                                            className="border-none pl-3 ml-10 w-4/5 rounded outline-none"
                                            name="chat"
                                            id=""
                                            cols="120"
                                            rows="2"
                                            placeholder="Write your message..."
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="ml-10">
                                        <button className="text-2xl">
                                            <div className="avatar placeholder ">
                                                <div className=" bg-blue-500 text-neutral-content rounded-full w-12">
                                                    <span>
                                                        <FiSend />
                                                    </span>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HR;
