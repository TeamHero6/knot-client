import React from "react";

const UserAttendanceCard = (props) => {
    const { startDate, startTime, UpdateDateTime } = props.attend;
    return (
        <div className="gap-5 w-4/12 bg-white shadow-gray-300 border shadow-sm px-5 py-2">
            <div className="flex justify-end">
                <p>User</p>
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
