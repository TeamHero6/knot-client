import React, { useState } from 'react';
import { toast } from "react-toastify";
import dates from '../../../../Assets/icons/schedule.png';
import accept from '../../../../Assets/icons/task-management.png';
import profile from '../../../../Assets/icons/Live-chat-icon/profile_user.png';


const LeaveRequestCard = (props) => {
    const { _id, Date, id, Name, dep, leave_type, e_date, aprovel } = props.leave
    // const [requests, setRequest] = useState([]);
    const [upstatus, setUpstatus] = useState("");

    const approv = (event) => {

        setUpstatus(event.target.value);
    };
    const save = (id) => {
        const aprovel = upstatus;

        const updata = { aprovel };

        const url = `https://knot-business-solution-server.herokuapp.com/users/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updata),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("success");
            });
    };
    return (
        // <div className='bg-white shadow-gray-300 px-5 py-5 rounded-md shadow-sm'>
        //         <p>Department: <span className='text-blue-600 font-semibold'>{dep}</span></p>
        //     <div className='flex justify-between items-center'>
        //         <div>
        //             <p><span className='font-semibold'>Request Date:</span> <small className='italic text-gray-400'>{Date}</small></p>

        //         </div>
        //         <div className='flex items-center gap-2'>
        //             <div>
        //                 <select
        //                     className=" bg-transparent"
        //                     onChange={approv}
        //                 >
        //                     <option value="approval_statas">
        //                         {aprovel ? aprovel : 'Approve Statas'}
        //                     </option>
        //                     <option value="Approve">
        //                         Approve
        //                     </option>
        //                     <option value="Reject">
        //                         Reject
        //                     </option>
        //                 </select>
        //             </div>

        //             <div>
        //                 <button
        //                     onClick={() => save(_id)}
        //                     className="flex items-center text-blue-500"
        //                     type="subimt"
        //                 >
        //                     <AiFillSave />
        //                 </button>
        //             </div>
        //         </div>
        //     </div>

        //     <p><span className='font-semibold'>Employee ID:</span> {id}</p>
        //     <p>Name: {Name}</p>
        //     <p><span className='font-semibold'>Leave Type: </span>{leave_type}
        //         <small className='font-semibold ml-5'>Date: {e_date}</small>
        //     </p>
        // </div>
        <div class="card w-80 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title capitalize mb-5">
                    {Name}
                    <div class="badge badge-secondary uppercase">{dep}</div>
                </h2>
                <p className='flex items-center '> <img width={20} src={dates} className="mr-2" alt="" /> Date : {Date}</p>
                <p className='flex items-center '> <img width={20} src={profile} className="mr-2" alt="" /> Employee Id : {id}</p>
                <p className='flex items-center '> <img width={20} src={accept} className="mr-2" alt="" /> Aprovel: <select
                    className=" bg-transparent"
                    onChange={approv}
                >
                    <option value="approval_statas">
                        {aprovel ? aprovel : 'Approve Statas'}
                    </option>
                    <option value="Approve">
                        Approve
                    </option>
                    <option value="Reject">
                        Reject
                    </option>
                </select>
                </p>
                <div class="card-actions justify-end">
                    <button
                        onClick={() => save(_id)}
                        type="subimt"
                        className="flex items-center gap-2 bg-white hover:text-white py-2 px-4 text-blue-500 font-bold rounded-full  hover:bg-blue-500  border border-blue-500   hover:border-blue-500 hover: shadow-green-200 hover: shadow-sm"
                    >
                        Save
                    </button>

                </div>
            </div>
        </div>
    );
};

export default LeaveRequestCard;