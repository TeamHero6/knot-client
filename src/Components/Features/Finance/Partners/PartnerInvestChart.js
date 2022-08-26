import React, { useEffect, useState } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const PartnerInvestChart = () => {
    const [partnerList, setPartnerList] = useState([]);

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/partner")
            .then((res) => res.json())
            .then((data) => setPartnerList(data.reverse()));
    }, [partnerList]);
    return (
        <div className="w-2/4">
            <h2 className="text-base font-semibold text-green-500 mb-5">
                Invest Chart
            </h2>
            <BarChart width={500} height={250} data={partnerList}>
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="partnerName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="share" fill="#ff7300" />
                <Bar dataKey="investAmount" fill="#06B6D4" />
            </BarChart>
        </div>
    );
};

export default PartnerInvestChart;
