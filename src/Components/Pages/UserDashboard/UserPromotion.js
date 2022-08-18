import React, { useEffect, useState } from 'react';

const UserPromotion = () => {
    const [promotions, setPromotions] = useState([]);
    const [transfers, setTransfers] = useState([]);
    const [promotionModal, setPromotionModal] = useState({});
    const [transferModal, setTransferModal] = useState({});

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
        <div className='flex w-11/12'>
            <div className='mx-3'>
                <h1 className='text-2xl text-center font-bold mt-5'>Promotion</h1>
                <div class="h-80 overflow-x-auto">
                    <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                        <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Name</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Employee <br /> ID</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Department</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">View <br /> Details</th>
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
                                                <label for={promotion._id} onClick={() => setPromotionModal(promotion)} class="modal-button"><span className='underline hover:text-blue-500 hover:font-medium'>Details</span></label>

                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
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
                                <label for={promotionModal._id} className='flex ml-5 items-center gap-2 bg-red-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-red-400 hover:outline-1 hover:border hover:border-red-400 hover: shadow-red-200 hover: shadow-sm'>Close!</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-3'>
                <h1 className='text-2xl text-center font-bold mt-5'>Transfer</h1>
                <div class="h-80 overflow-x-auto">
                    <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                        <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Name</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Employee <br /> ID</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Department</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">View <br /> Details</th>
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
                                                <label for={transfer._id} onClick={() => setTransferModal(transfer)} class="modal-button"><span className='underline hover:text-blue-500 hover:font-medium'>Details</span></label>

                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
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
                                <label for={transferModal._id} className='flex ml-5 items-center gap-2 bg-red-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-red-400 hover:outline-1 hover:border hover:border-red-400 hover: shadow-red-200 hover: shadow-sm'>Close!</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPromotion;