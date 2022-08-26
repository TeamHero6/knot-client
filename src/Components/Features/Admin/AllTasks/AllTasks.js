import { AnimatePresence, motion } from "framer-motion";
import moment from "moment";
import React, { useState } from "react";

const AllTasks = ({ data, searchTerm }) => {
    const [edit, setEdit] = useState(false);

    // update task status
    const updateStatus = (status, id) => {
        fetch(
            "https://knot-business-solution-server.herokuapp.com/updateStatus",
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ status, id }),
            }
        )
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return (
        <div>
            <table className="min-w-full mx-auto text-base overflow-hidden ">
                <thead className="text-white bg-cyan-400 border-b border-cyan-300">
                    <tr className="">
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            Name
                        </th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            Department
                        </th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            Task
                        </th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            Deadline
                        </th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            Status
                        </th>
                        <th className="py-3 text-left px-6 whitespace-nowrap">
                            option
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <AnimatePresence>
                        {data
                            ?.filter((task) => {
                                if (searchTerm === "") {
                                    return task;
                                } else if (
                                    task.name
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase()) ||
                                    task.taskTitle
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase())
                                ) {
                                    return task;
                                }
                            })
                            .map((task, i) => {
                                return (
                                    <>
                                        <motion.tr
                                            variants={{
                                                hidden: (i) => ({
                                                    opacity: 0,
                                                    y: -50 * i,
                                                    h: 0,
                                                }),
                                                visible: (i) => ({
                                                    opacity: 1,
                                                    y: 0,
                                                    h: 1,
                                                    transition: {
                                                        delay: i * 0.015,
                                                    },
                                                }),
                                                removed: {
                                                    opacity: 0,
                                                    h: 0,
                                                },
                                            }}
                                            initial="hidden"
                                            animate="visible"
                                            exit="removed"
                                            custom={i}
                                            className="duration-500 cursor-pointer border-b border-gray-300 rounded"
                                        >
                                            <td className="py-3 px-6 whitespace-nowrap">
                                                {task?.name}
                                            </td>
                                            <td className="py-3 px-6 whitespace-nowrap">
                                                {task?.department}
                                            </td>
                                            <td className="py-3 px-6 whitespace-nowrap">
                                                {task?.taskTitle}
                                            </td>
                                            <td className="py-3 px-6 whitespace-nowrap">
                                                {moment(task?.deadline).format(
                                                    "MMMM Do YYYY, h:mm a"
                                                )}
                                            </td>
                                            <td className="py-3 px-6 whitespace-nowrap">
                                                <select
                                                    name=""
                                                    id=""
                                                    className="px-2 py-1 bg-green-500 text-white"
                                                    onChange={(e) =>
                                                        updateStatus(
                                                            e.target.value,
                                                            task?._id
                                                        )
                                                    }
                                                >
                                                    <option value="running">
                                                        Running
                                                    </option>
                                                    <option value="done">
                                                        Done
                                                    </option>
                                                    <option value="missed">
                                                        Missed
                                                    </option>
                                                </select>
                                            </td>
                                            <td className="py-3 px-6 whitespace-nowrap hover:underline hover:text-blue-500">
                                                <button
                                                    onClick={() =>
                                                        setEdit(!edit)
                                                    }
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                        </motion.tr>
                                    </>
                                );
                            })}
                    </AnimatePresence>
                </tbody>
            </table>
        </div>
    );
};

export default AllTasks;
