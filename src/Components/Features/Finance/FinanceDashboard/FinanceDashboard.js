import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    Legend,
    ComposedChart,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Area,
    Bar,
    Line,
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

    console.log(partnerList, companyName);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
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
                    <h2 className="text-base font-semibold mb-8">Company Share</h2>
                    <div>
                        <ComposedChart width={500} height={250} data={partnerList}>
                            <XAxis dataKey="partnerName" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Bar dataKey="share" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="share" stroke="#ff7300" />
                        </ComposedChart>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default FinanceDashboard;
