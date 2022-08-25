import React, { useEffect, useState } from 'react';
import LeaveRequestCard from './LeaveRequestCard';


const HrLeaveRequest = () => {
    const [requests, setRequest] = useState([]);

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/users")
            .then((res) => res.json())
            .then((data) => setRequest(data));
    }, [requests]);
    return (
        <div>
            <div className='bg-white px-3 py-3'>
                <h1 className='font-semibold text-xl mb-8'>Approval Leave Request</h1>

                <div className='flex gap-5 flex-wrap'>
                    {
                        requests.slice(0, 20).map(leave => <LeaveRequestCard
                            leave={leave}
                        ></LeaveRequestCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HrLeaveRequest;