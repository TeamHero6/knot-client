import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { ImLocation2 } from "react-icons/im";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";

const HRTrainingCard = (props) => {
    const { Department, Employee_Name, Employee_id, Designation, Start_Time, End_Time, name, Contact_Number, Training_Location } = props.training
    return (
        <div className='bg-white  w-full shadow-gray-300 px-5 py-5 rounded-md shadow-sm bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-md hover:bg-cyan-100  duration-500 cursor-pointer border-b border-cyan-100'>
            <BsFillLightningChargeFill className='text-white text-4xl'></BsFillLightningChargeFill>
            <div className='flex gap-5'>
                <div className='text-white my-3'>
                    <p className='flex items-center '> <CgProfile className='text-white mr-3'></CgProfile> {Employee_Name} </p>
                    <p className='flex items-center '> <ImLocation2 className='text-white mr-3'></ImLocation2> {Training_Location} </p>

                </div>
                <div className='text-white my-3'>
                    <p className='flex items-center '> <BsFillPersonCheckFill className='text-white mr-3'></BsFillPersonCheckFill> {Department} </p>
                    <p className='flex items-center '> <BsReverseLayoutTextWindowReverse className='text-white mr-3'></BsReverseLayoutTextWindowReverse> {Employee_id} </p>
                </div>
            </div>

            <div className='flex flex-row-reverse'>
                <BsFillLightningChargeFill className='text-center text-white text-4xl'></BsFillLightningChargeFill>
            </div>



        </div>
    );
};

export default HRTrainingCard;