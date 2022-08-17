import React, { useEffect, useState } from "react";

const UserPayrolls = () => {
    const [payrolls, setPayrolls] = useState([]);
    const [payrollModal, setPayrollModal] = useState({});

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/payrolls")
            .then((res) => res.json())
            .then((data) => setPayrolls(data));
    }, []);

    return (
        <div>
            <div className="flex justify-evenly my-5">
                {/* <div className="w-2/5 bg-[#EEEEEE] rounded-lg px-5 py-2">
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
                </div> */}
            </div>
            <div className="overflow-x-auto">
                <table className="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden w-full">
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
                                            <label for={payroll._id} onClick={() => setPayrollModal(payroll)} className=" modal-button"><span className='underline hover:text-blue-500 hover:font-medium'>Details</span></label>

                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <input type="checkbox" id={payrollModal._id} className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Payrolls Information!</h3>
                        <p>Employee ID : {payrollModal.Employee_ID}</p>
                        <p>Name : {payrollModal.Name}</p>
                        <p>Department : {payrollModal.Depertment}</p>
                        <p>Payment Date : {payrollModal.Payment_Date}</p>
                        <p>Pay Amount  : {payrollModal.Pay_Amount}</p>
                        <p>Designation : {payrollModal.Designation}</p>
                        <p>Payable Amount : {payrollModal.Payable_Amount}</p>
                        <div className="modal-action">
                            <label for={payrollModal._id} className="btn bg-[#0182BE]">Close!</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPayrolls;