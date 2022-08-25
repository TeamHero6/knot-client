import React, { useEffect, useState } from "react";

const Meeting = () => {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/meetings")
            .then((res) => res.json())
            .then((data) => setMeetings(data.reverse()));
    }, []);

    return (
        <div className="mx-10">
            <h1 className="text-2xl text-center font-bold mt-12 mb-5">
                Meeting Database
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    meetings?.slice(0, 20).map(meeting => (
                        <div class="px-4 py-2 w-80 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-between items-center">
                                <p className="text-xl my-2 font-semibold">{meeting.meetingHost}</p>
                                {/* <BiUserCircle className="text-green-300" size={30}></BiUserCircle> */}
                            </div>
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