import React, { useEffect, useState } from "react";
import { AiFillSave } from "react-icons/ai";
import { toast } from "react-toastify";
import { Pie, PieChart } from "recharts";
import profile from "../../../Assets/icons/Live-chat-icon/profile_user.png";
import "./Hrdashboard.css";

const Dashboard = () => {
    const data01 = [
        {
            "name": "Group A",
            "value": 400
        },
        {
            "name": "Group B",
            "value": 300
        },
        {
            "name": "Group C",
            "value": 300
        },
        {
            "name": "Group D",
            "value": 200
        },
        {
            "name": "Group E",
            "value": 278
        },
        {
            "name": "Group F",
            "value": 189
        }
    ];
    const data02 = [
        {
            "name": "Group A",
            "value": 2400
        },
        {
            "name": "Group B",
            "value": 4567
        },
        {
            "name": "Group C",
            "value": 1398
        },
        {
            "name": "Group D",
            "value": 9800
        },
        {
            "name": "Group E",
            "value": 3908
        },
        {
            "name": "Group F",
            "value": 4800
        }
    ];
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
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <div className="w-62 mx-auto">
                            <PieChart width={300} height={250}>
                                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#fff814d4" />
                                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#2d1856" label />
                            </PieChart>
                        </div>


                        <h3 className="text-center font-medium py-3">
                            Employee By Gender
                        </h3>
                    </div>
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <div className="w-62 mx-auto">
                            <PieChart width={300} height={250}>
                                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#a3dfce" />
                                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                            </PieChart>
                        </div>
                        <h3 className="text-center font-medium py-3">
                            Employee By Department
                        </h3>
                    </div>
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <div className="w-62 mx-auto">
                            <PieChart width={300} height={250}>
                                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#f16b1c" label />
                            </PieChart>
                        </div>
                        <h3 className="text-center font-medium py-3">
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
                <div class="overflow-auto rounded-none  " style={{ width: "1000px" }}>
                    <table class="shadow-2xl border-2 border-cyan-300  mx-auto my-12 text-base overflow-hidden">
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
                                                for={request._id}
                                                onClick={() =>
                                                    setLeave(request)
                                                }
                                                className="modal-button"
                                            >
                                                Details
                                            </label>
                                        </div>
                                    </td>

                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <select
                                            className="lg:my-3 bg-transparent"
                                            onChange={approv}
                                        >
                                            <option value="approval_statas">
                                                {request.aprovel ? request.aprovel : 'Approve Statas'}
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
                                            onClick={() => save(request._id)}
                                            className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                            type="subimt"
                                        >
                                            <AiFillSave />
                                            Save
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <input
                        type="checkbox"
                        id={leave._id}
                        class="modal-toggle"
                    />
                    <div className="modal">
                        <div className="modal-box">
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
                                <label for={leave._id} class="btn btn-warning">
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
                <div className=" rounded-none">
                    <table className="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
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
                                            className="modal-button"
                                        >
                                            Details
                                        </label>
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap flex">
                                        <select
                                            onChange={taskup}
                                            className="lg:my-3 bg-transparent"
                                        >
                                            <option value="ToDo">{task.intask ? task.intask : 'To Do'}</option>
                                            <option value="Doing">Doing</option>
                                            <option value="Done">Done</option>
                                        </select>
                                        <button
                                            onClick={() => taskshandel(task._id)}
                                            className="flex items-center gap-2 bg-blue-600 ml-3 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                            type="subimt"
                                        >
                                            <AiFillSave />
                                            Save
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <input
                        type="checkbox"
                        id={daily._id}
                        className="modal-toggle"
                    />
                    <div className="modal">
                        <div className="modal-box">
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
                            <div className="modal-action">
                                <label for={daily._id} className="btn btn-warning">
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
