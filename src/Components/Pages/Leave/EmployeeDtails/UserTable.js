import React from 'react';

const UserTable = ({user}) => {
    return (
        <tr>
            <td>{user?.EmployeeID}</td>
            <td>{user?.Name}</td>
            <td>{user?.Department}</td>
            <td>{user?.Designation}</td>
            <td>{user?.Phone1}</td>
            <td>{user?.Email}</td>
            <td>{user?.ReportPerson}</td>
            <td>Details</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
    );
};

export default UserTable;