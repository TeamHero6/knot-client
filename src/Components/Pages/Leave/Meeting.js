import React, { useEffect, useState } from 'react';
import { AiOutlineEye } from "react-icons/ai";

const Meeting = () => {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/meetings")
            .then((res) => res.json())
            .then((data) => setMeetings(data));
    }, []);
    return (
        <div className="my-5">
            <h1 className='text-2xl text-center font-bold mt-5'>Meeting Database</h1>
            <div class="overflow-x-auto">
                <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                    <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                        <tr>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Meeting Date $ Time</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Meeting Topic</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">View Details</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Meeting Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            meetings?.map(meeting =>
                                <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                    <td className="py-3 px-6 whitespace-nowrap">{meeting.date}</td>
                                    <td className="py-3 px-6 whitespace-nowrap">{meeting.meetingTopic}</td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <div>
                                            <label for={meeting._id} class=" modal-button"><AiOutlineEye></AiOutlineEye></label>
                                            <input type="checkbox" id={meeting._id} class="modal-toggle" />
                                            <div class="modal modal-bottom sm:modal-middle">
                                                <div class="modal-box">
                                                    <h3 class="font-bold text-lg">Meeting Information!</h3>
                                                    <p>Date : {meeting.date}</p>
                                                    <p>Meeting Topic : {meeting.meetingTopic}</p>
                                                    <p>Meeting Host : {meeting.meetingHost}</p>
                                                    <p>Meeting Guest  : {meeting.meetingGuest}</p>
                                                    <p>Meeting With : {meeting.meetingWith}</p>
                                                    <p>Meeting Link : {meeting.meetingLink}</p>
                                                    <div class="modal-action">
                                                        <label for={meeting._id} class="btn bg-[#0182BE]">Close!</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap"> <a className='flex items-center gap-2 bg-green-400	 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-green-400 hover:outline-1 hover:border hover:border-green-400 hover: shadow-green-200 hover: shadow-sm'href={meeting.meetingLink} target="_blank" rel="noopener noreferrer">Join Now</a> </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Meeting;
