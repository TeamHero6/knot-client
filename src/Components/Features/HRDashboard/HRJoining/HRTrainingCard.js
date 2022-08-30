import React from 'react';

const HRTrainingCard = (props) => {
    const { Department, Employee_Name, Employee_id, Email, Start_Time, End_Time, name, Contact_Number, Training_Location } = props.training
    return (
        <div className='bg-white w-full shadow-gray-300 px-5 py-5 rounded-md shadow-sm'>

            <div className='flex justify-center'>
                <div className='w-1/2'>
                    <p>Department: {Department}</p>
                </div>
                <div className='w-1/2'>
                    <p>Email: {Email}</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='w-1/2'>
                    <p>Name: {Employee_Name}</p>
                </div>
                <div className='w-1/2'>
                    <p>ID: <small className='italic '>{Employee_id}</small></p>
                </div>
            </div>
            Training Date: {Start_Time} To {End_Time}
            <p className='font-bold my-2 text-blue-500'>Trainer Details</p>
            <p>Trainer name: {name}</p>
            <p>Contact Number: {Contact_Number}</p>
            <p>Location: {Training_Location}</p>


        </div>
    );
};

export default HRTrainingCard;