import React from 'react';

const LeaveInfo = ({ user }) => {
    return (
        <div className='md:flex'>
            <table>
                <tr>
                    <td>Employee Names : </td>
                    <td>{user.Name}</td>
                </tr>
                <tr>
                    <td>Designation : </td>
                    <td>{user.Designation}</td>
                </tr>
                <tr>
                    <td>Reason for leave : </td>
                    <td>{user.leave}</td>
                </tr>
                <tr>
                    <td>Leave Permit</td>
                </tr>
                <tr>
                    <td>Name : </td>
                    <td>{user.Name}</td>
                </tr>
                <tr>
                    <td>Employee ID : </td>
                    <td>{user.id}</td>
                </tr>
            </table>
            <div className='md:ml-32'>
                <table>
                    <tr>
                        <td>Department Name : </td>
                        <td>{user.dep}</td>
                    </tr>
                    <tr>
                        <td>Leave Request Date : </td>
                        <td>{user.leave_date}</td>
                    </tr>
                </table>
                <table className='mt-20'>
                    <tr>
                        <td>Department : </td>
                        <td><p className='ml-3'>{user.dep}</p></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>Designation : </td>
                        <td><p className='ml-3'>{user.Designation}</p></td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default LeaveInfo;