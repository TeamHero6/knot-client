
import React, { useEffect, useState } from 'react';
import { AiOutlineEye } from "react-icons/ai";

const UserPromotion = () => {
    const [promotions, setPromotions] = useState([]);
    const [transfers, setTransfers] = useState([]);

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/performance")
            .then((res) => res.json())
            .then((data) => setPromotions(data));
    }, []);

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/transfer")
            .then((res) => res.json())
            .then((data) => setTransfers(data));
    }, []);

    return (
        <div>
            <div>
                <h1 className='text-2xl text-center font-bold mt-5'>Promotion</h1>
                <div class="overflow-x-auto">
                    <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                        <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Name</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Employee ID</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Department</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                promotions?.map(promotion =>
                                    <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                        <td className="py-3 px-6 whitespace-nowrap">{promotion.Name}</td>
                                        <td className="py-3 px-6 whitespace-nowrap">{promotion.Employee_ID}</td>
                                        <td className="py-3 px-6 whitespace-nowrap">{promotion.Depertment}</td>
                                        <td className="py-3 px-6 whitespace-nowrap">
                                            <div>
                                                <label for={promotion._id} class="modal-button"><AiOutlineEye></AiOutlineEye></label>
                                                <input type="checkbox" id={promotion._id} class="modal-toggle" />
                                                <div class="modal modal-bottom sm:modal-middle">
                                                    <div class="modal-box">
                                                        <h3 class="font-bold text-lg">Promotion Information!</h3>
                                                        <p>Name : {promotion.Name}</p>
                                                        <p>Department : {promotion.Depertment}</p>
                                                        <p>Promoted Type : {promotion.Promoted_Type}</p>
                                                        <p>Promoted Designati  : {promotion.Promoted_Designation}</p>
                                                        <p>Employee ID : {promotion.Employee_ID}</p>
                                                        <p>Designation : {promotion.Designation}</p>
                                                        <p>Promotion Date : {promotion.Pormotion_Date}</p>
                                                        <p>Increment Salary : {promotion.Incriment_Salary}</p>
                                                        <div class="modal-action">
                                                            <label for={promotion._id} class="btn bg-[#0182BE]">Close!</label>
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
            <div>
                <h1 className='text-2xl text-center font-bold mt-5'>Transfer</h1>
                <div class="overflow-x-auto">
                    <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                        <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Name</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Employee ID</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Department</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                transfers?.map(transfer =>
                                    <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                        <td className="py-3 px-6 whitespace-nowrap">{transfer.Name}</td>
                                        <td className="py-3 px-6 whitespace-nowrap">{transfer.Employee_ID}</td>
                                        <td className="py-3 px-6 whitespace-nowrap">{transfer.Depertment}</td>
                                        <td className="py-3 px-6 whitespace-nowrap">
                                            <div>
                                                <label for={transfer._id} class="modal-button"><AiOutlineEye></AiOutlineEye></label>
                                                <input type="checkbox" id={transfer._id} class="modal-toggle" />
                                                <div class="modal modal-bottom sm:modal-middle">
                                                    <div class="modal-box">
                                                        <h3 class="font-bold text-lg">Transfer Information!</h3>
                                                        <p>Name : {transfer.Name}</p>
                                                        <p>Department : {transfer.Depertment}</p>
                                                        <p>Location : {transfer.Location}</p>
                                                        <p>Transfer Reason  : {transfer.Transfer_Reason}</p>
                                                        <p>Employee ID : {transfer.Employee_ID}</p>
                                                        <p>Designation : {transfer.Designation}</p>
                                                        <p>Transfer Date : {transfer.Transfer_Date}</p>
                                                        <div class="modal-action">
                                                            <label for={transfer._id} class="btn bg-[#0182BE]">Close!</label>
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
        </div>
    );
};

export default UserPromotion;
