import React from 'react';
import { useSelector } from "react-redux";

const UserAttendanceCard = (props) => {
    const { _id, startDate, startTime, UpdateDateTime } = props.attend
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    if (loggerInfo) {
        console.log(loggerInfo);
    }
    return (
        <div className='bg-white w-60 mx-auto shadow-gray-300 px-5 py-5 rounded-md shadow-sm'>
            <div className='flex justify-end'>
                <p>{loggerInfo?.name}</p>
            </div>
            <p>
                Join Time:{" "}
                <span className="font-semibold text-green-500">
                    {startTime}
                </span>
            </p>
            <p>
                Leave Time:{" "}
                <span className="font-semibold text-red-500">
                    {UpdateDateTime?.endTime}
                </span>
            </p>
            <p className="text-xs">Report: {UpdateDateTime?.taskReport}</p>
            <p className="text-right">
                <small className="italic text-gray-500">{startDate}</small>
            </p>
        </div>
    );
};

export default UserAttendanceCard;
