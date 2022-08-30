import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const HRChat = () => {
    const [chatList, setChatList] = useState([]);
    const [details, setDetails] = useState([]);
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { Department } = loggerInfo;
    const { companyName } = loggerInfo;

    const allEmployees = useSelector((state) => state.auth.allEmployees);
    if (allEmployees) {
        console.log(allEmployees);
    }
    useEffect(() => {
        fetch(`http://localhost:5000/employeedetails/${companyName}`)
            .then((res) => res.json())
            .then((data) => setDetails(data.reverse()));
    }, [details, companyName]);
    // console.log(details, companyName);

    useEffect(() => {
        fetch(`http://localhost:5000/conversations/${Department}`)
            .then((res) => res.json())
            .then((data) => setChatList(data));
    }, [chatList, Department]);
    // console.log(chatList, Department);

    return (
        <div className="chatCard ">
            <div className="overflow-auto rounded-none mr-5 ">
                <table className="shadow-sm w-full mx-auto mt-12 mb-1 text-base overflow-hidden">
                    <tbody>
                        {chatList.map((chatList) => (
                            <motion.tr
                                initial={{ height: 0, y: 150, scale: 0.8 }}
                                animate={{ height: "auto", y: 1, scale: 1 }}
                                exit={{ height: 0, opacity: 0, scale: 0.8 }}
                                key={chatList._id}
                                className="hover:shadow-md hover:bg-custom-gray  duration-500 cursor-pointer border-b border-cyan-100"
                            >
                                <td className="px-5 text-black whitespace-normal">
                                    <div className="flex gap-x-6">
                                        <div class="avatar placeholder items-center">
                                            <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                                                <img
                                                    src={chatList?.userPhoto}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between ">
                                                <p>
                                                    <span className="text-blue-600 text-sm font-semibold">
                                                        {chatList.userName}
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="">
                                                <span>
                                                    <small className="text-gray-400 text-xs italic">
                                                        {chatList.time}
                                                    </small>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="py-1 pl-16 text-sm  whitespace-normal">
                                            {chatList.chat}
                                        </p>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default HRChat;
