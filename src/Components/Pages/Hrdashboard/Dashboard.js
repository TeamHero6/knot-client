import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
import { toast } from "react-toastify";
import profile from "../../../Assets/icons/Live-chat-icon/profile_user.png";
import "./Hrdashboard.css";

const Dashboard = () => {
    const [requests, setRequest] = useState([]);
    const [allTask, setAlltask] = useState([]);
    const [upstatus, setUpstatus] = useState("");
    const [tasku, setTasku] = useState("");
    const [leave, setLeave] = useState({});
    const [daily, setDaily] = useState({});

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/users")
            .then((res) => res.json())
            .then((data) => setRequest(data));
    }, []);
    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/alltasks")
            .then((res) => res.json())
            .then((data) => setAlltask(data));
    }, []);

    const approv = (event) => {
        setUpstatus(event.target.value);
    };
    const taskup = (event) => {
        setTasku(event.target.value);
    };
    const save = (id) => {
        const aprovel = upstatus;

        const updata = { aprovel };

        const url = `https://knot-business-solution-server.herokuapp.com/users/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updata),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("success");
            });
    };

    const taskshandel = (id) => {
        const intask = tasku;

        const taskcom = { intask };

        const url = `https://knot-business-solution-server.herokuapp.com/alltasks/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskcom),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success("success Task");
            });
    };

    return (
        <div>
            <div className="pt-5">
                <h1 className="text-2xl text-center font-bold">
                    Employee Database
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 p-5">
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
                <div class="overflow-auto rounded-none">
                    <table class="lg:w-11/12 shadow-2xl border-2 border-cyan-300  mx-auto my-12 text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Date
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    ID
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Name
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Dept
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    type of leave
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Leave Request Date
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    view details
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    approval status
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    SaveInfo
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((request) => (
                                <tr className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100">
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {request.Date}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {request.id}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {request.Name}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {request.dep}
                                    </td>

                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {request.leave_type}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {request.e_date}
                                    </td>
                                    <td>
                                        <div>
                                            <label
                                                for={request.Name}
                                                onClick={() =>
                                                    setLeave(request)
                                                }
                                                class="modal-button"
                                            >
                                                <AiOutlineEye className="text-2xl w-10 lg:mx-auto"></AiOutlineEye>
                                            </label>
                                        </div>
                                    </td>

                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <select
                                            className="lg:my-3"
                                            onChange={approv}
                                        >
                                            <option value="approbal_statas">
                                                approval statas
                                            </option>
                                            <option value="Approve">
                                                Approve
                                            </option>
                                            <option value="Reject">
                                                Reject
                                            </option>
                                        </select>
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <button
                                            className=" btn btn-xs"
                                            onClick={() => save(request._id)}
                                        >
                                            {" "}
                                            save
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <input
                        type="checkbox"
                        id={leave.Name}
                        class="modal-toggle"
                    />
                    <div class="modal">
                        <div class="modal-box">
                            <div>
                                <div className="flex items-center mb-5">
                                    <img
                                        className="w-28"
                                        src={profile}
                                        alt=""
                                    />
                                    <div className="ml-5">
                                        <h2 className="text-2xl capitalize">
                                            {leave.Name}
                                        </h2>
                                        <span className="uppercase">
                                            {leave.dep}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-xl border-b-2 border-yellow-500 capitalize mb-3">
                                        Details info
                                    </h1>
                                    <div>
                                        <p>
                                            <span className="font-medium capitalize">
                                                Date:{" "}
                                            </span>
                                            {leave.Name}
                                        </p>
                                        <p>
                                            <span className="font-medium capitalize">
                                                Employee ID:{" "}
                                            </span>
                                            {leave.id}
                                        </p>
                                        <p>
                                            <span className="font-medium capitalize">
                                                type of leave:{" "}
                                            </span>
                                            {leave.leave_type}
                                        </p>
                                        <p>
                                            <span className="font-medium capitalize">
                                                Leave request Date:{" "}
                                            </span>
                                            {leave.e_date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-action">
                                <label for={leave.Name} class="btn btn-warning">
                                    Cancel
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Daily Task Overview Section */}
            <div className="px-5">
                <h1 className="text-2xl text-center font-bold my-5">
                    Daily Task Overview
                </h1>
                <div class=" rounded-none">
                    <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Assign Date & Time
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Name
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Department
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    view details
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Task Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {allTask.map((task) => (
                                <tr className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100">
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {task.DueDate}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {task.name}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        {task.department}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <label
                                            for={task._id}
                                            onClick={() => setDaily(task)}
                                            class="modal-button"
                                        >
                                            <AiOutlineEye className="text-2xl w-10 lg:mx-auto"></AiOutlineEye>
                                        </label>
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <select
                                            onChange={taskup}
                                            className="lg:my-3"
                                        >
                                            <option value="ToDo"> To Do</option>
                                            <option value="Doing">Doing</option>
                                            <option value="Done">Done</option>
                                        </select>
                                        <button
                                            className="ml-3 "
                                            onClick={() =>
                                                taskshandel(task._id)
                                            }
                                        >
                                            <BiSave></BiSave>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <input
                        type="checkbox"
                        id={daily._id}
                        class="modal-toggle"
                    />
                    <div class="modal">
                        <div class="modal-box">
                            <div>
                                <div className="flex items-center mb-5">
                                    <img
                                        className="w-28"
                                        src={profile}
                                        alt=""
                                    />
                                    <div className="ml-5">
                                        <h2 className="text-2xl capitalize">
                                            {daily.name}
                                        </h2>
                                        <span className="uppercase">
                                            {daily.department}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-xl border-b-2 border-yellow-500 capitalize mb-3">
                                        Details info
                                    </h1>
                                    <div>
                                        <p>
                                            <span className="font-medium capitalize">
                                                {" "}
                                                Assign Date:{" "}
                                            </span>
                                            {daily.DueDate}
                                        </p>
                                        <p>
                                            <span className="font-medium capitalize">
                                                Name:{" "}
                                            </span>
                                            {daily.name}
                                        </p>
                                        <p>
                                            <span className="font-medium capitalize">
                                                Task:{" "}
                                            </span>
                                            {daily.task}
                                        </p>
                                        <p>
                                            <span className="font-medium capitalize">
                                                Task status:{" "}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-action">
                                <label for={daily._id} class="btn btn-warning">
                                    Cancel
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
