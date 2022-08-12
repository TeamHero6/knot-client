import React, { useEffect, useState } from "react";
import { BiSave } from "react-icons/bi";
import "./Hrdashboard.css";

const Dashboard = () => {
    const [requests, setRequest] = useState([]);
    const [allTask, setAlltask] = useState([]);

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/user")
            .then((res) => res.json())
            .then((data) => setRequest(data));
    }, []);
    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/alltasks")
            .then((res) => res.json())
            .then((data) => setAlltask(data));
    }, []);
    return (
        <div>
            {/* employee Database Section */}
            <div className="pt-5">
                <h1 className="text-2xl text-center font-bold">
                    Employee Database
                </h1>
                <div className="grid grid-cols-3 gap-5 mt-5 p-5">
                    <div className="gray pb-3">
                        <div class="w-24 h-24 rounded-full bg-white mx-auto text-center pt-3 mt-4 border-4 border-indigo-500/100">
                            <span className="font-medium">
                                Total Employees 12
                            </span>
                        </div>
                        <h3 className="text-center font-medium pt-3">
                            Employee By Gender
                        </h3>
                    </div>
                    <div className="gray pb-3">
                        <div class="w-24 h-24 rounded-full bg-white mx-auto text-center pt-3 mt-4 border-4 border-indigo-500/100">
                            <span className="font-medium">
                                HR <br /> 8
                            </span>
                        </div>
                        <h3 className="text-center font-medium pt-3">
                            Employee By Department
                        </h3>
                    </div>
                    <div className="gray pb-3">
                        <div class="w-24 h-24 rounded-full bg-white mx-auto text-center pt-3 mt-4 border-4 border-indigo-500/100">
                            <span className="font-medium">
                                CEO <br />1
                            </span>
                        </div>
                        <h3 className="text-center font-medium pt-3">
                            Employee By Designation
                        </h3>
                    </div>
                </div>
            </div>

            {/* Leave Requst Section */}

            <div className="px-5">
                <h1 className="text-2xl text-center font-bold my-5">
                    Leave Request
                </h1>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Dept</th>
                                <th>Designation</th>
                                <th>Leave Date</th>
                                <th>Reason For Leave</th>
                                <th>Leave Request</th>
                                <th>Approval</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((request) => (
                                <tr>
                                    <th>{request.id}</th>
                                    <td>{request.Name}</td>
                                    <td>{request.dep}</td>
                                    <td>{request.Designation}</td>
                                    <td>{request.e_date}</td>
                                    <td>{request.leave}</td>
                                    <td>{request.leave_date}</td>
                                    <td>Not</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Daily Task Overview Section */}
            <div className="px-5">
                <h1 className="text-2xl text-center font-bold my-5">
                    Daily Task Overview
                </h1>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Assign Date & Time</th>
                                <th>Due Date & Time</th>
                                <th>Department. Name</th>
                                <th>Designation</th>
                                <th>Today Task</th>
                                <th>Assign By</th>
                                <th>Task Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allTask.map((task) => (
                                <tr>
                                    <th>{task.DueDate}</th>
                                    <td>{task.DueDate}</td>
                                    <td>{task.department}</td>
                                    <td>{task.designation}</td>
                                    <td>{task.task}</td>
                                    <td>{task.assignBy}</td>
                                    <td>
                                        <select>
                                            <option value="To Do">
                                                {" "}
                                                To Do
                                            </option>
                                            <option value="Doing">Doing</option>
                                            <option value="Done">Done</option>
                                        </select>
                                        <button className="ml-3 ">
                                            <BiSave></BiSave>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
