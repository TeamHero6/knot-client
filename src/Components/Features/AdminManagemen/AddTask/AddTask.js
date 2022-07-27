import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import Loader from "../../../Shared/Loader/Loader";
import TaskTable from "../TaskTable/TaskTable";

const AddTask = () => {
    const [user, loading, error] = useAuthState(auth);
    const [data, setData] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    if (user) {
        console.log(user);
    }
    if (loading) {
        return <Loader />;
    }

    const handleNewTask = (e) => {
        e.preventDefault();
        const Name = e.target.Name.value;
        const EmployeeID = e.target.EmployeeID.value;
        const Department = e.target.Department.value;
        const Designation = e.target.Designation.value;
        const AssignTask = e.target.AssignTask.value;
        const Task = e.target.Task.value;
        const AssignedBy = e.target.AssignedBy.value;
        const AssignedByEmployeeID = e.target.AssignedByEmployeeID.value;
        const AssignedByDepartment = e.target.AssignedByDepartment.value;
        const AssignedByDesignation = e.target.AssignedByDesignation.value;

        const newTask = {
            Name,
            EmployeeID,
            Department,
            Designation,
            AssignTask,
            Task,
            AssignedBy,
            AssignedByEmployeeID,
            AssignedByDepartment,
            AssignedByDesignation,
        };
        setData([...data, newTask]);
    };
    return (
        <div>
            <div>
                <button
                    className="bg-cyan-400 px-3 py-2 rounded ml-10 text-white my-6"
                    onClick={() => setIsFormOpen(!isFormOpen)}
                >
                    New +
                </button>
                <form
                    className={`sm:max-w-sm w-72 lg:w-[100%] ml-10 ${
                        isFormOpen ? "block" : "hidden"
                    }`}
                    onSubmit={handleNewTask}
                >
                    <div>
                        <input
                            type="text"
                            name="Name"
                            className="w-full my-2 border-[0.5px] px-3 py-1 rounded text-gray-400"
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            name="EmployeeID"
                            className="w-full my-2 border-[0.5px] px-3 py-1 rounded"
                            placeholder="EmployeeID"
                        />
                        <input
                            type="text"
                            name="Department"
                            className="w-full my-2 border-[0.5px] px-3 py-1 rounded"
                            placeholder="Department"
                        />
                        <input
                            type="text"
                            name="Designation"
                            className="w-full my-2 border-[0.5px] px-3 py-1 rounded"
                            placeholder="Designation"
                        />
                        <input
                            type="text"
                            name="AssignTask"
                            className="w-full my-2 border-[0.5px] px-3 py-1 rounded"
                            placeholder="Assign Task"
                        />
                        <input
                            type="text"
                            name="Task"
                            className="w-full my-2 border-[0.5px] px-3 py-1 rounded"
                            placeholder="Task"
                        />
                    </div>
                    <div>
                        <h2 className="text-gray-400 text-center">
                            ASSIGN BY:
                        </h2>
                        <input
                            type="text"
                            name="AssignedBy"
                            className="w-full my-2 border-[0.5px] px-3 py-1 rounded text-gray-400"
                            value={`${user ? user.displayName : "name"}`}
                        />
                        <input
                            type="text"
                            name="AssignedByEmployeeID"
                            className="w-full my-2 border-[0.5px] px-3 py-1 rounded"
                            placeholder="EmployeeID"
                        />
                        <input
                            type="text"
                            name="AssignedByDepartment"
                            className="w-full my-2 border-[0.5px] px-3 py-1 rounded"
                            placeholder="Department"
                        />
                        <input
                            type="text"
                            name="AssignedByDesignation"
                            className="w-full my-2 border-[0.5px] px-3 py-1 rounded"
                            placeholder="Designation"
                        />
                    </div>
                    <input
                        type="submit"
                        value="SAVE"
                        className="w-full bg-cyan-400 text-white py-2 rounded"
                    />
                </form>
            </div>
            <section className="mt-12">
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>ID</th>
                                <th>Dept.</th>
                                <th>Task</th>
                                <th>Due Date</th>
                                <th>Status</th>
                                <th>Report</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((task) => (
                                <TaskTable {...{ task }} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default AddTask;
