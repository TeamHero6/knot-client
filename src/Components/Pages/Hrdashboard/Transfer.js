import React, { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import profile from '../../../Assets/icons/Live-chat-icon/profile_user.png';
import { AiOutlineEye } from 'react-icons/ai';
import { useForm } from "react-hook-form";

import { toast } from 'react-toastify';

const Transfer = () => {
    
    const { register, handleSubmit, reset } = useForm();
    const [transfer,setTransfer]=useState([]);
    console.log(transfer)
    
    const [show, setShow] = useState(false);

    useEffect(()=>{
        fetch('http://localhost:5000/transfer')
        .then(res=>res.json())
        .then(data=>setTransfer(data))
    },[]);
    const onSubmit = data => {
        fetch('http://localhost:5000/transfer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    reset();
                    toast.success("Save change")
                }
            })
        

    };
    return (
        <div>
            <label onClick={()=>setShow(!show)} for="my-drawer" class="btn btn-xs bg-[#0182be] mt-5 ml-3 md:ml-5 drawer-button border-none">
                        <span><BiPlus></BiPlus></span>
                        <span className='capitalize'> Transfer</span>

            </label>
            {show ? <div className='mt-5 p-5 mx-auto w-4/5  bg-[#EEEEEE] rounded-lg'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid grid-cols-2'>
                                {/* ff */}
                                <div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Employees Name:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Name")}
                                        />


                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Depertment:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Depertment")}
                                        />


                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Transfer office Location:</span>
                                        </label>
                                        <select className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "  {...register("Location")}>
                                            <option value=""></option>
                                            <option value="Designation">Designation</option>
                                            <option value="Salary">Salary</option>
                                        </select>


                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Transfer Reason Note:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Transfer_Reason")}
                                        />


                                    </div>
                                    

                                </div>

                                {/* ff */}
                                <div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Employee ID:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Employee_ID")}
                                        />


                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Designation:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Designation")}
                                        />


                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Transfer Date:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Transfer_Date")}
                                        />


                                    </div>
                                </div>
                            </div>



                            <div className='flex items-center bg-[#0182be]  w-32 p-2 rounded-lg mx-auto border-solid border border-[#0182be] mt-5'>
                                <input className='pl-2 font-medium text-white' type="submit" value='Save Change' />
                            </div>

                        </form>

                    </div> : ''}
            
                    <div className='mx-auto w-4/5 rounded-lg mt-5 '>
                        <div class="overflow-x-auto">
                            <table class="table table-compact w-full">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Employee ID</th>
                                        <th>Depertment</th>
                                        <th>View Details</th>

                                    </tr>
                                </thead>
                                <tbody>
                                {
                                        transfer.map(pr=>
                                            <tr>
                                                <th>{pr.Name}</th>
                                                <th>{pr.Employee_ID}</th>
                                                <th>{pr.Depertment}</th>
                                                <th className='text-[#0182be]'>
                                                <label for={pr._id} class="modal-button">
                                            <AiOutlineEye className='text-2xl '></AiOutlineEye>
                                             </label>
                                             <input type="checkbox" id={pr._id} class="modal-toggle" />
                                            <div class="modal">
                                                <div class="modal-box">
                                                    <div>
                                                        <div className='flex items-center mb-5'>
                                                            <img className='w-28' src={profile} alt="" />
                                                            <div className='ml-5'>
                                                                <h2 className='text-2xl capitalize'>{pr.Name}</h2>
                                                                <span className='uppercase'>{pr.Depertment}</span>
                    
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h1 className='text-xl border-b-2 border-yellow-500 capitalize mb-3'>Details info</h1>
                                                            <div>
                                                            <p><span className='font-medium capitalize'> Transfer Reason: </span>{pr.Transfer_Reason}</p>
                                                            <p><span className='font-medium capitalize'>Location: </span>{pr.Location}</p>
                                                            <p><span className='font-medium capitalize'>Designation: </span>{pr.Designation}</p>
                                                            <p><span className='font-medium capitalize'>Transfer Date: </span>{pr.Transfer_Date}</p>

                                                            </div>
                                                            
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="modal-action">
                                                        <label for={pr._id} class="btn btn-warning">Cancel</label>
                                                    </div>
                                                </div>
                                            </div>

                                                    
                                                    </th>
                                            </tr>
                                           
                                           )
                                       }
                                        


                                </tbody>

                            </table>
                        </div>
                    </div>
            
        </div>
    );
};

export default Transfer;