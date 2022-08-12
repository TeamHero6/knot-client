import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineAddTask } from "react-icons/md";
import { useSelector } from "react-redux";
import AddTask from "../AddTask";
import AllTasks from "../AllTasks/AllTasks";

const DailyTask = () => {
    const [isOpen, setOpen] = useState(false);

    const authInfo = useSelector((state) => state.auth);
    const { isAuth, loggerInfo } = authInfo;

    const { data, isLoading, refetch } = useQuery(["alltasks", "task"], () =>
        fetch(
            `http://localhost:5000/v1/allTasks?company=${loggerInfo.companyName}`
        ).then((res) => res.json())
    );

    if (isLoading) {
        return;
    }

    return (
        <div>
            <section className="bg-white rounded drop-shadow-md w-full h-auto p-4">
                <div className="w-full flex flex-row my-2">
                    <div className="basis-1/6">
                        <button
                            className="flex items-center gap-2 bg-green-400	 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-green-400 hover:outline-1 hover:border hover:border-green-400 transition duration-300 hover:shadow-green-200 hover: shadow-sm"
                            onClick={() => setOpen(!isOpen)}
                        >
                            <MdOutlineAddTask />
                            Add Task
                        </button>
                    </div>
                    <div className="basis-5/6 flex items-center border border-gray-400 rounded px-2">
                        <BsSearch className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="filter by name/task"
                            className="py-2 px-2 w-[100%] outline-none text-gray-400"
                        />
                    </div>
                </div>
                <section className={`${isOpen ? "visible" : "hidden"}`}>
                    <AddTask refetch={refetch} />
                </section>
            </section>
            <section className="bg-white rounded drop-shadow-md w-full h-auto p-4 my-4">
                <div className="overflow-x-auto">
                    <AllTasks data={data} />
                </div>
            </section>
        </div>
    );
};

export default DailyTask;
