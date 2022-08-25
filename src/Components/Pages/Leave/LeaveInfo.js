import React, { useEffect, useState } from "react";

const LeaveInfo = ({ user }) => {
    const { _id } = user;
    const [singleUser, setSingleUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/leaveData/${_id}`)
            .then((res) => res.json())
            .then((data) => setSingleUser(data));
    }, [_id]);

    return (
        <div className="md:flex">
            <table>
                <tr>
                    <td>Employee Names : </td>
                    <td>{singleUser.Name}</td>
                </tr>
                <tr>
                    <td>Designation : </td>
                    <td>{singleUser.Designation}</td>
                </tr>
                <tr>
                    <td>Reason for leave : </td>
                    <td>{singleUser.leave}</td>
                </tr>
                <tr>
                    <td>Leave Permit</td>
                </tr>
                <tr>
                    <td>Name : </td>
                    <td>{singleUser.Name}</td>
                </tr>
                <tr>
                    <td>Employee ID : </td>
                    <td>{singleUser.id}</td>
                </tr>
            </table>
            <div className="md:ml-32">
                <table>
                    <tr>
                        <td>Department Name : </td>
                        <td>{singleUser.dep}</td>
                    </tr>
                    <tr>
                        <td>Leave Request Date : </td>
                        <td>{singleUser.leave_date}</td>
                    </tr>
                </table>
                <table className="mt-20">
                    <tr>
                        <td>Department : </td>
                        <td>
                            <p className="ml-3">{singleUser.dep}</p>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>Designation : </td>
                        <td>
                            <p className="ml-3">{singleUser.Designation}</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default LeaveInfo;
