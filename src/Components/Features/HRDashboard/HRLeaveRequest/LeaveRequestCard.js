import React, { useState } from 'react';
import { toast } from "react-toastify";
import { AiFillSave } from 'react-icons/ai';


const LeaveRequestCard = (props) => {
    const { _id, Date, id, Name, dep, leave_type, e_date, aprovel } = props.leave
    const [requests, setRequest] = useState([]);
    const [upstatus, setUpstatus] = useState("");
    // const [leave, setLeave] = useState({});

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
        <div className='bg-custom-gray px-5 py-5 rounded-md shadow-sm'>
                <p>Department: <span className='text-green-500 font-semibold'>{dep}</span></p>
            <div className='flex justify-between items-center'>
                <div>
                    <p><span className='font-semibold'>Request Date:</span> <small className='italic text-gray-400'>{Date}</small></p>

                </div>
                <div className='flex items-center gap-2'>
                    <div>
                        <select
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
                    </div>

                    <div>
                        <button
                            onClick={() => save(_id)}
                            className="flex items-center text-blue-500"
                            type="subimt"
                        >
                            <AiFillSave />
                        </button>
                    </div>
                </div>
            </div>

            <p><span className='font-semibold'>Employee ID:</span> {id}</p>
            <p>Name: {Name}</p>
            <p><span className='font-semibold'>Leave Type: </span>{leave_type}
                <small className='font-semibold ml-5'>Leave Date: {e_date}</small>
            </p>
        </div>
    );
};

export default LeaveRequestCard;