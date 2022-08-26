import React, { useEffect, useState } from "react";
import { AiFillSave } from "react-icons/ai";
import { toast } from "react-toastify";
import profile from "../../../Assets/icons/Live-chat-icon/profile_user.png";
import "./Hrdashboard.css";

const Dashboard = () => {
    const [requests, setRequest] = useState([]);
    const [upstatus, setUpstatus] = useState("");
    const [leave, setLeave] = useState({});

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/users")
            .then((res) => res.json())
            .then((data) => setRequest(data));
    }, []);

    const approv = (event) => {
        setUpstatus(event.target.value);
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

    return (
        <div>
            {/* Leave Requst Section */}

            <div className="px-5">
                <h1 className="text-2xl text-left lg:text-center font-bold my-5">
                    Leave Request
                </h1>
                <div class="overflow-auto rounded-none w-96 lg:w-full">
                    <table class="w-11/12  shadow-2xl border-2 border-cyan-300  mx-auto my-12 text-base overflow-hidden">
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

                                    <td>
                                        <div>
                                            <label
                                                for={request._id}
                                                onClick={() =>
                                                    setLeave(request)
                                                }
                                                class="modal-button"
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
                                                {request.aprovel
                                                    ? request.aprovel
                                                    : "Approve Statas"}
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
                                <label for={leave._id} class="btn btn-warning">
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
