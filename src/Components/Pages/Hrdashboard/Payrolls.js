import React, { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';
import { useForm } from "react-hook-form";

const Payrolls = () => {
    
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
     
        
    };
    return (
        <div>
           <label for="my-drawer" class="btn btn-xs bg-[#0182be] mt-5 ml-3 md:ml-5 drawer-button border-none">
                        <span><BiPlus></BiPlus></span>
                        <span className='capitalize'> Payrolls</span>

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
                                            <span className="label-text text-xl">Payroll Type:</span>
                                        </label>
                                        <select className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] ">
                                            <option value=""></option>
                                            <option value="Salary">Salary</option>
                                            <option value="House_Rent">House Rent</option>
                                            <option value="Hospitali_Bill">Hospitali Bill</option>
                                            <option value="Internet_Bill">Internet Bill</option>
                                            <option value="KPI">KPI</option>
                                            <option value="Overtime">Overtime</option>
                                            <option value="TA/DA">TA/DA</option>
                                            <option value="Lunch_Bill">Lunch Bill</option>
                                            <option value="Phone_Bill">Phone Bill</option>
                                        </select>


                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Payment Date:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Payment_Date")}
                                        />


                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Pay Amount:</span>
                                        </label>
                                        <select className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] ">
                                            <option value=""></option>
                                            <option value="unpaid">unpaid</option>
                                            <option value="paid">paid</option>
                                        </select>


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
                                            <span className="label-text text-xl">Payable Amount: </span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Payable_Amount")}
                                        />


                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Pay Amount:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Pay_Amount")}
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
                                        <th>Employee ID</th>
                                        <th>Name</th>
                                        <th>Depertment</th>
                                        <th>Payrolls Amount Details</th>
                                        <th>Paid Amount</th>
                                        <th>Pament Date</th>
                                        <th>Payment Status</th>

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

export default Payrolls;