import React, { useState } from 'react';
import { AiFillSave } from 'react-icons/ai';


const LiveChat = () => {
    const [department, setDepartment] = useState()

    const handelMakeUser = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const employeeID = event.target.employeeID.value

        const chatUser = { name, email, department, employeeID }

        // console.log(chatUser);

        fetch('http://localhost:5000/chatuser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(chatUser)
        })
            .then(res => res.json())
            .then((data) => {
                event.target.reset()
            })
    }

    return (
        <div>
            <form onSubmit={handelMakeUser} className='lg:w-6/12 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto'>
                <label className='font-bold text-purple-800' htmlFor="name">Create Chat User</label> <br />
                <div className='flex flex-row gap-5'>
                    <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text" name="name" id="" placeholder='User Name' />
                    <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none' type="email" name="email" id="" placeholder='Email' />
                </div>
                <div className='flex gap-5'>
                    <select value={department} onChange={event => setDepartment(event.target.value)} className='w-6/12 pl-3 py-2 border border-gray-300 bg-slate-50 rounded outline-none'>
                        <option disabled selected>Department Name</option>
                        <option>HR</option>
                        <option>Finance</option>
                        <option>Sales</option>
                        <option>Team Management</option>
                        <option>Marketing</option>
                    </select>
                    <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none' type="text" name="employeeID" id="" placeholder='Employee ID' />
                </div>
                <div className='pt-2'>
                    <button className='flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm'><AiFillSave />Save</button>
                </div>

            </form>
            
        </div>
    );
};

export default LiveChat;