import React from 'react';
import { AiFillSave } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import { BsSaveFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';

const FormSample = () => {
    return (
        <div className='py-20'>
            <section className='lg:w-6/12 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto'>
                <label className='font-bold text-purple-800' htmlFor="name">Employee Info</label> <br />
                <input className='py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none' type="text" name="name" id="" placeholder='Employee Name' /> <br />
                <div className='flex flex-row gap-5'>
                    <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="email" name="email" id="" placeholder='Employee ID' />    
                    <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none' type="email" name="email" id="" placeholder='Employee ID' />
                </div>
                <div className='flex gap-5'>
                    <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none' type="email" name="email" id="" placeholder='Employee ID' />
                    <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none' type="email" name="email" id="" placeholder='Employee ID' />
                </div>
            </section>
            <section className='lg:w-6/12 bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 mx-auto md:w-9/12 sm:w-11/12 sm:mx-auto'>
                <div className='flex justify-between gap-5'>
                    <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none' type="date" name="date" id="" placeholder='Date' />
                    <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none' type="datetime-local" name="" id="" />
                </div>
                <div className='flex justify-between gap-5'>
                    <select className='w-6/12 pl-3 py-2 border border-gray-300 bg-slate-50 rounded outline-none'>
                        <option className='text-gray-400' disabled selected>Type Of Leave</option>
                        <option className='text-green-400'>Approve</option>
                        <option className='text-red-600'>Reject</option>
                    </select>
                    <select className='w-6/12 pl-3 border border-gray-300 bg-slate-50 rounded outline-none'>
                        <option className='text-gray-400' disabled selected>Type Of Leave</option>
                        <option>Casual leave</option>
                        <option>Sick leave</option>
                        <option>Annual leave</option>
                    </select>
                </div>
            </section>
            <section className='lg:w-6/12 bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 mx-auto md:w-9/12 sm:w-11/12 sm:mx-auto'>
                <label className='font-bold text-purple-800' htmlFor="name">Button</label> <br />
                <div className='lg:flex justify-between md:flex '>
                    <button className='flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm'><AiFillSave />Save</button> <br />
                    <button className='flex items-center gap-2 bg-green-400	 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-green-400 hover:outline-1 hover:border hover:border-green-400 hover: shadow-green-200 hover: shadow-sm'><AiFillEdit />Edit</button> <br />
                    <button className='flex items-center gap-2 bg-red-600	 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-red-600 hover:outline-1 hover:border hover:border-red-600 hover: shadow-red-400 hover: shadow-sm'><AiFillDelete /></button> <br />
                    <button className='flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm'><BsSaveFill /><input type="submit" value="Submit" /></button>
                </div>
            </section>
        </div>
    );
};

export default FormSample;