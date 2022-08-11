import React, { useState } from 'react';
import useUserInfo from './hooks/useUserInfo';
import {Link, useNavigate } from 'react-router-dom';


const UserLogin = () => {
    const [userInfo] = useUserInfo()
    console.log(userInfo);
    const [department, setDepartment] = useState()
    const [name, setName] = useState()

    const navigate = useNavigate()
    const handelLoginUser = event => {
        event.preventDefault()
        const email = event.target.email.value
        const employeeID = event.target.employeeID.value

        const loginUser = { name, email, department, employeeID }

        // console.log(loginUser);

        fetch('http://localhost:5000/loginuser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loginUser)
        })
            .then(res => res.json())
            .then((data) => {
                navigate('/hrchat')
                event.target.reset()
            })
    }

    return (
        <div>
            <section className='lg:w-6/12 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto'>
                <label className='font-bold text-purple-800' htmlFor="name">Login</label> <br />
                <div className=' gap-5'>
                    <select value={name} onChange={event => setName(event.target.value)} className='mt-5 w-8/12 pl-3 border h-11 border-gray-300 bg-slate-50 rounded outline-none'>
                        <option className=' text-gray-400' disabled selected>User Name</option>
                        {
                            userInfo.map(user => <option>
                                {user.name}
                            </option>)
                        }

                    </select> <br />
                    <input className='py-2 pl-3 w-8/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none' type="text" name="email" id="" placeholder='Email' /><br />
                    <input className='py-2 pl-3 w-8/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none' type="text" name="employeeID" id="" placeholder='Employee ID' />
                </div>
                
                <div className='pt-2'>
                    <button className='flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm'><Link to='/hrchat'>Login</Link></button>
                </div>
            </section>
        </div>
    );
};

export default UserLogin;


