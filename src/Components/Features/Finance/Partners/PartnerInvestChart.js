import React, { useEffect, useState } from 'react';
import {
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
    Legend,
    Bar,
    BarChart,
} from "recharts";


const PartnerInvestChart = () => {
    const [partnerList, setPartnerList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/partner")
            .then((res) => res.json())
            .then((data) => setPartnerList(data.reverse()));
    }, [partnerList]);
    return (
        <div className='w-2/4'>
            <h2 className='text-base font-semibold mb-5'>Invest Chart</h2>
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