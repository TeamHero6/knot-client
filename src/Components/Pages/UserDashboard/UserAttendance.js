import moment from 'moment';
import React, { useEffect, useState } from 'react';
import UserAttendanceCard from './UserAttendanceCard';
import UserReportModal from './UserReportModal';

const UserAttendance = () => {
    const [attendance, setAttendance] = useState([]);
    const [singleAttendance, setSingleAttendance] = useState({});



    useEffect(() => {
        fetch("http://localhost:5000/attendance")
            .then((res) => res.json())
            .then((data) => setAttendance(data.reverse()));
    }, [attendance]);

    // console.log(attendance);
    const handleJoinOffice = (e) => {
        e.preventDefault();
        const startTime = e.target.startTime.value;
        const startDate = e.target.startDate.value;

        const Attendance = { startDate, startTime };
        // console.log(Attendance);

        fetch("http://localhost:5000/attendance", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(Attendance),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    e.target.reset();
                }
            });
    };

    return (
        <div>
            <div className='lg:w-6/12 mx-20 mb-5 bg-white shadow-gray-300 border shadow-md rounded py-6 px-6 mt-5 md:w-9/12 sm:w-11/12 sm:mx-auto'>
                <div className='w-full'>
                    <h1 className='text-xl text-center font-semibold'>Time Tracking</h1>
                    <div className='mt-5 flex justify-center'>
                        <form onSubmit={handleJoinOffice}>
                            <input
                                type="hidden"
                                name="startTime"
                                id=""
                                value={moment().format('LT')}
                            />
                            <input
                                type="hidden"
                                name="startDate"
                                id=""
                                value={moment().format('ll')}
                            />
                            <button className='bg-green-500 text-white px-8 py-2 mr-2'>Start</button>
                        </form>
                        {attendance.slice(0, 1).map((attend) => (
                            <tr
                                key={attend._id}
                            >
                                <td className="py-3 px-6 pr-10 whitespace-nowrap">
                                    <label
                                        for="attend-details-modal"
                                        onClick={() =>
                                            setSingleAttendance(attend)
                                        }
                                    >
                                        <span className='cursor-pointer text-green-500 px-2 py-3'>
                                            Task Report
                                        </span>
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </div>
                </div>
            </div>

            <div className='lg:w-full flex gap-5 bg-white shadow-gray-300 border shadow-md rounded py-6 px-6 mt-5 md:w-9/12 sm:w-11/12 sm:mx-auto'>

                {
                    attendance.slice(0, 20).map(attend => <UserAttendanceCard
                        attend={attend}
                    ></UserAttendanceCard>)
                }

            </div>

            <UserReportModal
                singleAttendance={singleAttendance}
            ></UserReportModal>
        </div>
    );
};

export default UserAttendance;