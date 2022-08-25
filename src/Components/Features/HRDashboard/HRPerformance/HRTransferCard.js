import React from 'react';

const HRTransferCard = (props) => {
    const { Department, Employee_ID, Location, Name, Team_Leader } = props.transfer
    return (
        <div className='bg-white w-full shadow-gray-300 px-5 py-5 rounded-md shadow-sm'>
            <p><span className='font-semibold'>Name:</span> {Name} </p>
            <p><span className='font-semibold'>Employee ID:</span> <small className='font-semibold'> {Employee_ID}</small></p>
            <p><span className='font-semibold'>Department:</span> {Department}</p>
            <p><span className='font-semibold'>New Location:</span> {Location}</p>
            <p><span className='font-semibold'>New Team Leader:</span> {Team_Leader}</p>

        </div>
    );
};

export default HRTransferCard;