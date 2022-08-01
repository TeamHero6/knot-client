import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Hrdashboard.css'

const Hrdashboard = () => {
    const [requests,setRequest]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=>res.json())
        .then(data=>setRequest(data))
    },[]);
    console.log(requests);
    return (
        <div>
            <div className='flex border-b border-gray-600'>
                <div className='gray w-56 p-4'>
                    <h2 className='text-2xl font-bold dash_color'>HR Management</h2>
                </div>
                <div>

                </div>
            </div>

            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* employee Database Section */}
                    <div className='pt-5'>
                        <h1 className='text-2xl text-center font-bold'>Employee Database</h1>
                        <div className='grid grid-cols-3 gap-5 mt-5 p-5'>
                            <div className='gray pb-3'>
                                <div class="w-24 h-24 rounded-full bg-white mx-auto text-center pt-3 mt-4 border-4 border-indigo-500/100">
                                    <span className='font-medium'>Total
                                        Employees
                                        20</span>
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
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Dept</th>
                                        <th>Designation</th>
                                        <th>Leave Date</th>
                                        <th>Reason For Leave</th>
                                        <th>Leave Request</th>
                                        <th>Approval</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                        requests.map(request => 
                            <tr>
                                        <th>{request.id}</th>
                                        <td>{request.Name}</td>
                                        <td>{request.dep}</td>
                                        <td>{request.Designation}</td>
                                        <td>{request.e_date}</td>
                                        <td>{request.leave}</td>
                                        <td>{request.leave_date}</td>
                                        <td>Not</td>
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
                                        <th>Due Date
                                            & Time</th>
                                        <th>Department.
                                            Name</th>
                                        <th>Designation</th>
                                        <th>Today Task</th>
                                        <th>Assign By</th>
                                        <th>Task Status</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th>12.Jul.22 <br />
                                        08.00PM</th>
                                        <td>12.Jul.22 <br />
                                        08.00PM</td>
                                        <td>Sales</td>
                                        <td>Jr. Executive</td>
                                        <td>Ui Design</td>
                                        <td>Jamal Leader Of Sales</td>
                                        <td>Doing</td>
                                    </tr>
                                    <tr>
                                        <th>12.Jul.22 <br />
                                        08.00PM</th>
                                        <td>12.Jul.22 <br />
                                        08.00PM</td>
                                        <td>Sales</td>
                                        <td>Jr. Executive</td>
                                        <td>Ui Design</td>
                                        <td>Jamal Leader Of Sales</td>
                                        <td>Doing</td>
                                    </tr>
                                    <tr>
                                        <th>12.Jul.22 <br />
                                        08.00PM</th>
                                        <td>12.Jul.22 <br />
                                        08.00PM</td>
                                        <td>Sales</td>
                                        <td>Jr. Executive</td>
                                        <td>Ui Design</td>
                                        <td>Jamal Leader Of Sales</td>
                                        <td>Doing</td>
                                    </tr>
                                    <tr>
                                        <th>12.Jul.22 <br />
                                        08.00PM</th>
                                        <td>12.Jul.22 <br />
                                        08.00PM</td>
                                        <td>Sales</td>
                                        <td>Jr. Executive</td>
                                        <td>Ui Design</td>
                                        <td>Jamal Leader Of Sales</td>
                                        <td>Doing</td>
                                    </tr>
                                    
                                </tbody>

                            </table>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-56 text-base-content gray">
                        <li><Link className='font-bold' to="/hrDashboard">DashBoard</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Hrdashboard;