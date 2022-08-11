import React, { useEffect, useState } from "react";

const Award = () => {
    const [awards, setAwards] = useState([]);
    const [awardModal, setAwardModal] = useState({});

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/award")
            .then((res) => res.json())
            .then((data) => setAwards(data));
    }, []);

    return (
        <div className="lg:flex my-10">
            <div class="overflow-x-auto lg:w-3/5 w-full">
                <h1 className='text-2xl text-center font-bold mt-5'>Team Member Award Database</h1>
                <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                    <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                        <tr>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Award Date</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Team Member Name</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Department</th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">Leader Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            awards?.map(award =>
                                <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                    <td className="py-3 px-6 whitespace-nowrap">{award.awardDate}</td>
                                    <td className="py-3 px-6 whitespace-nowrap">{award.name}</td>
                                    <td className="py-3 px-6 whitespace-nowrap">{award.department}</td>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <div>
                                            <label for={award._id} onClick={()=> setAwardModal(award)} class=" modal-button"><span className='underline hover:text-blue-500 hover:font-medium'>Details</span></label>

                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <input type="checkbox" id={awardModal._id} class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Award Information!</h3>
                        <p>Date : {awardModal.awardDate}</p>
                        <p>Name : {awardModal.name}</p>
                        <p>Employee ID : {awardModal.employeeID}</p>
                        <p>Department  : {awardModal.department}</p>
                        <p>Designation : {awardModal.designation}</p>
                        <p>Award Providing Date : {awardModal.awardProvidingDate}</p>
                        <p>Award Type : {awardModal.awardType}</p>
                        <div class="modal-action">
                            <label for={awardModal._id} class="btn bg-[#0182BE]">Close!</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-5">
                <h1 className='text-2xl text-center font-bold mt-5'>Training Details</h1>
                <div className="bg-[#EEEEEE] rounded">
                    <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                        <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Training Date <br /> and Time</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Trainer Details</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Trainer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                <td className="py-3 px-6 whitespace-nowrap">18-july-2022 10:00 PM</td>
                                <td className="py-3 px-6 whitespace-nowrap"> Name : <br /> Designation{" "}</td>
                                <td className="py-3 px-6 whitespace-nowrap">Department : <br /> Contact Number :{" "}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Award;
