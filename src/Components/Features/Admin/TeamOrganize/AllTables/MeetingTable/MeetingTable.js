import React from "react";
import { BiSave } from "react-icons/bi";
import { FiEye } from "react-icons/fi";

const MeetingTable = ({ meetings }) => {
    return (
        <div className="w-full">
            <p className="my-2 px-2">All Meetings</p>
            <div className="overflow-x-auto">
                <table className="table w-full ">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Host Name</th>
                            <th>Guest Name</th>
                            <th>View All invited</th>
                            <th>Special Note</th>
                            <th>Meeting Status</th>
                            <th>Meeting Link</th>
                            <th>Save Changes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meetings.map((meeting) => (
                            <>
                                <tr className="text-center">
                                    <td>{meeting.date}</td>
                                    <td>{meeting.meetingHost}</td>
                                    <td>{meeting.meetingGuest}</td>
                                    <td>
                                        <FiEye />
                                    </td>
                                    <td>edit</td>
                                    <td>
                                        <select name="meetingStatus">
                                            <option value="willBeStart">
                                                Will be Start
                                            </option>
                                            <option value="cancle">
                                                Cancle
                                            </option>
                                        </select>
                                    </td>
                                    <td>
                                        <a
                                            href={meeting.meetingLink}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Join
                                        </a>
                                    </td>
                                    <td>
                                        <BiSave />
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MeetingTable;
