import { motion } from "framer-motion";
import React from "react";
import { FiEye } from "react-icons/fi";

const WarningTable = ({ warnings }) => {
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
                            <th>Team Member Name</th>
                            <th>Reason of Warning</th>
                            <th>Special Note</th>
                            <th>Type</th>
                            <th>Team Member Feedback</th>
                            <th>Save Changes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {warnings.map((warning) => (
                            <>
                                <tr>
                                    <td>{warning.warningDate}</td>
                                    <td>MOnir</td>
                                    <td>{warning.warningReason}</td>
                                    <td>Special Note</td>
                                    <td>{warning.type}</td>
                                    <td>
                                        <FiEye />
                                    </td>
                                    <td>Save</td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default WarningTable;
