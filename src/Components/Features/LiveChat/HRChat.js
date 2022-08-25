import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const HRChat = () => {
    const [chatList, setChatList] = useState([]);
    const { _id } = chatList;
    // console.log(chatList);

    useEffect(() => {
        fetch("http://localhost:5000/hrchat")
            .then((res) => res.json())
            .then((data) => setChatList(data));
    }, [chatList]);

    return (
        <div className="chatCard ">
            <div className="overflow-auto rounded-none mr-5 ">
                <table className="shadow-sm w-full mx-auto mt-12 mb-1 text-base overflow-hidden">
                    <tbody>
                        {chatList.map((chatList) => (
                            <tr
                                key={chatList._id}
                                className="hover:shadow-md hover:bg-custom-gray  duration-500 cursor-pointer border-b border-cyan-100"
                            >
                                <td className="px-5 py-2 text-black whitespace-normal">
                                    <div className="flex gap-6">
                                        <div class="avatar placeholder py-1 items-center">
                                            <div class="bg-neutral-focus text-neutral-content rounded-full w-10">
                                                <img
                                                    src={chatList?.userPhoto}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between ">
                                                <p>
                                                    <span className="text-blue-600 font-semibold">
                                                        {chatList.userName}
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <p>
                                                    <small className="text-gray-400 italic">
                                                        {chatList.time}
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="py-1 pl-16 text-sm  whitespace-normal">
                                            {chatList.chat}
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default HRChat;
