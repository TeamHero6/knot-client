import React from 'react';
import { useForm } from "react-hook-form";
import { AiFillSave, AiTwotoneEye } from 'react-icons/ai';
import Assigntranning from './Assigntranning';

const Joining = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        

    };
    return (
        <div>
            <div className=''>
            <form onSubmit={handleSubmit(onSubmit)}>
                
           
            <section className='lg:w-11/12 lg:mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto'>
                
                <div className='flex flex-row gap-5'>
                    <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"  {...register("Name")} id="" placeholder='Employee Name' /> 

                    <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"  {...register("Depertment")} id="" placeholder='Depertment' />
                        
                       
                    
                </div>
                <div className='flex flex-row gap-5'>
                <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="email" {...register("Email")} id="" placeholder='Email' />    
                    <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"   {...register("Designation")} id="" placeholder='Designation' />  
                </div>

                <div className='flex flex-row gap-5'>
                <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="number" {...register("number")} id="" placeholder='Number' /> 
                        <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="datetime-local"   {...register("joinig_date")} id="" placeholder='joinig_date' />
                </div>

                <div className='flex flex-row gap-5'>
                  
                <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"   {...register("address")} id="" placeholder='Address' />  
                <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"   {...register("salary")} id="" placeholder='Salary' />  

                </div>
                <div className='flex flex-row gap-5'>
                  
               
                <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"   {...register("salary_grade")} id="" placeholder='Salary Grade' />  

                </div>
                

                <div className='lg:flex justify-between md:flex pt-2'>
                    <button className='flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm' type='subimt'><AiFillSave />Add New Employee</button> 
                </div>
            </section>
            </form>
        </div>
        <div className='my-5'>
                <h3 className='text-[#0182be] text-2xl'>Joining Information</h3>
                <div className='mx-auto w-full rounded-lg my-3 '>
                    <div class="rounded-none">
                        <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                            <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                                <tr>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">Employee Name</th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">Department</th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">Joining Date</th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">View</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                    <td className="py-3 px-6 whitespace-nowrap">Habib ullha</td>
                                    <td className="py-3 px-6 whitespace-nowrap">2512</td>
                                    <td className="py-3 px-6 whitespace-nowrap">date</td>
                                    <td className='text-[#0182be]  text-center'>
                                        <button><AiTwotoneEye></AiTwotoneEye></button>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <Assigntranning></Assigntranning>
        </div>
    );
};

export default Joining;