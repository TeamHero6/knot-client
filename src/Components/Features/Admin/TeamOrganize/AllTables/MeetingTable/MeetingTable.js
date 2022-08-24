import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { BiSave } from "react-icons/bi";
import { FiEye } from "react-icons/fi";

const MeetingTable = ({ meetings }) => {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 1, opacity: 1, transition: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="w-full"
        >
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
                        <AnimatePresence>
                            {meetings.map((meeting, i) => (
                                <>
                                    <motion.tr
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                y: -50,
                                            },
                                            visible: (i) => ({
                                                opacity: 1,
                                                x: 0,
                                                transition: {
                                                    delay: i * 0.5,
                                                },
                                            }),
                                            removed: {
                                                opacity: 0,
                                                y: -50,
                                            },
                                        }}
                                        initial="hidden"
                                        animate="visible"
                                        custom={{ i }}
                                        exit="removed"
                                        className="text-center"
                                    >
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
                                    </motion.tr>
                                </>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default MeetingTable;
