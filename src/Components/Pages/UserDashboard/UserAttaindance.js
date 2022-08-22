import React from 'react';

const UserAttaindance = () => {
    return (
        <div>
            <div className='lg:w-full mx-20 flex justify-around bg-white shadow-gray-300 border shadow-md rounded py-6 px-6 mt-5 md:w-9/12 sm:w-11/12 sm:mx-auto'>
                <div className='w-2/4'>
                    <h1 className=''>TimeSheet</h1>
                    <p>Today</p>
                    <p>Start Time : </p>
                    <p>End Time : </p>
                    <p>Working Hour : </p>
                    <p>Over Time : </p>
                </div>
                <div className='w-2/4'>
                    <h1 className=''>Time Tracking</h1>
                    <div className='flex justify-evenly mt-10 mb-20'>
                        <button className='flex ml-5 items-center gap-2 bg-green-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-green-400 hover:outline-1 hover:border hover:border-green-400 hover: shadow-green-200 hover: shadow-sm'>Start</button>
                        <button className='flex ml-5 items-center gap-2 bg-red-500 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-red-500 hover:outline-1 hover:border hover:border-red-500 hover: shadow-green-200 hover: shadow-sm'>End</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserAttaindance;