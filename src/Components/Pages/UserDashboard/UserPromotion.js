<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import React, { useEffect, useState } from "react";
>>>>>>> 88606e86582b97aa66f1228b0bec652f645cb951

const UserPromotion = () => {
    const [promotions, setPromotions] = useState([]);
    const [transfers, setTransfers] = useState([]);
    const [promotionModal, setPromotionModal] = useState({});
    const [transferModal, setTransferModal] = useState({});

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/performance")
            .then((res) => res.json())
            .then((data) => setPromotions(data));
    }, []);

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/transfer")
            .then((res) => res.json())
            .then((data) => setTransfers(data));
    }, []);

    return (
        <div>
            <div>
                <h1 className='text-2xl text-center font-bold mt-5'>Promotion</h1>
                <div class="overflow-x-auto">
                    <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden w-full">
                        <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Name</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Employee ID</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Department</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">View Details</th>
                            </tr>
                        </thead>
                        <tbody>
<<<<<<< HEAD
                            {
                                promotions?.map(promotion =>
                                    <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                        <td className="py-3 px-6 whitespace-nowrap">{promotion.Name}</td>
                                        <td className="py-3 px-6 whitespace-nowrap">{promotion.Employee_ID}</td>
                                        <td className="py-3 px-6 whitespace-nowrap">{promotion.Depertment}</td>
                                        <td className="py-3 px-6 whitespace-nowrap">
                                            <div>
                                                <label for={promotion._id} onClick={() => setPromotionModal(promotion)} class="modal-button"><span className='underline hover:text-blue-500 hover:font-medium'>Details</span></label>

                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
=======
                            {promotions?.map((promotion) => (
                                <tr>
                                    <th>{promotion.Name}</th>
                                    <td>{promotion.Employee_ID}</td>
                                    <td>{promotion.Depertment}</td>
                                    <td>Details</td>
                                </tr>
                            ))}
>>>>>>> 88606e86582b97aa66f1228b0bec652f645cb951
                        </tbody>
                    </table>
                    <input type="checkbox" id={promotionModal._id} class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg">Promotion Information!</h3>
                            <p>Name : {promotionModal.Name}</p>
                            <p>Department : {promotionModal.Depertment}</p>
                            <p>Promoted Type : {promotionModal.Promoted_Type}</p>
                            <p>Promoted Designati  : {promotionModal.Promoted_Designation}</p>
                            <p>Employee ID : {promotionModal.Employee_ID}</p>
                            <p>Designation : {promotionModal.Designation}</p>
                            <p>Promotion Date : {promotionModal.Pormotion_Date}</p>
                            <p>Increment Salary : {promotionModal.Incriment_Salary}</p>
                            <div class="modal-action">
                                <label for={promotionModal._id} class="btn bg-[#0182BE]">Close!</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-2xl text-center font-bold mt-5'>Transfer</h1>
                <div class="overflow-x-auto">
                    <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden w-full">
                        <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Name</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Employee ID</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Department</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">View Details</th>
                            </tr>
                        </thead>
                        <tbody>
<<<<<<< HEAD
                            {
                                transfers?.map(transfer =>
                                    <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                        <td className="py-3 px-6 whitespace-nowrap">{transfer.Name}</td>
                                        <td className="py-3 px-6 whitespace-nowrap">{transfer.Employee_ID}</td>
                                        <td className="py-3 px-6 whitespace-nowrap">{transfer.Depertment}</td>
                                        <td className="py-3 px-6 whitespace-nowrap">
                                            <div>
                                                <label for={transfer._id} onClick={()=> setTransferModal(transfer)} class="modal-button"><span className='underline hover:text-blue-500 hover:font-medium'>Details</span></label>

                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
=======
                            {transfers?.map((transfer) => (
                                <tr>
                                    <th>{transfer.Name}</th>
                                    <td>{transfer.Employee_ID}</td>
                                    <td>{transfer.Depertment}</td>
                                    <td>Details</td>
                                </tr>
                            ))}
>>>>>>> 88606e86582b97aa66f1228b0bec652f645cb951
                        </tbody>
                    </table>
                    <input type="checkbox" id={transferModal._id} class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg">Transfer Information!</h3>
                            <p>Name : {transferModal.Name}</p>
                            <p>Department : {transferModal.Depertment}</p>
                            <p>Location : {transferModal.Location}</p>
                            <p>Transfer Reason  : {transferModal.Transfer_Reason}</p>
                            <p>Employee ID : {transferModal.Employee_ID}</p>
                            <p>Designation : {transferModal.Designation}</p>
                            <p>Transfer Date : {transferModal.Transfer_Date}</p>
                            <div class="modal-action">
                                <label for={transferModal._id} class="btn bg-[#0182BE]">Close!</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPromotion;
