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
                <table class="table w-full">
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
                </table>
            </div>
        </div>
    );
};

export default UserPayrolls;
