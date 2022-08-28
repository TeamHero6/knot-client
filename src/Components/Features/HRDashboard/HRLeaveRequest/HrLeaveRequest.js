import React, { useEffect, useState } from "react";
import LeaveRequestCard from "./LeaveRequestCard";

const HrLeaveRequest = () => {
    const [requests, setRequest] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setRequest(data));
    }, [requests]);
    return (
        <div>
            <div className=" px-3 py-3">
                <h1 className="font-semibold text-blue-500 text-xl mb-4 ml-5">
                    Approval Leave Request
                </h1>

                <div className="grid grid-rows-2 grid-flow-col gap-5">
                    {requests.slice(0, 20).map((leave) => (
                        <LeaveRequestCard leave={leave}></LeaveRequestCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HrLeaveRequest;
