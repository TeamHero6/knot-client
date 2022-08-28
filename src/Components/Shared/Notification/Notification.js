import moment from "moment";
import React from "react";

const Notification = ({ notification, refetch, userEmail }) => {
    const readAllHandler = () => {
        fetch(
            `https://knot-business-solution-server.herokuapp.com/readAll/${userEmail}`,
            {
                method: "PUT",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    refetch();
                }
            });
    };
    // update seen handler
    const updateSeen = (id) => {
        fetch(
            `https://knot-business-solution-server.herokuapp.com/updateNotify/${id}`,
            {
                method: "PUT",
            }
        )
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
            <ul className="max-h-[250px] scroll-smooth overflow-y-scroll">
                {notification.map((notify) => {
                    if (notify.type === "meeting") {
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
                                    <div className="ml-4 text-sm text-gray-400">
                                        <span>
                                            You have new{" "}
                                            <span className="text-green-400 font-semibold">
                                                meeting
                                            </span>{" "}
                                            on{" "}
                                        </span>
                                        <span>
                                            {moment(notify.time)
                                                .add(1, "days")
                                                .calendar()}
                                        </span>
                                        <a
                                            href={notify.link}
                                            className="ml-2 pr-2 text-blue-400 hover:underline"
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
                    } else if (notify.type === "warning") {
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
                                    <div className="ml-4 text-sm text-gray-400">
                                        <div>
                                            <span>
                                                You have{" "}
                                                <span className="text-red-400 font-semibold">
                                                    Warning on{" "}
                                                </span>{" "}
                                            </span>
                                            <span>
                                                {moment(notify.time)
                                                    .add(1, "days")
                                                    .calendar()}
                                            </span>{" "}
                                            <br />
                                            <span>{notify.warningReason}</span>
                                        </div>
                                    </div>
                                </li>
                                <hr />
                            </>
                        );
                    }
                })}
            </ul>
        </div>
    );
};

export default Notification;
