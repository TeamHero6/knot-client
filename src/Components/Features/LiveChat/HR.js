import moment from "moment";
import React, { useState } from "react";
import HRChat from "./HRChat";
import "./LiveChat.css";
import { useSelector } from "react-redux";
import { FiSend } from 'react-icons/fi';

const HR = () => {
    const [singChatDetail, setSingleChatDetail] = useState({});

    const handleHRChat = (e) => {
        e.preventDefault();
        const chat = e.target.chat.value;
        const userName = e.target.userName.value;
        const userPhoto = e.target.userPhoto.value;
        const time = e.target.time.value;

        const hrchat = { chat, userName, time, userPhoto };
        console.log(hrchat);

        fetch("http://localhost:5000/hrchat", {
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

    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    if (loggerInfo) {
        // console.log(loggerInfo);
    }

    return (
        <div>
            <section className="h-[87vh]  bg-white">
                {/* <div className="flex justify-between px-10 py-5 bg-custom-light-gray shadow-sm">
                    <div className="font-semibold">
                        HR Management Chat Board
                    </div>
                    <div className="flex items-center gap-2">
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-10">
                                <img src={loggerInfo?.userPhoto} alt="" />
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold">{loggerInfo?.name}</p>
                        </div>
                    </div>
                </div>
                <hr /> */}

                <div className="flex justify-between  ">
                    <div className="w-3/12 h-[74vh] bg-white">
                        <div className="flex items-center gap-2 rounded bg-custom-light-gray shadow-sm py-1 my-2 mx-6 justify-center">
                            <div class="avatar placeholder">
                                <div class="bg-neutral-focus text-neutral-content rounded-full w-10">
                                    <img src={loggerInfo?.userPhoto} alt="" />
                                </div>
                            </div>
                            <div>
                                <p>{loggerInfo?.name}</p>
                                <p><small className="italic text-gray-400">{loggerInfo?.role}</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="border-l-2 pr-1"></div>
                    <div className="w-9/12">
                        <div className="h-[72vh] overflow-y-scroll ">
                            <HRChat setSingleItemDetail={singChatDetail}></HRChat>
                        </div>
                        <div>
                        <hr className="mx-8 " />
                            <form
                                onSubmit={handleHRChat}
                                className="flex gap-5 bg-white pt-4 pr-36"
                            >
                                <input
                                    type="hidden"
                                    name="userName"
                                    id=""
                                    value={loggerInfo?.name}
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
                                            className="border-none pl-3 ml-10 rounded outline-none"
                                            name="chat"
                                            id=""
                                            cols="100"
                                            rows="2"
                                            placeholder="Write your message..."
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="ml-10">
                                        <button className="text-2xl">
                                            <div class="avatar placeholder ">
                                                <div class=" bg-blue-500 text-neutral-content rounded-full w-12">
                                                    <span><FiSend /></span>
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
            {/* <section className="relative chatBox lg:w-full mx-auto bg-white shadow-gray-300 border shadow-sm rounded pt-5 px-5 md:w-9/12 sm:w-11/12 sm:mx-auto">
                <div className="flex justify-end"></div>
                <div className="flex gap-8  ">
                    <div className="groupName">
                        {loginUser.slice(0, 1).map((loginUser) => (
                            <tr className="hover:shadow-md hover:bg-cyan-100  duration-500 cursor-pointer border-b border-cyan-100">
                                <td className="py-3 px-6 font-semibold text-blue-500 whitespace-normal">
                                    {loginUser.name}
                                </td>
                            </tr>
                        ))}

                        <br />
                        <br />
                        <h2 className="text-purple-700">Group Members</h2>

                        {userInfo.map((userInfo) => (
                            <tr className="hover:shadow-md hover:bg-cyan-100  duration-500 cursor-pointer border-b border-cyan-100">
                                <td className="py-3 px-6 whitespace-normal">
                                    {userInfo?.name}
                                </td>
                            </tr>
                        ))}
                    </div>

                    <div className="chat w-full h-full">
                        <div className="sticky top-0 py-3 bg-white flex justify-between">
                            <h2 className="text-center text-blue-500 text-xl font-semibold">
                                HR Management Live Chat
                            </h2>
                            <h2 className="pr-5">
                                <Link
                                    className="bg-cyan-100 text-red-500 py-2 px-2"
                                    to="/chat"
                                >
                                    Leave Group
                                </Link>
                            </h2>
                        </div>
                        <HRChat setSingleItemDetail={singChatDetail}></HRChat>
                        <br />
                        <div className="absolute bottom-12">
                            <form
                                onSubmit={handleHRChat}
                                className="flex gap-5 bg-white pt-4 pr-36"
                            >
                                <input
                                    type="hidden"
                                    name="userName"
                                    id=""
                                    value={singleLoginUser?.name}
                                />
                                <input
                                    type="hidden"
                                    name="time"
                                    id=""
                                    value={moment().format(
                                        "MMMM Do YYYY, h:mm:ss a"
                                    )}
                                />
                                <textarea
                                    className="border border-gray-300 bg-slate-50 rounded outline-none"
                                    name="chat"
                                    id=""
                                    cols="50"
                                    rows="2"
                                ></textarea>
                                <button>
                                    <input
                                        className="flex items-center gap-2 bg-blue-600 cursor-pointer py-2 px-6 mr-5 text-white font-bold rounded  hover:bg-white hover:text-blue-500 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                        type="submit"
                                        value="Send"
                                    />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default HR;
