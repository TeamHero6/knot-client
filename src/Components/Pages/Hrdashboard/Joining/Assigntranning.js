import React, { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { AiFillSave } from 'react-icons/ai';

const Assigntranning = () => {
    const { register, handleSubmit, reset } = useForm();
    const [show, setShow] = useState(false);
    const onSubmit = data => {
        console.log(data);
        
    };
    return (
        <div>
           <label  onClick={()=>setShow(!show)} for="my-drawer" class="btn btn-xs bg-[#0182be] mt-5 ml-3 md:ml-5 drawer-button border-none">
                        <span><BiPlus></BiPlus></span>
                        <span className='capitalize'> Assign Tranning</span>

            </label>

            {show ?  <div className='py-20'>
            <form onSubmit={handleSubmit(onSubmit)}>


                <section className='lg:w-11/12 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto'>
                
                    <div className='flex flex-row gap-5'>
                        <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"  {...register("Applicant_Name")} id="" placeholder='Applicant Name' />

                        <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"  {...register("Depertment")} id="" placeholder='Depertment' />



                    </div>
                    <div className='flex flex-row gap-5'>
                        <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text" {...register("Tranning_Duration")} id="" placeholder='Tranning Duration' />
                        <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"   {...register("Designation")} id="" placeholder='Designation' />
                    </div>

                    <div className='flex flex-row gap-5'>
                        <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text" {...register("Taining_Location")} id="" placeholder='Taining Location' />
                        <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"   {...register("Start_Time")} id="" placeholder='Start Date & Time' />
                    </div>
                    

                    
                    <div className='flex flex-row gap-5'>
                       <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"  {...register("End_Time")} id="" placeholder='End Date & Time' />    
                        
                    </div>

                    <h2 className='text-xl font-bold my-2'>Trainer Details</h2>
                    <div className='flex flex-row gap-5'>
                       <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"  {...register("name")} id="" placeholder='Name' />    
                       <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"  {...register("T_depertment")} id="" placeholder='Depertment' />    
                        
                    </div>
                    <div className='flex flex-row gap-5'>
                       <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"  {...register("t_Designation")} id="" placeholder='Designation' />    
                       <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"  {...register("Contact_Number")} id="" placeholder='Contact Number' />    
                        
                    </div>

                    <div className='lg:flex justify-between md:flex pt-2'>
                        <button className='flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm' type='subimt'><AiFillSave />Save</button>
                    </div>
                </section>
            </form>
        </div>: ''}
                    
                    <div className='mx-auto w-full rounded-lg my-5 '>
                        <div class="overflow-auto  rounded-none">
                            <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                                <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                                    <tr>
                                        <th  className="py-3 text-left px-6 whitespace-nowrap">Applicant Name</th>
                                        <th  className="py-3 text-left px-6 whitespace-nowrap">Department</th>
                                        <th  className="py-3 text-left px-6 whitespace-nowrap">Trainer Details</th>

                                    </tr>
                                </thead>
                                <tbody>
                                            <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                            
                                                <td className="py-3 px-6 whitespace-nowrap"></td>
                                                <td className="py-3 px-6 whitespace-nowrap"></td>
                                                <td className="py-3 px-6 whitespace-nowrap"></td>

                                                
                                            </tr>
                                        


                                </tbody>

                            </table>
                        </div>
                    </div>
        </div>
    );
};

export default Assigntranning;