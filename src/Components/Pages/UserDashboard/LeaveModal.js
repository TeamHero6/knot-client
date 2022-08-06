import React, { useEffect, useState } from 'react';

const LeaveModal = ({le}) => {

    const detailsButton = le => {
        console.log(le)
        // return <div id="my-modal-6" class="modal-toggle">
        //     <input type="checkbox" />
        //     <div class="modal modal-bottom sm:modal-middle">
        //         <div class="modal-box">
        //             <h3 class="font-bold text-lg">Leave Request Info</h3>
        //             <p>Date : {le.Date}</p>
        //             <p>Employee Name : {le.Name}</p>
        //             <p>Employee Id : {le.id}</p>
        //             <p>Department  : {le.dep}</p>
        //             <p>Designation : {le.Designation}</p>
        //             <p>Reason For Leave : {le.leave}</p>
        //             <p>Start Date : {le.s_date}</p>
        //             <p>End Date : {le.e_date}</p>
        //             <div class="modal-action">
        //                 <label for="my-modal-6" class="btn">Close!</label>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    }
    
    return (
        <div>
        <label onClick={() => detailsButton(le)} for="my-modal" class="btn modal-button">Details</label>
        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Leave Request Info</h3>
                <p>Date : {le.Date}</p>
                <p>Employee Name : {le.Name}</p>
                <p>Employee Id : {le.id}</p>
                <p>Department  : {le.dep}</p>
                <p>Designation : {le.Designation}</p>
                <p>Reason For Leave : {le.leave}</p>
                <p>Start Date : {le.s_date}</p>
                <p>End Date : {le.e_date}</p>
                <div class="modal-action">
                    <label for="my-modal" class="btn">Close!</label>
                </div>
            </div>
        </div>
    </div>
    );
};

export default LeaveModal;