import React, { useEffect, useState } from 'react';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { BsSave2 } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';

const EmployeesOrganize = () => {

    const [warning,setWarning] = useState([]);
    const [award, setAward] = useState([]);
   
    useEffect(() => {
        fetch('http://localhost:5000/warning')
            .then(res => res.json())
            .then(data => setWarning(data))
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/award')
            .then(res => res.json())
            .then(data => setAward(data))
    }, []);
    return (
        <div>
            <div className='px-5'>
                <h1 className='text-xl  my-5'>Team Members Warning Database</h1>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead className='border-b border-gray-600'>
                            <tr>
                                <th>Date
                                    <select className='bg-transparent'>
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                    </select>
                                </th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <th>Warning Date</th>
                                <th>Team Member Name</th>
                                <th>Reason of Warning</th>
                                <th>Warning Type</th>
                                <th>Team Member Feedback</th>
                                <th>Save Change</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                warning.map(w =>
                                    <tr>
                                        <th>{w.warningDate}</th>
                                        <td>{w.name}</td>
                                        <td className='flex items-center'>
                                           
                                            <p className='pl-2'>{w.warningReason
} </p>
                                        </td>


                                        
                                        <td>
                                           {w.type}
                                        </td>
                                        <td className='flex items-center'>
                                            <textarea rows="" cols=""></textarea>
                                        </td>
                                        <td className='text-center text-blue-600 '>
                                            <div className='w-10 mx-auto'>
                                            <BsSave2></BsSave2>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }


                        </tbody>

                    </table>
                </div>
            </div>
            <div className='px-5'>
                <h1 className='text-xl  my-5 '>Team Member Award Database</h1>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead className='border-b border-gray-600'>
                            <tr>
                                <th>Date
                                    <select className='bg-transparent'>
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                    </select>
                                </th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <th>Award Date</th>
                                <th>Team Member Name</th>
                                <th>Type Of Award</th>
                                <th>Leader Feedback</th>
                                <th>Save Change</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                award.map(a =>
                                    <tr>
                                        <th>{a.awardDate}</th>
                                        <td>{a.name}</td>
                                        <td>
                                            {a.awardType}
                                        </td>
                                       


                                        <td>
                                            <textarea rows="" cols=""></textarea>
                                        </td>
                                        
                                        <td className='text-center text-blue-600 '>
                                            <div className='w-10 mx-auto'>
                                            <BsSave2></BsSave2>
                                            </div>
                                        </td>
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

export default EmployeesOrganize;