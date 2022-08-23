import React, { useEffect, useState } from "react";
import Training from "./Training";

const Warming = () => {
    const [warnings, setWarnings] = useState([]);
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/warnings")
            .then((res) => res.json())
            .then((data) => setWarnings(data));
    }, []);

    useEffect(() => {
        fetch("http://localhost:5000/Trainnig")
            .then((res) => res.json())
            .then((data) => setTrainings(data.reverse()));
    }, []);

    return (
        <div className="my-10">
            <div class="overflow-x-auto mx-5">
                <h1 className='text-2xl text-center font-bold mt-5 mb-2'>Team Members Warning Database</h1>
                <div className="h-80 overflow-x-auto">
                    <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto text-base overflow-hidden">
                        <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                            <tr>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Warning <br /> Date</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Name</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Warning <br /> Type</th>
                                <th className="py-3 text-left px-6 whitespace-nowrap">Reason For <br /> Warning</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                warnings?.map(warning =>
                                    <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                        <td className="py-3 px-6 whitespace-nowrap">{warning.warningDate}</td>
                                        <td className="py-3 px-6 whitespace-nowrap">Name</td>
                                        <td className="py-3 px-6 whitespace-nowrap">{warning.type}</td>
                                        <td className="py-3 px-6 whitespace-nowrap">{warning.warningReason}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mx-5">
                <h1 className='text-2xl text-center font-bold mt-5 mb-2'>Training Details</h1>
                <Training></Training>
                {/* <div className="grid grid-cols-2 gap-4">
                    {
                        trainings.slice(0, 4).map(training => (
                            <div class="px-4 py-2 w-60 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex items-center justify-between">
                                    <p className="my-2 font-semibold">{training.Applicant_Name}</p>
                                    <label for={training._id}><span className='modal-button underline text-green-500 hover:font-medium'>Details</span></label>
                                    <input type="checkbox" id={training._id} class="modal-toggle" />
                                    <div class="modal modal-bottom sm:modal-middle">
                                        <div class="modal-box">
                                            <h3 class="font-bold text-lg">Award Information!</h3>
                                            <p>Name : {training.Applicant_Name}</p>
                                            <p>Depertment : {training.Depertment}</p>
                                            <p>Duration : {training.Tranning_Duration}</p>
                                            <p>Designation  : {training.Designation}</p>
                                            <p>Location : {training.Taining_Location}</p>
                                            <p>Start Time : {training.Start_Time}</p>
                                            <p>End Time : {training.End_Time}</p>
                                            <p>Topic : {training.name}</p>
                                            <p>Contact Number : {training.Contact_Number}</p>
                                            <div class="modal-action">
                                                <label for={training._id} className='flex ml-5 items-center gap-2 bg-red-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-red-400 hover:outline-1 hover:border hover:border-red-400 hover: shadow-red-200 hover: shadow-sm'>Close!</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>{training.Depertment} Dept.</p>
                                <p>topic : {training.name}</p>
                                <p className="card-actions justify-end text-green-500">{training.Tranning_Duration}</p>
                            </div>
                        ))
                    }
                </div> */}

            </div>
        </div>
    );
};

export default Warming;