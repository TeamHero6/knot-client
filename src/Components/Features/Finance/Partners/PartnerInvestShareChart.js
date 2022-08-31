import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
} from "recharts";
const PartnerInvestShareChart = () => {
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
        <div className="bg-white my-4 py-5 px-5 lg:flex lg:justify-between">
            <div>
                <RadarChart outerRadius={90} width={350} height={250} data={partnerList}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Invest Amount" dataKey="Amount" stroke="#06B6D4" fill="#06B6D4" fillOpacity={0.3} />
                    <Legend />
                </RadarChart>
            </div>
            <div>

                <RadarChart outerRadius={90} width={350} height={250} data={partnerList}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Company Share" dataKey="share" stroke="#ff7300" fill="#ff7300" fillOpacity={0.3} />
                    <Legend />
                </RadarChart>
            </div>
        </div>
    );
};

export default PartnerInvestShareChart;
