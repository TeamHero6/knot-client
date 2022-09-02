import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Meeting = () => {
    const [meetings, setMeetings] = useState([]);
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);

    useEffect(() => {
        fetch(`https://knot-business-solution-server.herokuapp.com/userMeetings/${loggerInfo.email}`)
            .then((res) => res.json())
            .then((data) => setMeetings(data.reverse()));
    }, [meetings, loggerInfo]);
    // console.log(meetings, loggerInfo);

    return (
        <div className="mx-10">
            <h1 className="text-2xl text-green-500 font-bold mt-12 mb-5">
                Meeting Database
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {meetings?.slice(0, 20).map((meeting) => (
                    <div className="px-4 py-2 w-60 lg:w-80 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-between items-center">
                            <p className="text-xl my-2 font-semibold">
                                {meeting.meetingHost}
                            </p>
                        </div>
                        <p>
                            <span className="font-semibold">Topic :</span>{" "}
                            {meeting.meetingTopic}
                        </p>
                        <p className="text-gray-400 mb-2">{meeting.date}</p>
                        <div className="card-actions justify-end">
                            <a
                                href={meeting.meetingLink}
                                className="flex btn-xs ml-5 items-center gap-2 bg-green-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-green-400 hover:outline-1 hover:border hover:border-green-400 hover: shadow-green-200 hover: shadow-sm"
                            >
                                Join
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Meeting;
