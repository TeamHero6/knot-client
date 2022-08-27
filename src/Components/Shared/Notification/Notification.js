import moment from "moment";
import React from "react";

const Notification = ({ notification, refetch, userEmail }) => {
    const readAllHandler = () => {
        fetch(`http://localhost:5000/readAll/${userEmail}`, {
            method: "PUT",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    refetch();
                }
            });
    };
    // update seen handler
    const updateSeen = (id) => {
        fetch(`http://localhost:5000/updateNotify/${id}`, {
            method: "PUT",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    refetch();
                }
            });
    };
    return (
        <div className="hidden md:block fixed top-[70px] right-28 ring-1 ring-gray-900/5 bg-white shadow-xl sm:max-w-sm md:max-w-[500px] py-4 px-4 rounded-md overflow-hidden">
            <span
                className="text-xs mr-2 mb-1 text-gray-400 hover:text-black duration-300 cursor-pointer flex justify-end"
                onClick={readAllHandler}
            >
                Read All
            </span>
            <hr />
            <ul className="h-[250px] scroll-smooth overflow-y-scroll">
                {notification.map((notify) => {
                    return (
                        <>
                            <li className="flex items-center py-2">
                                <svg
                                    class={`h-6 w-6 flex-none ${
                                        notify.seen
                                            ? "fill-green-400 stroke-white"
                                            : " fill-gray-400 stroke-white"
                                    } stroke-2 hover:fill-green-400 hover:stroke-white `}
                                    onClick={() => updateSeen(notify._id)}
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <circle cx="12" cy="12" r="11" />
                                    <path
                                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                                        fill="none"
                                    />
                                </svg>
                                <div className="ml-4">
                                    <span>You have new meeting on </span>
                                    <span>
                                        {moment(notify.time)
                                            .add(1, "days")
                                            .calendar()}
                                    </span>
                                    <a
                                        href={notify.link}
                                        className="ml-2 text-blue-400 hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Click
                                    </a>
                                </div>
                            </li>
                            <hr />
                        </>
                    );
                })}
            </ul>
        </div>
    );
};

export default Notification;
