import React, { useEffect, useState } from 'react';
import { BiSave } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import profile from '../../../Assets/icons/Live-chat-icon/profile_user.png'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import './Hrdashboard.css'


const Dashboard = ({users}) => {
    console.log(users)
    
    const { register, handleSubmit, reset } = useForm();
    
    const [requests, setRequest] = useState([]);
    const [allTask, setAlltask] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setRequest(data))
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/alltasks')
            .then(res => res.json())
            .then(data => setAlltask(data))
    }, []);

    // const approvalupdate= (event) => {
    //     const status=event.target.value;
    //     console.log(status);
    //   }

    const onSubmit = data => {
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success("Save change")
                }
            })

    }

    return (
        <div>
            {/* employee Database Section */}
            <div className='pt-5'>
                <h1 className='text-2xl text-center font-bold'>Employee Database</h1>
                <div className='grid grid-cols-3 gap-5 mt-5 p-5'>
                    <div className='gray pb-3'>
                        <div class="w-24 h-24 rounded-full bg-white mx-auto text-center pt-3 mt-4 border-4 border-indigo-500/100">
                            <span className='font-medium'>Total
                                Employees
                                12</span>
                        </div>
                        <h3 className='text-center font-medium pt-3'>Employee By Gender</h3>
                    </div>
                    <div className='gray pb-3'>
                        <div class="w-24 h-24 rounded-full bg-white mx-auto text-center pt-3 mt-4 border-4 border-indigo-500/100">
                            <span className='font-medium'>HR <br /> 8</span>
                        </div>
                        <h3 className='text-center font-medium pt-3'>Employee By Department</h3>
                    </div>
                    <div className='gray pb-3'>
                        <div class="w-24 h-24 rounded-full bg-white mx-auto text-center pt-3 mt-4 border-4 border-indigo-500/100">
                            <span className='font-medium'>CEO <br />1</span>
                        </div>
                        <h3 className='text-center font-medium pt-3'>Employee By Designation</h3>
                    </div>

                </div>
            </div>

            {/* Leave Requst Section */}

            <div className='px-5'>
                <h1 className='text-2xl text-center font-bold my-5'>Leave Request</h1>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Dept</th>
                                <th>type of leave</th>
                                <th>Leave Request Date</th>
                                <th>view details</th>
                                <th>approval status hr</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                requests.map(request =>
                                    <tr>
                                        {/* {console.log(request)} */}
                                        <th>{request.Date}</th>
                                        <td>{request.id}</td>
                                        <td>{request.Name}</td>
                                        <td>{request.dep}</td>
                                        
                                        <td>{request.leave_type}</td>
                                        <td>{request.e_date}</td>
                                        <td>
                                        <label for={request.Name} class="modal-button">
                                            <AiOutlineEye className='text-2xl '></AiOutlineEye>
                                        </label>
                                        <input type="checkbox" id={request.Name} class="modal-toggle" />
                                            <div class="modal">
                                                <div class="modal-box">
                                                    <div>
                                                        <div className='flex items-center mb-5'>
                                                            <img className='w-28' src={profile} alt="" />
                                                            <div className='ml-5'>
                                                                <h2 className='text-2xl capitalize'>{request.Name}</h2>
                                                                <span className='uppercase'>{request.dep}</span>
                    
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h1 className='text-xl border-b-2 border-yellow-500 capitalize mb-3'>Details info</h1>
                                                            <div>
                                                            <p><span className='font-medium capitalize'>Date: </span>{request.Name}</p>
                                                            <p><span className='font-medium capitalize'>Employee ID: </span>{request.id}</p>
                                                            <p><span className='font-medium capitalize'>type of leave: </span>{request.leave_type}</p>
                                                            <p><span className='font-medium capitalize'>Leave request Date: </span>{request.e_date}</p>

                                                            </div>
                                                            
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="modal-action">
                                                        <label for={request.Name} class="btn btn-warning">Cancel</label>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </td>

                                        <td>
                                        <form  onSubmit={handleSubmit(onSubmit)}>
                                        <select {...register("approval")} >
                                                <option value="approbal_statas">approval statas</option>
                                                <option value="Approve">Approve</option>
                                                <option value="Reject">Reject</option>
                                            </select>
                                            <button type="submit" className='ml-3'> <BiSave></BiSave></button>
                                        </form>
                                           
                                        </td>
                                    </tr>
                                )
                            }
                        
                                                    

                        </tbody>

                    </table>
                </div>
            </div>

            {/* Daily Task Overview Section */}
            <div className='px-5'>
                <h1 className='text-2xl text-center font-bold my-5'>Daily Task Overview</h1>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Assign Date
                                    & Time</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>view details</th>
                                <th>Task Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                allTask.map(task =>
                                    <tr>
                                        <th>{task.DueDate}</th>
                                        <td>{task.name}</td>
                                        <td>{task.department}</td>
                                        <td>
                                        <label for={task._id} class="modal-button">
                                            <AiOutlineEye className='text-2xl '></AiOutlineEye>
                                        </label>
                                        <input type="checkbox" id={task._id} class="modal-toggle" />
                                            <div class="modal">
                                                <div class="modal-box">
                                                    <div>
                                                        <div className='flex items-center mb-5'>
                                                            <img className='w-28' src={profile} alt="" />
                                                            <div className='ml-5'>
                                                                <h2 className='text-2xl capitalize'>{task.name}</h2>
                                                                <span className='uppercase'>{task.department}</span>
                    
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h1 className='text-xl border-b-2 border-yellow-500 capitalize mb-3'>Details info</h1>
                                                            <div>
                                                            <p><span className='font-medium capitalize'> Assign Date: </span>{task.DueDate}</p>
                                                            <p><span className='font-medium capitalize'>Name: </span>{task.name}</p>
                                                            <p><span className='font-medium capitalize'>Task: </span>{task.task}</p>
                                                            <p><span className='font-medium capitalize'>Task status: </span></p>

                                                            </div>
                                                            
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="modal-action">
                                                        <label for={task._id} class="btn btn-warning">Cancel</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <select>
                                                <option value="To Do"> To Do</option>
                                                <option value="Doing">Doing</option>
                                                <option value="Done">Done</option>
                                            </select>
                                            <button className='ml-3 '><BiSave></BiSave></button>

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

export default Dashboard;