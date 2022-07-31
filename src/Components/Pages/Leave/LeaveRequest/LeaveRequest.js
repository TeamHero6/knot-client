import React, { useEffect, useState } from 'react';

const LeaveRequest = () => {
    const [userinfo, setUserinfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/leaveData')
            .then(res => res.json())
            .then(data => setUserinfo(data))
    }, [])
    // console.log(userinfo)
    return (
        <div>
            <div className='my-10'>
                <p className='text-xl text-color md:ml-5'>Leave Report</p>
                <p className='text-xl text-center mb-3'>Leave Request</p>
                <table className='text-center responsive bg-[#EEEEEE] w-full'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Dept.</th>
                            <th>Designation</th>
                            <th>Leave Date</th>
                            <th>Reason For Leave</th>
                            <th>Leave Request</th>
                            <th>Approval</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userinfo?.map(user =>
                                <tr>
                                    <td>{user?.Name}</td>
                                    <td>{user?.dep}</td>
                                    <td>{user?.Designation}</td>
                                    <td>{user?.leave_date}</td>
                                    <td>{user?.leave}</td>
                                    <td>Details</td>
                                    <td>Edit</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeaveRequest;