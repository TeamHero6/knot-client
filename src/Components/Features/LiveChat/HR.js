import moment from "moment";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useHRChat from "./hooks/useHRChat";
import useLoginUser from "./hooks/useLoginUser";
import useUserInfo from "./hooks/useUserInfo";
import HRChat from "./HRChat";
import "./LiveChat.css";

const HR = () => {
    const [singChatDetail, setSingleChatDetail] = useState({});

    const handleHRChat = (e) => {
        e.preventDefault();
        const chat = e.target.chat.value;
        const userName = e.target.userName.value;
        const time = e.target.time.value;

        const hrchat = { chat, userName, time };
        console.log(hrChat);

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
    const { id } = useParams();
    const [hrChat] = useHRChat();
    const [userInfo] = useUserInfo();
    const [loginUser] = useLoginUser();
    // console.log(loginUser);

    const singleLoginUser = loginUser.find((product) => loginUser._id == id);
    // console.log(singleLoginUser);

    return (
        <div>
            <section className="relative chatBox lg:w-9/12 mx-auto bg-white shadow-gray-300 border shadow-sm rounded pt-5 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto">
                <div className="flex justify-end"></div>
                <div className="flex gap-8  ">
                    <div className="groupName">
                        {loginUser.slice(0, 1).map((loginUser) => (
                            <tr className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100">
                                <td className="py-3 px-6 font-semibold text-blue-500 whitespace-normal">
                                    {loginUser.name}
                                </td>
                            </tr>
                        ))}

                        <br />
                        <br />
                        <h2 className="text-purple-700">Group Members</h2>

                        {userInfo.map((userInfo) => (
                            <tr className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100">
                                <td className="py-3 px-6 whitespace-normal">
                                    {userInfo?.name}
                                </td>
                            </tr>
                        ))}
                    </div>

                    <div className="chat w-full h-96">
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
            </section>
        </div>
    );
};

export default HR;
