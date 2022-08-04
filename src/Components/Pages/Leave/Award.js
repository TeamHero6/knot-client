import React, { useEffect, useState } from 'react';

const Award = () => {
    const [awards, setAwards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/award')
            .then(res => res.json())
            .then(data => setAwards(data))
    }, [])

    return (
        <div className='flex my-10'>
            <div class="overflow-x-auto w-3/5">
                <h1 className='text-xl mb-3'>Team Member Award Database</h1>
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Award Date</th>
                            <th>Team Member Name</th>
                            <th>Type of Award</th>
                            <th>Leader Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            awards?.map(award =>
                                <tr>
                                    <th>{award.awardDate}</th>
                                    <td>{award.name}</td>
                                    <td>{award.awardType}</td>
                                    <td>status</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className='mx-5'>
                <h1 className='text-xl mb-3'>Training Details</h1>
                <div className='bg-[#EEEEEE] rounded'>
                    <table>
                        <thead>
                            <tr>
                                <th>Training Date <br /> and Time</th>
                                <th>Trainer Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>18-july-2022 10:00 PM</td>
                                <td>Name : <br /> Designation </td>
                                <td>Department : <br /> Contact Number : </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Award;