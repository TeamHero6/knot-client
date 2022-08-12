import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";

const Meeting = () => {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/meetings")
            .then((res) => res.json())
            .then((data) => setMeetings(data));
    }, []);
    return (
        <div className="my-5">
            <h1 className="text-xl mb-3">Meeting Database</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Meeting Date $ Time</th>
                            <th>Host Name</th>
                            <th>Guest Name</th>
                            <th>Meeting Status</th>
                            <th>View Details</th>
                            <th>Meeting Link</th>
                            <th>Feedback</th>
                            <th>Save Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meetings?.map((meeting) => (
                            <tr>
                                <th>{meeting.date}</th>
                                <td>{meeting.meetingTopic}</td>
                                <td>
                                    <div>
                                        <label
                                            for={meeting._id}
                                            class=" modal-button"
                                        >
                                            <AiOutlineEye></AiOutlineEye>
                                        </label>
                                        <input
                                            type="checkbox"
                                            id={meeting._id}
                                            class="modal-toggle"
                                        />
                                        <div class="modal modal-bottom sm:modal-middle">
                                            <div class="modal-box">
                                                <h3 class="font-bold text-lg">
                                                    Meeting Information!
                                                </h3>
                                                <p>Date : {meeting.date}</p>
                                                <p>
                                                    Meeting Topic :{" "}
                                                    {meeting.meetingTopic}
                                                </p>
                                                <p>
                                                    Meeting Host :{" "}
                                                    {meeting.meetingHost}
                                                </p>
                                                <p>
                                                    Meeting Guest :{" "}
                                                    {meeting.meetingGuest}
                                                </p>
                                                <p>
                                                    Meeting With :{" "}
                                                    {meeting.meetingWith}
                                                </p>
                                                <p>
                                                    Meeting Link :{" "}
                                                    {meeting.meetingLink}
                                                </p>
                                                <div class="modal-action">
                                                    <label
                                                        for={meeting._id}
                                                        class="btn bg-[#0182BE]"
                                                    >
                                                        Close!
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {" "}
                                    <a
                                        className="bg-[#0182BE] text-white px-4 py-2 rounded"
                                        href={meeting.meetingLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Join Now
                                    </a>{" "}
                                </td>
                            </tr>
                        ))}
                        {meetings?.map((meeting) => (
                            <tr>
                                <th>{meeting.date}</th>
                                <td>{meeting.meetingHost}</td>
                                <td>{meeting.meetingGuest}</td>
                                <td>
                                    <select
                                        className="bg-[#EEEEEE] rounded p-2"
                                        name="cars"
                                        id="cars"
                                    >
                                        <option value="volvo"> </option>
                                        <option value="saab">
                                            Will be start
                                        </option>
                                        <option value="opel">Cancel</option>
                                    </select>
                                </td>
                                <td>Details</td>
                                <td>
                                    {" "}
                                    <a
                                        className="bg-[#0182BE] text-white px-4 py-2 rounded"
                                        href={meeting.meetingLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Join Now
                                    </a>{" "}
                                </td>
                                <td>
                                    <textarea
                                        className="bg-[#EEEEEE] rounded"
                                        name=""
                                        id=""
                                        cols="10"
                                        rows="2"
                                    ></textarea>
                                </td>
                                <td>
                                    <input
                                        className="bg-[#0182BE] text-white px-4 py-2 rounded"
                                        type="submit"
                                        value="Save"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Meeting;
