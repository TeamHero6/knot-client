import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LeaveRequestCard from "./LeaveRequestCard";

const HrLeaveRequest = () => {
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);
    const { companyName } = loggerInfo;
    const [requests, setRequest] = useState([]);

    useEffect(() => {
        fetch(`https://knot-business-solution-server.herokuapp.com/users/${companyName}`)
            .then((res) => res.json())
            .then((data) => setRequest(data));
    }, [requests]);
    console.log();
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
