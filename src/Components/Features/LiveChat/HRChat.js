import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const HRChat = () => {
    const [chatList, setChatList] = useState([]);
    const { _id } = chatList;
    // console.log(chatList);

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/hrchat")
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
                                className="hover:shadow-md hover:bg-cyan-100  duration-500 cursor-pointer border-b border-cyan-100"
                            >
                                <td className="px-5 py-2 text-black whitespace-normal">
                                    <div className="flex justify-between font-semibold">
                                        <p className="text-green-500">
                                            {chatList.userName}
                                        </p>
                                    </div>
                                    <p className="py-1 text-sm  whitespace-normal">
                                        {chatList.chat}
                                    </p>
                                    <p className=" text-xs text-end text-gray-600 whitespace-normal">
                                        {chatList.date}
                                        {chatList.time}
                                    </p>
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
