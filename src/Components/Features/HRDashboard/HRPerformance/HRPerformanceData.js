import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HRTransferCard from "./HRTransferCard";

const HRPerformanceData = () => {
    const [promo, setPromo] = useState([]);
    const [transfer, setTransfer] = useState([]);
    const loggerInfo = useSelector(state => state.auth.loggerInfo);
    const { companyName } = loggerInfo;

    useEffect(() => {
        fetch(`http://localhost:5000/transfer/${companyName}`)
            .then((res) => res.json())
            .then((data) => setTransfer(data));
    }, [transfer, companyName]);
    console.log(transfer, companyName);

    useEffect(() => {
        fetch(`http://localhost:5000/performance/${companyName}`)
            .then((res) => res.json())
            .then((data) => setPromo(data));
    }, [promo, companyName]);
    // console.log(promo, companyName);

    return (
        <div>
            <div>
                <div>
                    <h1 className="font-semibold text-green-500 text-xl  mt-5 ml-5">
                        Employee Promotion Database
                    </h1>
                    <div className="w-full h-80 mb-5">
                        <table className="shadow-2xl border-2 border-cyan-300 min-w-full h-10 mx-auto mt-4 text-base overflow-hidden">
                            <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                                <tr>
                                    <th className="py-3 text-left px-6 pl-10 whitespace-nowrap">
                                        Promotion Date
                                    </th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">
                                        Name
                                    </th>
                                    <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                        Employee ID
                                    </th>
                                    <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                        Department
                                    </th>
                                    <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                        Designation
                                    </th>
                                    <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                        Increment
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {promo.map((promo) => (
                                    <tr
                                        key={promo._id}
                                        className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100"
                                    >
                                        <td className="py-3 px-6 pl-10 whitespace-nowrap">
                                            {promo.Promotion_Date}
                                        </td>
                                        <td className="py-3 px-6 whitespace-nowrap text-center">
                                            {promo.Name}
                                        </td>
                                        <td className="py-3 px-6 whitespace-nowrap text-center">
                                            {promo.Employee_ID}
                                        </td>
                                        <td className="py-3 px-6 whitespace-nowrap text-center">
                                            {promo.Department}
                                        </td>
                                        <td className="py-3 px-6 whitespace-nowrap text-center">
                                            {promo.Designation}
                                        </td>
                                        <td className="py-3 px-6 whitespace-nowrap text-center">
                                            {promo.Increment_Salary}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="font-semibold text-xl my-5 ml-5">
                    Employee Transfer Database
                </h1>
                <div className="grid grid-rows-2 mb-10 grid-flow-col gap-5">
                    {transfer.slice(0, 20).map((transfer) => (
                        <HRTransferCard transfer={transfer}></HRTransferCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HRPerformanceData;
