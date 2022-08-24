import React, { useEffect, useState } from "react";
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

    useEffect(() => {
        fetch("http://localhost:5000/partner")
            .then((res) => res.json())
            .then((data) => setPartnerList(data.reverse()));
    }, [partnerList]);
    return (
        <div className="w-2/4 bg-white shadow-gray-300 border shadow-sm rounded py-6 px-6 mt-5 md:w-9/12 sm:w-11/12 sm:mx-auto ">
            <div className="flex gap-10 mx-auto">
                <div>
                    <RadarChart
                        outerRadius={90}
                        width={350}
                        height={250}
                        data={partnerList}
                    >
                        <PolarGrid />
                        <PolarAngleAxis dataKey="partnerName" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Radar
                            name="Invest Amount"
                            dataKey="investAmount"
                            stroke="#06B6D4"
                            fill="#06B6D4"
                            fillOpacity={0.3}
                        />
                        <Legend />
                    </RadarChart>
                </div>
                <div>
                    <RadarChart
                        outerRadius={90}
                        width={350}
                        height={250}
                        data={partnerList}
                    >
                        <PolarGrid />
                        <PolarAngleAxis dataKey="partnerName" />
                        <PolarRadiusAxis angle={-210} domain={[0, 30]} />
                        <Radar
                            name="Company Share"
                            dataKey="share"
                            stroke=" #ff7300"
                            fill="#ff7300"
                            fillOpacity={0.3}
                        />
                        <Legend />
                    </RadarChart>
                </div>
            </div>
        </div>
    );
};

export default PartnerInvestShareChart;
