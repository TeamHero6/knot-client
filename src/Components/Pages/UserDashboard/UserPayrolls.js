import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";

const UserPayrolls = () => {
    const [payrolls, setPayrolls] = useState([]);

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/payrolls")
            .then((res) => res.json())
            .then((data) => setPayrolls(data));
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
                            <th className="py-3 text-left px-6 whitespace-nowrap">Department</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Payable Amount</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payrolls?.map(payroll =>
                                <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                    <td className="py-3 px-6 whitespace-nowrap">{payroll.Employee_ID}</td>
                                    <td className="py-3 px-6 whitespace-nowrap">{payroll.Name}</td>
                                    <td className="py-3 px-6 whitespace-nowrap">{payroll.Depertment}</td>
                                    <td className="py-3 px-6 whitespace-nowrap">{payroll.Payable_Amount}</td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                    <div>
                                            <label for={payroll._id} class=" modal-button"><AiOutlineEye></AiOutlineEye></label>
                                            <input type="checkbox" id={payroll._id} class="modal-toggle" />
                                            <div class="modal modal-bottom sm:modal-middle">
                                                <div class="modal-box">
                                                    <h3 class="font-bold text-lg">Meeting Information!</h3>
                                                    <p>Employee ID : {payroll.Employee_ID}</p>
                                                    <p>Name : {payroll.Name}</p>
                                                    <p>Department : {payroll.Depertment}</p>
                                                    <p>Payment Date : {payroll.Payment_Date}</p>
                                                    <p>Pay Amount  : {payroll.Pay_Amount}</p>
                                                    <p>Designation : {payroll.Designation}</p>
                                                    <p>Payable Amount : {payroll.Payable_Amount}</p>
                                                    <div class="modal-action">
                                                        <label for={payroll._id} class="btn bg-[#0182BE]">Close!</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
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
