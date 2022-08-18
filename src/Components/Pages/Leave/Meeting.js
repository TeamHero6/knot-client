import React, { useEffect, useState } from "react";

const Meeting = () => {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/meetings")
            .then((res) => res.json())
            .then((data) => setMeetings(data.reverse()));
    }, []);

    return (
        <div className="mx-5">
            <h1 className="text-2xl text-center font-bold mb-12">
                Meeting Database
            </h1>

            <div className="grid grid-cols-2 gap-4">
                {
                    meetings.slice(0, 4).map(meeting => (
                        <div class="px-4 py-2 w-48 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <p className="text-green-500 my-2">{meeting.meetingHost}</p>
                            <p><span className="font-semibold">Topic :</span> {meeting.meetingTopic}</p>
                            <p className="text-gray-400 mb-2">{meeting.date}</p>
                            <div className="card-actions justify-end">
                                <a href={meeting.meetingLink} className='flex btn-xs ml-5 items-center gap-2 bg-green-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-green-400 hover:outline-1 hover:border hover:border-green-400 hover: shadow-green-200 hover: shadow-sm'>
                                    Join
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Meeting;
