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
        <div className="mx-auto w-full">
            <div className='w-full mb-5 flex justify-between rounded py-6 px-6 mt-5'>
                <table class="shadow-2xl border-2 border-cyan-300 w-full text-base overflow-hidden">
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
            </div>
            <input type="checkbox" id={payrollModal._id} class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Payrolls Information!</h3>
                    <p>Employee ID : {payrollModal.Employee_ID}</p>
                    <p>Name : {payrollModal.Name}</p>
                    <p>Department : {payrollModal.Depertment}</p>
                    <p>Payment Date : {payrollModal.Payment_Date}</p>
                    <p>Pay Amount  : {payrollModal.Pay_Amount}</p>
                    <p>Designation : {payrollModal.Designation}</p>
                    <p>Payable Amount : {payrollModal.Payable_Amount}</p>
                    <div class="modal-action">
                        <label for={payrollModal._id} className='flex ml-5 items-center gap-2 bg-red-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-red-400 hover:outline-1 hover:border hover:border-red-400 hover: shadow-red-200 hover: shadow-sm'>Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPayrolls;