import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const DailyTask = () => {
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState("Monir");

    const { data, isLoading } = useQuery(["alltasks", "task"], () =>
        fetch(
            "https://knot-business-solution-server.herokuapp.com/alltasks"
        ).then((res) => res.json())
    );

    if (isLoading) {
        return;
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="border-2 border-cyan-300 mx-auto">
                    <thead className="border-b bg-white border-cyan-100">
                        <tr className="">
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Name
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                ID
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
                                Report
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                option
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((task) => (
                            <>
                                <tr className="duration-500 cursor-pointer border-b border-cyan-100">
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {task?.name}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {task?.employeeID}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {task?.department}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {task?.task}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {task?.DueDate}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <select
                                            name=""
                                            id=""
                                            className="px-2 py-1 bg-green-500 text-white"
                                        >
                                            <option value="running">
                                                Running
                                            </option>
                                            <option value="done">Done</option>
                                            <option value="missed">
                                                Missed
                                            </option>
                                        </select>
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <input
                                            type="text"
                                            value={value}
                                            onChange={(e) =>
                                                setValue(e.target.value)
                                            }
                                            className="w-20 "
                                            disabled={!edit}
                                        />
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
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
        </div>
    );
};

export default DailyTask;
