import React, { useEffect, useState } from "react";

const Meeting = () => {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/meetings")
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
