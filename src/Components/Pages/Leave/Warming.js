import React, { useEffect, useState } from 'react';

const Warming = () => {
    const [warnings, setWarnings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/warnings')
            .then(res => res.json())
            .then(data => setWarnings(data))
    }, [])

    return (
        <div className='my-10'>
            <h1 className='text-xl mb-3'>Team Members Warming Database</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Warming Date</th>
                            <th>Team Member Name</th>
                            <th>Reason of Warming</th>
                            <th>Special Note <br />Team Member</th>
                            <th>Warming Type</th>
                            <th>Team Member Feedback</th>
                            <th>Save Change</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            warnings?.map(warning =>
                                <tr>
                                    <th>{warning.warningDate}</th>
                                    <td>Name</td>
                                    <td>{warning.warningReason}</td>
                                    <td>special</td>
                                    <td>{warning.type}</td>
                                    <td>Feedback</td>
                                    <td>change</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Warming;