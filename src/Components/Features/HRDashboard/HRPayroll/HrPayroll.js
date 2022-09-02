import React, { useEffect, useState } from "react";
import { AiFillSave } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const HrPayroll = () => {
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName } = loggerInfo;
    const [payrolls, setPayrolls] = useState([]);

    useEffect(() => {
        fetch(
            `https://knot-business-solution-server.herokuapp.com/payrolls/${companyName}`
        )
            .then((res) => res.json())
            .then((data) => setPayrolls(data));
    }, [payrolls, companyName]);
    console.log(payrolls, companyName);

    
    return (
        <div className="ml-5">
            

            

            <div>
                <div className="w-full h-80 mt-5 mb-5">
                    <table className="shadow-2xl border-2 border-cyan-300 min-w-full h-10 mx-auto my-12 text-base overflow-hidden">
                        <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                            <tr>
                                <th className="py-3 text-left px-6 pl-10 whitespace-nowrap">
                                    Payment Date
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
                                    Payroll Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {payrolls.map((payrolls) => (
                                <tr
                                    key={payrolls._id}
                                    className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100"
                                >
                                    <td className="py-3 px-6 pl-10 whitespace-nowrap">
                                        {payrolls.Date}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {payrolls.Name}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {payrolls.Employee_ID}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {payrolls.Department}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {payrolls.Designation}
                                    </td>
                                    <td className="py-3 px-6 whitespace-nowrap text-center">
                                        {payrolls.Payroll}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HrPayroll;
