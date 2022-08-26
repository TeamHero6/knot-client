import { motion } from "framer-motion";
import React from "react";
import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Pie,
    PieChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const DirectExpense = () => {
    const data = [
        {
            name: "Page A",
            pv: 2400,
        },
        {
            name: "Page B",
            pv: 1398,
        },
        {
            name: "Page C",
            pv: 9800,
        },
    ];
    const data01 = [
        {
            name: "Group A",
            value: 2400,
        },
        {
            name: "Group B",
            value: 4567,
        },
        {
            name: "Group C",
            value: 1398,
        },
    ];
    const data02 = [
        {
            name: "Group A",
            value: 2400,
        },
        {
            name: "Group B",
            value: 4567,
        },
        {
            name: "Group C",
            value: 1398,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="grid grid-cols-3 gap-4">
                <div class="card col-span-1 mx-auto card-compact w-72 bg-base-100 shadow-xl">
                    <div class="card-body text-center">
                        <h2 className="font-bold text-2xl ">
                            $500
                        </h2>
                        <p className="text-lg">Direct Expense</p>
                    </div>
                </div>
                <div class="card col-span-1 mx-auto card-compact w-72 bg-base-100 shadow-xl">
                    <div class="card-body text-center">
                        <h2 className="font-bold text-2xl ">
                            $500
                        </h2>
                        <p className="text-lg">General & Admin Expense</p>
                    </div>
                </div>
                <div class="card col-span-1 mx-auto card-compact w-72 bg-base-100 shadow-xl">
                    <div class="card-body text-center">
                        <h2 className="font-bold text-2xl ">
                            $500
                        </h2>
                        <p className="text-lg">Salary Expense</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-full mx-20 flex justify-around bg-white shadow-gray-300 border shadow-md rounded py-6 px-6 mt-5 md:w-9/12 sm:w-11/12 sm:mx-auto">
                <div>
                    <h2 className="font-bold mb-3 text-red-500">All Expense</h2>
                    <p>Direct Expense: $500</p>
                    <p>General & Admin Expense: $500</p>
                    <p>Salary Expense: $500</p>
                    <hr className="mt-2" />
                    <br />
                    <p className="font-semibold">
                        Total Expense:{" "}
                        <span className="font-sans text-red-500">$500</span>{" "}
                    </p>
                </div>
                <div>
                    <ComposedChart width={450} height={250} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Bar dataKey="pv" barSize={20} fill="#ec2f4b" />
                    </ComposedChart>
                </div>
            </div>
            <div className="lg:w-full mx-20 mb-5 flex justify-around bg-white shadow-gray-300 border shadow-md rounded py-6 px-6 mt-5 md:w-9/12 sm:w-11/12 sm:mx-auto">
                <div>
                    <PieChart width={350} height={250}>
                        <Pie
                            data={data01}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={50}
                            fill="#8884d8"
                        />
                        <Pie
                            data={data02}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#009FFF"
                            label
                        />
                    </PieChart>
                    <p className="text-center text-blue-500 font-bold">
                        Direct Expense
                    </p>
                </div>
                <div>
                    <PieChart width={350} height={250}>
                        <Pie
                            data={data01}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={50}
                            fill="#009FFF"
                        />
                        <Pie
                            data={data02}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#82ca9d"
                            label
                        />
                    </PieChart>
                    <p className="text-center text-green-500 font-bold">
                        General & Admin Expense
                    </p>
                </div>
                <div>
                    <PieChart width={350} height={250}>
                        <Pie
                            data={data01}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={50}
                            fill="#B84772"
                        />
                        <Pie
                            data={data02}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#82ca9d"
                            label
                        />
                    </PieChart>
                    <p className="text-center text-lime-500 font-bold">
                        Salary Expense
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default DirectExpense;
