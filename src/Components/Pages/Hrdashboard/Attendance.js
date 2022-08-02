import React, { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FiEye } from 'react-icons/fi';

const Attendance = () => {
    return (
        <div>
            <h3 className='text-[#0182be] text-2xl p-5'>Employee Attendance</h3>
                    <div className='mx-auto w-4/5 rounded-lg my-5 '>
                        <div class="overflow-x-auto">
                            <table class="table table-compact w-full">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Start Time</th>
                                        <th>End Time</th>
                                        <th>Total Working Hour</th>
                                        <th>Over Time</th>
                                        <th>Employee Details</th>

                                    </tr>
                                </thead>
                                <tbody>
                                            <tr>
                                                <th>Habib ullha</th>
                                                <th>2512</th>
                                                <th>Sales</th>
                                                <th>Sales</th>
                                                <th>Sales</th>
                                                <th className='text-[#0182be]'><CgProfile></CgProfile></th>
                                            </tr>
                                            <tr>
                                                <th>Habib ullha</th>
                                                <th>2512</th>
                                                <th>Sales</th>
                                                <th className='text-[#0182be]'><FiEye></FiEye></th>
                                            </tr>
                                        


                                </tbody>

                            </table>
                        </div>
                    </div>
        </div>
    );
};

export default Attendance;