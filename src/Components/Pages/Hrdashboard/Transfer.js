import React, { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import profile from '../../../Assets/icons/Live-chat-icon/profile_user.png';
import { AiFillSave, AiOutlineEye } from 'react-icons/ai';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Transfer = () => {
    
    
    const { register, handleSubmit, reset } = useForm();
    const [transfer,setTransfer]=useState([]);
    
    const [show, setShow] = useState(false);
    const [modal, setmodal] = useState({});

    useEffect(()=>{
        fetch('http://localhost:5000/transfer')
        .then(res=>res.json())
        .then(data=>setTransfer(data))
    },[transfer]);
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
                        <span className='capita<input  requiredlize'> Transfer</span>

            </label>
            {show ? <div className=''>
            <form onSubmit={handleSubmit(onSubmit)}>
                
           
            <section className='lg:w-8/12 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto'>
                <label className='font-bold text-purple-800' htmlFor="name">Transfer Info</label> <br />
                <br />
                <div className='flex flex-row gap-5'>
                    <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"  {...register("Name")} id="" placeholder='Employee Name' /> 

                    <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"  {...register("Depertment")} id="" placeholder='Depertment' />
                        
                       
                    
                </div>
                <div className='flex flex-row gap-5'>
                <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text" {...register("Transfer_Reason")} id="" placeholder='Transfer Reason' />    
                    <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"   {...register("Designation")} id="" placeholder='Designation' />  
                </div>

                <div className='flex flex-row gap-5'>
                <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text" {...register("Employee_ID")} id="" placeholder='Employee ID' />    
                    <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="date" {...register("Transfer_Date")} id="" placeholder='Transfer Date' />  
                </div>

                <div className='flex flex-row gap-5'>
                  
                <select className='w-6/12 pl-3 py-2 border border-gray-300 bg-slate-50 rounded outline-none' {...register("Location")}>
                        <option className='text-gray-400'value='Salary' disabled selected>Salary</option>
                        <option className='text-green-400' value='Designation'>Designation</option>
                    </select>  
                </div>
                

                <div className='lg:flex justify-between md:flex pt-2'>
                    <button className='flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm' type='subimt'><AiFillSave />Save</button> 
                </div>
            </section>
            </form>
        </div> : ''}
            
                    <div className='mx-auto w-full rounded-lg mt-5 '>
                        <div class="rounded-none">
                            <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                                <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                                    <tr>
                                        <th className="py-3 text-left px-6 whitespace-nowrap">Name</th>
                                        <th className="py-3 text-left px-6 whitespace-nowrap">Employee ID</th>
                                        <th className="py-3 text-left px-6 whitespace-nowrap">Depertment</th>
                                        <th className="py-3 text-left px-6 whitespace-nowrap">View Details</th>

                                    </tr>
                                </thead>
                                <tbody>
                                {
                                        transfer.map(pr=>
                                            <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                                <td className="py-3 px-6 whitespace-nowrap">{pr.Name}</td>
                                                <td className="py-3 px-6 whitespace-nowrap">{pr.Employee_ID}</td>
                                                <td className="py-3 px-6 whitespace-nowrap">{pr.Depertment}</td>
                                                <td className='text-[#0182be]'>
                                                <label for={pr._id}  onClick={()=>setmodal(pr)} class="modal-button text-center">
                                                    
                                                    <AiOutlineEye className='text-2xl '></AiOutlineEye>
                                                   
                                           
                                             </label>
                                                    </td>
                                            </tr>
                                           
                                           )
                                       }
                                        


                                </tbody>

                            </table>
                            
                            <input  required type="checkbox" id={modal._id} class="modal-toggle" />
                                            <div class="modal">
                                                <div class="modal-box">
                                                    <div>
                                                        <div className='flex items-center mb-5'>
                                                            <img className='w-28' src={profile} alt="" />
                                                            <div className='ml-5'>
                                                                <h2 className='text-2xl capitalize'>{modal.Name}</h2>
                                                                <span className='uppercase'>{modal.Depertment}</span>
                    
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h1 className='text-xl border-b-2 border-yellow-500 capitalize mb-3'>Details info</h1>
                                                            <div>
                                                            <p><span className='font-medium capitalize'> Transfer Reason: </span>{modal.Transfer_Reason}</p>
                                                            <p><span className='font-medium capitalize'>Location: </span>{modal.Location}</p>
                                                            <p><span className='font-medium capitalize'>Designation: </span>{modal.Designation}</p>
                                                            <p><span className='font-medium capitalize'>Transfer Date: </span>{modal.Transfer_Date}</p>

                                                            </div>
                                                            
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="modal-action">
                                                        <label for={modal._id} class="btn btn-warning">Cancel</label>
                                                    </div>
                                                </div>
                                            </div>
                        </div>
                    </div>
                    <div>
                    
                    </div>
            
        </div>
    );
};

export default Transfer;