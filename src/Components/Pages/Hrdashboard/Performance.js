import React, { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';
import { useForm } from "react-hook-form";

const Performance = () => {
    
    const { register, handleSubmit, reset } = useForm();
    const {promotion,setPromotion}=useState();

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setPromotion(data))
    }, []);

    const onSubmit = data => {
     
        
    };
    return (
        <div>
            <label for="my-drawer" class="btn btn-xs bg-[#0182be] mt-5 ml-3 md:ml-5 drawer-button border-none">
                        <span><BiPlus></BiPlus></span>
                        <span className='capitalize'> Promotion</span>

            </label>
                    <div className='mt-5 p-5 mx-auto w-4/5  bg-[#EEEEEE] rounded-lg'>
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
                                            <span className="label-text text-xl">Promoted Type:</span>
                                        </label>
                                        <select className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] ">
                                            <option value=""></option>
                                            <option value="Designation">Designation</option>
                                            <option value="Salary">Salary</option>
                                        </select>


                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Promoted Designation:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Promoted_Designation")}
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
                                            <span className="label-text text-xl">Pormotion Date:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Pormotion_Date")}
                                        />


                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Incriment Salary:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Incriment_Salary")}
                                        />


                                    </div>
                                </div>
                            </div>



                            <div className='flex items-center bg-[#0182be]  w-32 p-2 rounded-lg mx-auto border-solid border border-[#0182be] mt-5'>
                                <input className='pl-2 font-medium text-white' type="submit" value='Save Change' />
                            </div>

                        </form>

                    </div>
                    <div className='mx-auto w-4/5 rounded-lg my-5 '>
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
                                            <tr>
                                                <th>Habib ullha</th>
                                                <th>2512</th>
                                                <th>Sales</th>
                                                <th className='text-[#0182be]'><FiEye></FiEye></th>
                                            </tr>
                                            <tr>
                                                <th>Habib ullha</th>
                                                <th>2512</th>
                                                <th>Sales</th>
                                                <th className='text-[#0182be]'><FiEye></FiEye></th>
                                            </tr>
                                        


                                </tbody>

                            </table>
                        </div>
                    </div>




                    
            <label for="my-drawer" class="btn btn-xs bg-[#0182be] mt-5 ml-3 md:ml-5 drawer-button border-none">
                        <span><BiPlus></BiPlus></span>
                        <span className='capitalize'> Transfer</span>

            </label>
            <div className='mt-5 p-5 mx-auto w-4/5  bg-[#EEEEEE] rounded-lg'>
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
                                        <select className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] ">
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

                    </div>
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
                                            <tr>
                                                <th>Habib ullha</th>
                                                <th>2512</th>
                                                <th>Sales</th>
                                                <th className='text-[#0182be]'><FiEye></FiEye></th>
                                            </tr>
                                            <tr>
                                                <th>Habib ullha</th>
                                                <th>2512</th>
                                                <th>Sales</th>
                                                <th className='text-[#0182be]'><FiEye></FiEye></th>
                                            </tr>
                                        


                                </tbody>

                            </table>
                        </div>
                    </div>
        </div>
    );
};

export default Performance;