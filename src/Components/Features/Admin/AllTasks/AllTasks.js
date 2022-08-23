import React, { useState } from "react";

const AllTasks = ({ data }) => {
    const [edit, setEdit] = useState(false);

    return (
        <div>
            <table className="shadow-2xl border-2 border-cyan-300 min-w-full mx-auto text-base overflow-hidden ">
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
                    {data?.map((task) => (
                        <>
                            <tr className="hover:shadow-md hover:bg-cyan-100 duration-500 cursor-pointer border-b border-cyan-300 rounded">
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
                                    {task?.deadline}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    <select
                                        name=""
                                        id=""
                                        className="px-2 py-1 bg-green-500 text-white"
                                    >
                                        <option value="running">Running</option>
                                        <option value="done">Done</option>
                                        <option value="missed">Missed</option>
                                    </select>
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap hover:underline hover:text-blue-500">
                                    <button onClick={() => setEdit(!edit)}>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllTasks;
