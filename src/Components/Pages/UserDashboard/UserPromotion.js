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
                                        <td>Details</td>
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
                                        <td>Details</td>
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