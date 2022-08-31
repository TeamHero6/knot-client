import React, { useEffect, useState } from "react";
import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const Hrtable = () => {
    const [details, setDetails] = useState([]);

    const [employinfo, setEmployinfo] = useState({});
    useEffect(() => {
        fetch(
            "https://knot-business-solution-server.herokuapp.com/employeedetails"
        )
            .then((res) => res.json())
            .then((data) => setDetails(data));
    }, [details]);

    return (
        <div className="mx-auto w-4/5 rounded-lg my-5 ">
            <div>
                <ComposedChart
                    width={500}
                    height={400}
                    data={details}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="Department" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Salary" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="Salary" stroke="#ff7300" />
                </ComposedChart>
            </div>
            <div className="rounded-none">
                <table className="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                    <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                        <tr>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Name
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Phone
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Email
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Blood
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Department
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.map((d) => (
                            <tr className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100">
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {d.Employee_Name}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {d.phone}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {d.Email}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {d.Blood_Group}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {d.Department}
                                </td>
                                <td className="text-[#0182be]">
                                    <label
                                        for={d._id}
                                        onClick={() => setEmployinfo(d)}
                                        className="modal-button"
                                    >
                                        Details
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <input
                    type="checkbox"
                    id={employinfo._id}
                    className="modal-toggle"
                />
                <div className="modal">
                    <div className="modal-box">
                        <div>
                            <div>
                                <h1 className="text-xl border-b-2 border-yellow-500 capitalize mb-3">
                                    Details info
                                </h1>
                                <div>
                                    <p>
                                        <span className="font-medium capitalize">
                                            Employee Name:
                                        </span>
                                        {employinfo.Employee_Name}
                                    </p>
                                    <p>
                                        <span className="font-medium capitalize">
                                            Employee ID:
                                        </span>
                                        {employinfo.Employee_id}
                                    </p>
                                    <p>
                                        <span className="font-medium capitalize">
                                            Company Email:
                                        </span>
                                        {employinfo.Company_Email}
                                    </p>
                                    <p>
                                        <span className="font-medium capitalize">
                                            Joining Date:
                                        </span>
                                        {employinfo.Joining_Date}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-action">
                            <label
                                for={employinfo._id}
                                className="btn btn-warning"
                            >
                                Cancel
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hrtable;
