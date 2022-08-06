import React, { useEffect, useState } from 'react';

const UserPromotion = () => {
    const [promotions, setPromotions] = useState([]);
    const [transfers, setTransfers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/performance')
            .then(res => res.json())
            .then(data => setPromotions(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/transfer')
            .then(res => res.json())
            .then(data => setTransfers(data))
    }, [])

    return (
        <div>
            <div>
                <h1 className='text-xl font-semibold my-5'>Promotion</h1>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Employee ID</th>
                                <th>Department</th>
                                <th>View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                promotions?.map(promotion =>
                                    <tr>
                                        <th>{promotion.Name}</th>
                                        <td>{promotion.Employee_ID}</td>
                                        <td>{promotion.Depertment}</td>
                                        <td>
                                            <div>
                                                <label for="my-modal-6" class="btn modal-button">Details</label>
                                                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                                                <div class="modal modal-bottom sm:modal-middle">
                                                    <div class="modal-box">
                                                        <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                                                        <p>Name : {promotion.Name}</p>
                                                        <p>Department : {promotion.Depertment}</p>
                                                        <p>Promoted Type : {promotion.Promoted_Type}</p>
                                                        <p>Promoted Designati  : {promotion.Promoted_Designation}</p>
                                                        <p>Employee ID : {promotion.Employee_ID}</p>
                                                        <p>Designation : {promotion.Designation}</p>
                                                        <p>Promotion Date : {promotion.Pormotion_Date}</p>
                                                        <p>Increment Salary : {promotion.Incriment_Salary}</p>
                                                        <div class="modal-action">
                                                            <label for="my-modal-6" class="btn">Yay!</label>
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
                <h1 className='text-xl font-semibold my-5'>Transfer</h1>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Employee ID</th>
                                <th>Department</th>
                                <th>View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                transfers?.map(transfer =>
                                    <tr>
                                        <th>{transfer.Name}</th>
                                        <td>{transfer.Employee_ID}</td>
                                        <td>{transfer.Depertment}</td>
                                        <td>
                                            <div>
                                                <label for="my-modal-6" class="btn modal-button">Details</label>
                                                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                                                <div class="modal modal-bottom sm:modal-middle">
                                                    <div class="modal-box">
                                                        <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                                                        <p>Name : {transfer.Name}</p>
                                                        <p>Department : {transfer.Depertment}</p>
                                                        <p>Location : {transfer.Location}</p>
                                                        <p>Transfer Reason  : {transfer.Transfer_Reason}</p>
                                                        <p>Employee ID : {transfer.Employee_ID}</p>
                                                        <p>Designation : {transfer.Designation}</p>
                                                        <p>Transfer Date : {transfer.Transfer_Date}</p>
                                                        <div class="modal-action">
                                                            <label for="my-modal-6" class="btn">Yay!</label>
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