import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineAddTask } from "react-icons/md";
import { useSelector } from "react-redux";
import Loader from "../../../Shared/Loader/Loader";
import AllTasks from "../AllTasks/AllTasks";
import TaskDetailsModalUI from "../AllTasks/TaskDetailsModalUI";
import AddTaskModal from "./AddTaskModal/AddTaskModal";

const DailyTask = () => {
    const [isOpen, setOpen] = useState(false);
    const [view, setView] = useState(false);
    const [singleTask, setSingleTask] = useState();
    const [searchTerm, setSearchTerm] = useState("");

    // Getting redux state
    const authInfo = useSelector((state) => state.auth);
    const { loggerInfo } = authInfo;

    const { data, isLoading, refetch } = useQuery(["alltasks", "task"], () =>
        fetch(
            `http://localhost:5000/v1/allTasks?company=${loggerInfo.companyName}`
        ).then((res) => res.json())
    );

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <motion.section
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                className="bg-white rounded drop-shadow-md w-full h-auto p-2"
            >
                <div className="w-full">
                    <div className="flex">
                        <label
                            for="addTask"
                            className="flex items-center basis-1/6 mr-2 bg-green-400 py-1 px-4 text-white font-bold rounded  hover:bg-white hover:text-green-400 hover:outline-1 hover:border hover:border-green-400 transition duration-300 hover:shadow-green-200 hover: shadow-sm"
                            onClick={() => setOpen(!isOpen)}
                        >
                            <MdOutlineAddTask className="mr-2 hidden md:block" />
                            <span>Add Task</span>
                        </label>
                        <div className="basis-5/6 flex items-center border border-gray-400 rounded px-2">
                            <BsSearch className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="filter by name/task"
                                className="py-1 px-2 w-[100%] outline-none text-gray-400"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </motion.section>
            <section>
                {isOpen && <AddTaskModal {...{ refetch, setOpen }} />}
            </section>
            {/*All tasks Data in AllTask component*/}
            <section className="bg-white rounded drop-shadow-md w-full h-auto p-4 my-4">
                <div className="overflow-x-auto">
                    <AllTasks
                        {...{ data, searchTerm, setView, view, setSingleTask }}
                    />
                </div>
            </section>
            {/*Task Details Modal*/}
            {view && <TaskDetailsModalUI {...{ singleTask, setSingleTask }} />}
        </>
    );
};

export default DailyTask;
