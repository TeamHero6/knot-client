import React from 'react';

const UserAttaindance = () => {
    return (
        <div className='flex mt-5'>
            <div className='mx-5'>
                <div className='bg-[#EEEEEE] p-5 rounded-lg'>
                    <h1 className='text-[#0182BE] text-2xl font-semibold'>TimeSheet</h1>
                    <p>Today</p>
                    <p>Start Time : </p>
                    <p>End Time : </p>
                    <p>Working Hour : </p>
                    <p>Dew Working Hour : </p>
                    <p>Over Time : </p>
                </div>
                <div className='mt-16'>
                    <h1 className='text-[#0182BE] text-2xl font-semibold'>Total Tracked</h1>
                    <div class="overflow-x-auto">
                        <table class="table w-full">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                    <th>Total Working Hour</th>
                                    <th>Over Time</th>
                                    <th>Last 7 Days <br />Total Working Hour</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='mt-16'>
                    <h1 className='text-[#0182BE] text-2xl font-semibold'>Your Action</h1>
                </div>
            </div>
            <div className='w-11/12'>
                <h1 className='text-[#0182BE] text-2xl font-semibold'>Time Tracking</h1>
                <div className='flex justify-evenly mt-10 mb-20'>
                    <h1 className='bg-[#0182BE] p-6 rounded-full text-white'>Start</h1>
                    <h1 className='bg-[#0182BE] p-6 rounded-full text-white'>End</h1>
                </div>
                <hr />
                <div className='mt-16'>
                    <h1 className='text-[#0182BE] text-2xl font-semibold'>Your Action</h1>
                </div>
            </div>
        </div>
    );
};

export default UserAttaindance;