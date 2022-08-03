import React, { useEffect, useState } from 'react';
import UserTable from './UserTable';

const Employee = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inputData')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    // console.log(users)
    return (
        <div>
            <div className='my-10'>
                <p className='text-xl text-center mb-3'>Employee Details</p>
                <table className='text-center responsive bg-[#EEEEEE] w-full'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Dept.</th>
                            <th>Designation</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Report Person</th>
                            <th>View Details</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user =>
                                <UserTable
                                    user={user}
                                ></UserTable>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Employee;