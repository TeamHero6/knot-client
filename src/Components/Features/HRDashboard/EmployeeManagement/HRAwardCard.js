import React from 'react';

const HRAwardCard = (props) => {
    const {AwardDate, awardTitle, successMessage, employeeEmail} =props.award
    return (
        <div className='bg-white shadow-gray-300 px-5 py-3 rounded-md shadow-sm'>
            <p><span className='font-semibold'>Email:</span> {employeeEmail}</p>
            <p className='font-semibold font-xl'>{awardTitle}</p>
            <p><span className='font-semibold'>Appreciate:</span> <small className='italic'>{successMessage}</small></p>
            <p className='text-right italic '><span>Date:</span> <small className='text-gray-400'>{AwardDate}</small></p>
        </div>
    );
};

export default HRAwardCard;