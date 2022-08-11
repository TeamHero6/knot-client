import React, { useEffect, useState } from 'react';

const Meeting = () => {
    const [meetings, setMeetings] = useState([]);
    const [meetingModal, setMeetingModal] = useState({});

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
                                            <label for={meeting._id} onClick={()=> setMeetingModal(meeting)} class=" modal-button"><span className='underline hover:text-blue-500 hover:font-medium'>Details</span></label>

                                        </div>
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap"> <a className='flex items-center gap-2 bg-green-400	 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-green-400 hover:outline-1 hover:border hover:border-green-400 hover: shadow-green-200 hover: shadow-sm' href={meeting.meetingLink} target="_blank" rel="noopener noreferrer">Join Now</a> </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <input type="checkbox" id={meetingModal._id} class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Meeting Information!</h3>
                        <p>Date : {meetingModal.date}</p>
                        <p>Meeting Topic : {meetingModal.meetingTopic}</p>
                        <p>Meeting Host : {meetingModal.meetingHost}</p>
                        <p>Meeting Guest  : {meetingModal.meetingGuest}</p>
                        <p>Meeting With : {meetingModal.meetingWith}</p>
                        <p>Meeting Link : {meetingModal.meetingLink}</p>
                        <div class="modal-action">
                            <label for={meetingModal._id} class="btn bg-[#0182BE]">Close!</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meeting;
