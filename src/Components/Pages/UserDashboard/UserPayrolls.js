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
                        {/* <thead className=' border-b border-cyan-100'> */}
                        <tr>
                            <th className="py-3 text-left px-6 whitespace-nowrap">SL.</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">NAME</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">JOB</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">ICON</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                            <td className="py-3 px-6 whitespace-nowrap">1</td>
                            <td className="py-3 px-6 whitespace-nowrap">Cy Ganderton</td>
                            <td className="py-3 px-6 whitespace-nowrap">Quality Control Specialist</td>
                            <td className="py-3 px-6 whitespace-nowrap">Blue</td>
                            <td className="py-3 px-6 whitespace-nowrap">This is fifth column</td>
                        </tr>
                    </tbody>
                </table>
                {/* <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Employee ID </th>
                            <th>Name</th>
                            <th>Salary Grade</th>
                            <th>
                                Payrolls Amount <br />
                                Details
                            </th>
                            <th>Payrolls Amount <br />Details</th>
                            <th>Paid Amount</th>
                            <th>Pament Date</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payrolls?.map(payroll =>
                                <tr>
                                    <th>{payroll.Employee_ID}</th>
                                    <td>{payroll.Name}</td>
                                    <td>{payroll.Payroll_Type}</td>
                                    <td>{payroll.Pay_Amount}</td>
                                    <td>{payroll.Payment_Date}</td>
                                    <td>{payroll.Pay_stutas}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table> */}
            </div>
        </div>
    );
};

export default UserPayrolls;
