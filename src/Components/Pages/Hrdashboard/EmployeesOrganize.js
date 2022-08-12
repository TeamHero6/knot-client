import React, { useEffect, useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsSave2 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const EmployeesOrganize = () => {
    const [requests, setRequest] = useState([]);
    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/user")
            .then((res) => res.json())
            .then((data) => setRequest(data));
    }, []);
    return (
        <div>
            <div className="px-5">
                <h1 className="text-xl  my-5">Team Members Warning Database</h1>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead className="border-b border-gray-600">
                            <tr>
                                <th>
                                    Date
                                    <select className="bg-transparent">
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                    </select>
                                </th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <th>Warning Date</th>
                                <th>Team Member Name</th>
                                <th>Reason of Warning</th>
                                <th>Special Note</th>
                                <th>Warning Type</th>
                                <th>Team Member Feedback</th>
                                <th>Save Change</th>
                            </tr>
                        </thead>

                        <tbody>
                            {requests.map((request) => (
                                <tr>
                                    <th>{request.id}</th>
                                    <td>{request.Name}</td>
                                    <td className="flex items-center">
                                        <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                                        <p className="pl-2">
                                            {" "}
                                            Click Here to warning reason
                                        </p>
                                    </td>

                                    <td>
                                        <div className="flex items-center">
                                            <AiOutlineEyeInvisible className="mr-2"></AiOutlineEyeInvisible>
                                            <FiEdit></FiEdit>
                                            <p className="pl-2"> Edit Option</p>
                                        </div>
                                    </td>
                                    <td>
                                        <select>
                                            <option
                                                value="Light
Midium
High"
                                            >
                                                Light Midiu High
                                            </option>
                                            <option value=""></option>
                                        </select>
                                    </td>
                                    <td className="flex items-center">
                                        <AiOutlineEyeInvisible></AiOutlineEyeInvisible>

                                        <p className="pl-2">
                                            {" "}
                                            Team Member Feedback
                                        </p>
                                    </td>
                                    <td className="text-center text-blue-600 ">
                                        <div className="w-10 mx-auto">
                                            <BsSave2></BsSave2>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="px-5">
                <h1 className="text-xl  my-5 ">Team Member Award Database</h1>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead className="border-b border-gray-600">
                            <tr>
                                <th>
                                    Date
                                    <select className="bg-transparent">
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                    </select>
                                </th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <th>Award Date</th>
                                <th>Team Member Name</th>
                                <th>Type Of Award</th>
                                <th>Leader Feedback</th>
                                <th>Save Change</th>
                            </tr>
                        </thead>

                        <tbody>
                            {requests.map((request) => (
                                <tr>
                                    <th>{request.id}</th>
                                    <td>{request.Name}</td>
                                    <td>
                                        <select>
                                            <option value="Employee of the month">
                                                Employee of the month
                                            </option>
                                            <option value="Employee of the month">
                                                Employee of the month
                                            </option>
                                        </select>
                                    </td>

                                    <td>
                                        <div className="flex items-center">
                                            <AiOutlineEyeInvisible className="mr-2"></AiOutlineEyeInvisible>
                                            <FiEdit></FiEdit>
                                            <p className="pl-2"> Edit Option</p>
                                        </div>
                                    </td>

                                    <td className="text-center text-blue-600 ">
                                        <div className="w-10 mx-auto">
                                            <BsSave2></BsSave2>
                                        </div>
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

export default EmployeesOrganize;
