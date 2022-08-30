import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserPayrolls = () => {
    const [payrolls, setPayrolls] = useState([]);
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);

    useEffect(() => {
        fetch(`http://localhost:5000/userPayrolls/${loggerInfo.email}`)
            .then((res) => res.json())
            .then((data) => setPayrolls(data))
    }, [loggerInfo]);

    return (
        <div className="mx-auto w-full">
            <h1 className="text-2xl font-bold mt-5 mx-6">Payrolls</h1>
            <div className="w-full mb-5 flex justify-between rounded py-6 px-6 mt-5">
                <table className="shadow-2xl border-2 border-cyan-300 w-full text-base overflow-hidden">
                    <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                        <tr>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Payment Date{" "}
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Name
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Employee ID{" "}
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Department
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Designation
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Payroll Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {payrolls?.map((payroll) => (
                            <tr className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100">
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {payroll.Date}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {payroll.Name}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {payroll.Employee_ID}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {payroll.Department}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {payroll.Designation}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    {payroll.Payroll}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserPayrolls;
