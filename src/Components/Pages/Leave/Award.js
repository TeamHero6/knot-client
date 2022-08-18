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
        <div className="my-10">
            <div class="overflow-x-auto">
                <h1 className='text-2xl text-center font-bold my-5'>Team Member Award Database</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        awards.map(award => (
                            <div class="px-4 py-2 w-80 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex items-center justify-between">
                                    <p className="my-2 font-semibold">{award.name}</p>
                                    {/* <div for={award._id} onClick={() => setAwardModal(award)} class=" modal-button"><span className='underline text-green-500 hover:font-medium'>Details</span></div> */}
                                </div>
                                <p><span className="font-semibold">Email :</span> {award.employeeEmail}</p>
                                <p>{award.awardTitle}</p>
                                <p className="card-actions justify-end text-green-500 font-semibold">{award.AwardDate}</p>
                            </div>
                        ))
                    }
                </div>
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
                            <label for={awardModal._id} className='flex ml-5 items-center gap-2 bg-red-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-red-400 hover:outline-1 hover:border hover:border-red-400 hover: shadow-red-200 hover: shadow-sm'>Close!</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Award;