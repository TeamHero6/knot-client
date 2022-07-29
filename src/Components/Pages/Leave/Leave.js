import React, { useState } from 'react';
import HRNavbar from '../../Shared/HRNavbar/HRNavbar';
import LeaveRequest from '../Leave/LeaveRequest/LeaveRequest';

const Leave = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <HRNavbar></HRNavbar>
            {/* <div className='flex justify-between'>
                <div className='bg-[#EEEEEE] text-[#0182BE]'>
                    <h1 className='md:text-3xl px-3 md:px-12 py-4'>HR Management</h1>
                </div>
                <div className='flex py-4'>
                    <p className='md:text-xl flex justify-center'><AiFillClockCircle className='m-1 text-[#0182BE]'></AiFillClockCircle>8:20PM</p>
                    <p className='md:mx-20 mx-4 md:text-xl'>user name</p>
                </div>
            </div> */}
            <hr />
            <div>
                <div class="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content">
                        <label onClick={() => setShow(!show)} for="my-drawer" class="btn btn-xs bg-[#0182be] mt-5 ml-3 md:ml-5 drawer-button">Request</label>
                        <div className='flex flex-col'>
                            {
                                show ? <div className='ml-3 md:ml-5'>
                                    <p className='text-xl text-[#0182BE]'>Leave Request</p>
                                    <div className='md:flex'>
                                        <table>
                                            <tr>
                                                <td>Employee Names : </td>
                                                <td>Auto fill up</td>
                                            </tr>
                                            <tr>
                                                <td>Designation : </td>
                                                <td>Auto fill up</td>
                                            </tr>
                                            <tr>
                                                <td>Reason for leave : </td>
                                                <td>Auto fill up</td>
                                            </tr>
                                            <tr>
                                                <td>Leave Permit</td>
                                            </tr>
                                            <tr>
                                                <td>Name : </td>
                                                <td>Auto fill up</td>
                                            </tr>
                                            <tr>
                                                <td>Employee ID : </td>
                                                <td>Auto fill up</td>
                                            </tr>
                                        </table>
                                        <div className='md:ml-32'>
                                            <table>
                                                <tr>
                                                    <td>Department Name : </td>
                                                    <td>Auto fill up</td>
                                                </tr>
                                                <tr>
                                                    <td>Leave Request Date : </td>
                                                    <td>Auto fill up</td>
                                                </tr>
                                            </table>
                                            <table className='mt-20'>
                                                <tr>
                                                    <td>Department : </td>
                                                    <td><p className='ml-3'>Auto fill up</p></td>
                                                </tr>
                                            </table>
                                            <table>
                                                <tr>
                                                    <td>Designation : </td>
                                                    <td><p className='ml-3'>Auto fill up</p></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div className='md:flex my-4'>
                                        <p>Approval : <input className='border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:mr-16' type="text" /></p>
                                        <p>ID : <input className='border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] mt-2 md:mt-0' type="text" /></p>
                                    </div>
                                    <button className='text-xl block mx-auto bg-[#EEEEEE] border-2 border-[#0182BE] rounded-md px-5'>Save</button>
                                </div> : ''
                            }
                            <LeaveRequest></LeaveRequest>
                        </div>

                    </div>
                    {/* <div class="drawer-side bg-[#EEEEEE]">
                        <label for="my-drawer-2" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                            <li><a>Employee Self Service</a></li>
                            <li><a>Leave Request</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Leave;