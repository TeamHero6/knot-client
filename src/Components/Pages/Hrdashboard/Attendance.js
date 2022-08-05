import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiEye } from "react-icons/fi";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const Attendance = () => {
    const [payrolls, setPayrolls] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/payrolls")
            .then((res) => res.json())
            .then((data) => setPayrolls(data));
    }, []);
    return (
        <div>
            <h3 className="text-[#0182be] text-2xl p-5">Employee Attendance</h3>
            <div className="mx-auto w-4/5 rounded-lg my-5 ">
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Total Working Hour</th>
                                <th>Over Time</th>
                                <th>Employee Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Habib ullha</th>
                                <th>2512</th>
                                <th>Sales</th>
                                <th>Sales</th>
                                <th>Sales</th>
                                <th className="text-[#0182be]">
                                    <CgProfile></CgProfile>
                                </th>
                            </tr>
                            <tr>
                                <th>Habib ullha</th>
                                <th>2512</th>
                                <th>Sales</th>
                                <th className="text-[#0182be]">
                                    <FiEye></FiEye>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h3 className="text-[#0182be] text-2xl p-5">
                Employees Attendnace Action
            </h3>

            <div className="grid grid-cols-2 gap-5">
                <div>
                    <BarChart
                        width={500}
                        height={300}
                        data={payrolls}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Pay_Amount" fill="#8884d8" />
                        <Bar dataKey="Payable_Amount" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Attendance;
