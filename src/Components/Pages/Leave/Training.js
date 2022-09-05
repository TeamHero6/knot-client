import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const Training = () => {
    const [trainings, setTrainings] = useState([]);
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    useEffect(() => {
        fetch(`http://localhost:5000/Trainnig/${loggerInfo.email}`)
            .then((res) => res.json())
            .then((data) => setTrainings(data.reverse()));
    }, []);

    return (
        <div className="w-full mx-auto">
            <div>
                <BarChart
                    width={500}
                    height={300}
                    data={trainings}
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
        </div>
    );
};

export default Training;
