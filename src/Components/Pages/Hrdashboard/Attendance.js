import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
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
    console.log(payrolls);
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ opacity: 1, y: 1 }}
            exit={{ y: -50, opacity: 0 }}
        >
            <h3 className="text-[#0182be] text-2xl p-5">Employee Attendance</h3>
            <div className="mx-auto w-4/5 rounded-lg my-5 ">
                <div className="rounded-none">
                    <table className="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Date
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Start Time
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    End Time
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Total Working Hour
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Over Time
                                </th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">
                                    Employee Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100">
                                <td className="py-3 px-6 whitespace-nowrap">
                                    Habib ullha
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    2512
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    Sales
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    Sales
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    Sales
                                </td>
                                <td className="text-[#0182be]">
                                    <button>
                                        <CgProfile></CgProfile>
                                    </button>
                                </td>
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
                {/* <li><Link  to="">Dashboard</Link></li>
                        <li><Link  to="employeeorg">Employees Organize</Link></li>
                        <li><Link  to="performance">Performance</Link></li>
                        <li><Link  to="payrolls">Payrolls</Link></li>
                        <li><Link  to="attendance">Attendance</Link></li> */}
            </div>
        </motion.div>
    );
};

export default Attendance;
