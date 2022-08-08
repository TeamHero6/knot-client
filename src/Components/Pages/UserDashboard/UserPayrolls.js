import React, { useEffect, useState } from "react";

const UserPayrolls = () => {
    const [payrolls, setPayrolls] = useState([]);
    const [userinfo, setUserinfo] = useState([]);

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/payrolls")
            .then((res) => res.json())
            .then((data) => setPayrolls(data));
    }, []);

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/inputData")
            .then((res) => res.json())
            .then((data) => setUserinfo(data));
    }, []);

    return (
        <div>
            <div className="flex justify-evenly my-5">
                <div className="w-2/5 bg-[#EEEEEE] rounded-lg px-5 py-2">
                    <h1 className="mb-5">User Name</h1>
                    <h1>ID Number : </h1>
                    <h1>Department : </h1>
                    <h1>Designation : </h1>
                </div>
                <div className="w-2/5 bg-[#EEEEEE] rounded-lg px-5 py-2">
                    <h1 className="text-center">Salary Grade </h1>
                    <h1>Basic Salary : </h1>
                    <h1>House Rant : </h1>
                    <h1>Hospital Bill : </h1>
                    <h1>Internet Bill : </h1>
                    <h1>KPL : </h1>
                    <h1>Lunch Bill : </h1>
                    <h1>Over Time : </h1>
                    <h1>TA/DA : </h1>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                    <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                        <tr>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Employee ID </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Name</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Salary Grade</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Payrolls Amount <br /> Details</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Payrolls Amount <br />Details</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Designation</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Pament Date</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Paid Amount </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payrolls?.map(payroll =>
                                <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                    <td className="py-3 px-6 whitespace-nowrap">{payroll.Employee_ID}</td>
                                    <td className="py-3 px-6 whitespace-nowrap">{payroll.Name}</td>
                                    <td className="py-3 px-6 whitespace-nowrap">Salary Grade</td>
                                    <td className="py-3 px-6 whitespace-nowrap">{payroll.Payroll_Type}</td>
                                    <td className="py-3 px-6 whitespace-nowrap">{payroll.Payable_Amount}</td>
                                    <td className="py-3 px-6 whitespace-nowrap">{payroll.Designation}</td>
                                    <td className="py-3 px-6 whitespace-nowrap">{payroll.Payment_Date}</td>
                                    <td className="py-3 px-6 whitespace-nowrap">{payroll.Pay_Amount}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserPayrolls;
