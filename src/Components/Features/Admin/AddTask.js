import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import FilterCard from "./FilterCard";

const AddTask = ({ refetch }) => {
    const [employeeEmail, setEmployeeEmail] = useState();
    const [employeeName, setEmployeeName] = useState("");
    const [search, setSearch] = useState("");
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    const users = useSelector((state) => state.auth.allEmployees);

    const handleTask = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const employeeEmail = e.target.employeeEmail.value;
        const department = e.target.department.value;
        const taskTitle = e.target.taskTitle.value;
        const taskDescription = e.target.taskDescription.value;
        const deadline = e.target.deadline.value;
        // const companyName = "";
        const result = {
            name,
            employeeEmail,
            department,
            taskTitle,
            taskDescription,
            deadline,
            companyName,
        };

        // Post data to server
        fetch(
            "https://knot-business-solution-server.herokuapp.com/v1/addNewTask",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(result),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    e.target.reset();
                    refetch();
                    setEmployeeEmail("");
                    setEmployeeName("");
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Task is assigned to ${employeeName}`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };
    return (
        <div>
            <form
                className="w-full mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto"
                onSubmit={handleTask}
            >
                <div className="flex flex-col lg:flex-row md:gap-5 w-full relative">
                    <div className=" w-full lg:w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none relative flex">
                        <input
                            className="grow bg-transparent py-2 pl-3"
                            type="text"
                            name="name"
                            value={employeeName ? employeeName : search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Name"
                        />
                        <ImCross
                            onClick={() => setEmployeeName("")}
                            className={
                                employeeName
                                    ? "absolute top-3 right-8 text-gray-400 hover:text-black"
                                    : "hidden"
                            }
                        />
                    </div>
                    <div
                        className={`${
                            employeeName ? "hidden" : "absolute"
                        } w-full lg:w-6/12 drop-shadow-xl rounded-md bg-white top-12 ${
                            !search ? "p-0" : "py-2 pl-3"
                        }`}
                    >
                        {users
                            .filter((val) => {
                                if (search === "") {
                                    return val;
                                } else if (
                                    val.name
                                        .toLocaleLowerCase()
                                        .includes(search.toLocaleLowerCase())
                                ) {
                                    return val;
                                }
                                return false;
                            })
                            .map((user) => {
                                return (
                                    <FilterCard
                                        user={user}
                                        setEmployeeEmail={setEmployeeEmail}
                                        setEmployeeName={setEmployeeName}
                                        key={user?._id}
                                    />
                                );
                            })}
                    </div>
                    <input
                        className="py-2 pl-3 w-full lg:w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                        type="text"
                        name="employeeEmail"
                        value={employeeEmail}
                        placeholder="Employee email"
                        disabled
                    />
                </div>
                <div className="flex flex-col lg:flex-row md:gap-5 w-full">
                    <select
                        name="department"
                        id=""
                        className="py-2 pl-3 w-full lg:w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                    >
                        <option value="sales">Sales</option>
                        <option value="marketing">Marketing</option>
                        <option value="finance">Finance</option>
                        <option value="admin">Admin</option>
                    </select>
                    <input
                        type="datetime-local"
                        name="deadline"
                        className="py-2 pl-3 w-full lg:w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                    />
                </div>
                <input
                    className="py-2 pl-3 w-full  my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                    type="text"
                    name="taskTitle"
                    placeholder="Task Title"
                />
                <textarea
                    className="py-2 pl-3 w-full  my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                    type="text"
                    name="taskDescription"
                    placeholder="Task Description"
                />

                <input
                    className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                    type="submit"
                    value="ADD TASK"
                />
            </form>
        </div>
    );
};

export default AddTask;
