<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useEffect, useState } from 'react';
import { AiOutlineEye } from "react-icons/ai";
>>>>>>> 968b9fbbac261c932cdad216b506b7eca7842b7b

const Award = () => {
    const [awards, setAwards] = useState([]);

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/award")
            .then((res) => res.json())
            .then((data) => setAwards(data));
    }, []);

    return (
        <div className="flex my-10">
            <div class="overflow-x-auto w-3/5">
                <h1 className="text-xl mb-3">Team Member Award Database</h1>
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Award Date</th>
                            <th>Team Member Name</th>
                            <th>Department</th>
                            <th>Leader Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
<<<<<<< HEAD
                        {awards?.map((award) => (
                            <tr>
                                <th>{award.awardDate}</th>
                                <td>{award.name}</td>
                                <td>{award.awardType}</td>
                                <td>status</td>
                            </tr>
                        ))}
=======
                        {
                            awards?.map(award =>
                                <tr>
                                    <th>{award.awardDate}</th>
                                    <td>{award.name}</td>
                                    <td>{award.department}</td>
                                    <td>
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
>>>>>>> 968b9fbbac261c932cdad216b506b7eca7842b7b
                    </tbody>
                </table>
            </div>
            <div className="mx-5">
                <h1 className="text-xl mb-3">Training Details</h1>
                <div className="bg-[#EEEEEE] rounded">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Training Date <br /> and Time
                                </th>
                                <th>Trainer Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>18-july-2022 10:00 PM</td>
                                <td>
                                    Name : <br /> Designation{" "}
                                </td>
                                <td>
                                    Department : <br /> Contact Number :{" "}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Award;
