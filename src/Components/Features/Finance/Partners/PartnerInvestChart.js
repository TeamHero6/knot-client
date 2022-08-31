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

const PartnerInvestChart = () => {
    const [partnerList, setPartnerList] = useState([]);
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    useEffect(() => {
        fetch(`https://knot-business-solution-server.herokuapp.com/partner/${companyName}`)
            .then((res) => res.json())
            .then((data) => setPartnerList(data.reverse()));
    }, [partnerList, companyName]);

    // console.log(partnerList, companyName);

    return (
        <div className="">
            <h2 className="text-base font-semibold text-green-500 mb-10">
                Invest Chart
            </h2>
            <div className="overflow-auto">
                <BarChart width={500} height={250} data={partnerList}>
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="partnerName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="share" fill="#ff7300" />
                    <Bar dataKey="Amount" fill="#06B6D4" />
                </BarChart>
            </div>
        </div>
    );
};

export default PartnerInvestChart;
