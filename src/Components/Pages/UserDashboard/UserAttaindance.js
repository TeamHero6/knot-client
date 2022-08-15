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
                        <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden w-full">
                            <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                                <tr>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">Date</th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">Start Time</th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">End Time</th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">Total Working Hour</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                    <td className="py-3 px-6 whitespace-nowrap">1</td>
                                    <td className="py-3 px-6 whitespace-nowrap">Cy Ganderton</td>
                                    <td className="py-3 px-6 whitespace-nowrap">Quality Control Specialist</td>
                                    <td className="py-3 px-6 whitespace-nowrap">Blue</td>
                                </tr>
                                <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                    <td className="py-3 px-6 whitespace-nowrap">2</td>
                                    <td className="py-3 px-6 whitespace-nowrap">Hart Hagerty</td>
                                    <td className="py-3 px-6 whitespace-nowrap">Desktop Support Technician</td>
                                    <td className="py-3 px-6 whitespace-nowrap">Purple</td>
                                </tr>
                                <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                    <td className="py-3 px-6 whitespace-nowrap">3</td>
                                    <td className="py-3 px-6 whitespace-nowrap">Brice Swyre</td>
                                    <td className="py-3 px-6 whitespace-nowrap">Tax Accountant</td>
                                    <td className="py-3 px-6 whitespace-nowrap">Red</td>
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
                    <button className='flex ml-5 items-center gap-2 bg-green-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-green-400 hover:outline-1 hover:border hover:border-green-400 hover: shadow-green-200 hover: shadow-sm'>Start</button>
                    <button className='flex ml-5 items-center gap-2 bg-red-500 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-red-500 hover:outline-1 hover:border hover:border-red-500 hover: shadow-green-200 hover: shadow-sm'>End</button>
                </div>
                <hr />
                {/* <div className='mt-16'>
                    <h1 className='text-[#0182BE] text-2xl font-semibold'>Your Action</h1>
                </div> */}
            </div>
        </div>
    );
};

export default UserAttaindance;