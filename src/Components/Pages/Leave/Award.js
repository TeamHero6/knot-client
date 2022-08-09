import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";

const Award = () => {
    const [awards, setAwards] = useState([]);

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
                                            <label for={award._id} class=" modal-button"><AiOutlineEye></AiOutlineEye></label>
                                            <input type="checkbox" id={award._id} class="modal-toggle" />
                                            <div class="modal modal-bottom sm:modal-middle">
                                                <div class="modal-box">
                                                    <h3 class="font-bold text-lg">Award Information!</h3>
                                                    <p>Date : {award.awardDate}</p>
                                                    <p>Name : {award.name}</p>
                                                    <p>Employee ID : {award.employeeID}</p>
                                                    <p>Department  : {award.department}</p>
                                                    <p>Designation : {award.designation}</p>
                                                    <p>Award Providing Date : {award.awardProvidingDate}</p>
                                                    <p>Award Type : {award.awardType}</p>
                                                    <div class="modal-action">
                                                        <label for={award._id} class="btn bg-[#0182BE]">Close!</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
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
