import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
} from "recharts";
import IncomeExpenseOverview from "./IncomeExpenseOverview";
import PartnerDetails from "./PartnerDetails";
import SalesReport from "./SalesReport";

const FinanceDashboard = () => {
    const [partnerList, setPartnerList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/partner")
            .then((res) => res.json())
            .then((data) => setPartnerList(data.reverse()));
    }, [partnerList]);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* <section className="flex gap-5">
                <div class="card w-72 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <p>Cash On Hand</p>
                        <h2 class="card-title "></h2>
                    </div>
                </div>
                <div class="card w-72 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <p>Total Sales</p>
                        <h2 class="card-title "></h2>
                    </div>
                </div>
                <div class="card w-72 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <p>Total Cost</p>
                        <h2 class="card-title "></h2>
                    </div>
                </div>
                <div class="card w-72 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <p>Net Profit</p>
                        <h2 class="card-title "></h2>
                    </div>
                </div>
            </section> */}

            <section className="lg:w-full flex justify-around bg-white shadow-gray-300 border shadow-md rounded py-6 px-6 mt-5 md:w-9/12 sm:w-11/12 sm:mx-auto">
                <div className="w-4/12">
                    <IncomeExpenseOverview />
                </div>
                <div className="w-7/12">
                    <SalesReport />
                </div>
            </section>

            <section className="lg:w-full flex justify-around bg-white shadow-gray-300 border shadow-md rounded py-6 px-6 mt-5 md:w-9/12 sm:w-11/12 sm:mx-auto">
                <div>
                    <PartnerDetails />
                </div>
                <div>
                    <h2 className="text-base font-semibold">Company Share</h2>
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
                                stroke="#06B6D4"
                                fill="#06B6D4"
                                fillOpacity={0.3}
                            />
                            <Legend />
                        </RadarChart>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default FinanceDashboard;
