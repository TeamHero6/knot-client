import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    AreaChart,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Area,
} from "recharts";
import IncomeExpenseOverview from "./IncomeExpenseOverview";
import PartnerDetails from "./PartnerDetails";
import SalesReport from "./SalesReport";

const FinanceDashboard = () => {
    const [partnerList, setPartnerList] = useState([]);
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    useEffect(() => {
        fetch(`http://localhost:5000/partner/${companyName}`)
            .then((res) => res.json())
            .then((data) => setPartnerList(data.reverse()));
    }, [partnerList, companyName]);

    // console.log(partnerList, companyName);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section className=" bg-white shadow-gray-300 border shadow-md rounded py-6 px-6 mt-5 lg:flex lg:flex-row">
                <div className="lg:w-5/12 w-full lg:ml-12 lg:gap-5">
                    <IncomeExpenseOverview />
                </div>
                <div className="lg:w-7/12 w-full">
                    <SalesReport />
                </div>
            </section>

            <section className="bg-white shadow-gray-300 border shadow-md rounded py-6 px-6 mt-5 lg:flex lg:flex-row">
                <div>
                    <PartnerDetails />
                </div>
                <div className="">
                    <h2 className="text-base font-semibold mb-8">Company Share</h2>
                    <div className="overflow-auto">
                        <AreaChart width={500} height={250} data={partnerList}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="partnerName" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="share" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default FinanceDashboard;
