import React from 'react';
import { toast } from "react-toastify";

import profile from '../../../../Assets/icons/higer.png';

const HRCircularCard = (props) => {
    const { Job_Publish_Date, Last_Date_Apply, Job_Title, Location, Position, Salary_Range, About_the_job, _id } = props.circular

    const handaldelete = (id) => {
        const url = `https://knot-business-solution-server.herokuapp.com/vacancy/${id}`;
        fetch(url, { method: "DELETE" })
            .then((res) => res.json())
            .then((data) => {
                toast.warning("Delete circular");
            });
    };
    return (
        <div className='bg-white  shadow-gray-300 px-5 py-5 rounded-md shadow-sm hover:shadow-md hover:bg-cyan-100  duration-500 cursor-pointer border-b border-cyan-100'>

            <div className='flex justify-between mb-5'>
                <div>
                    <span><small>{Job_Publish_Date}</small></span>
                </div>
                <button
                    className='text-red-600 font-bold'
                    onClick={() =>
                        handaldelete(_id)
                    }
                >
                    ✕
                </button>
            </div>
            <div className='flex'>
                <div className='w-80'>
                    <h1 className='text-2xl font-bold text-blue-800'>{Job_Title}</h1>
                    <p>{Position}</p>
                    <div className='leading-6'>
                        <p className="mt-8"><span className='font-medium'>Description:</span> {About_the_job}</p>
                        <p><span className='font-medium'>Salary Range:</span> {Salary_Range} Tk</p>
                        <p><span className='font-medium'>Location:</span> {Location}</p>
                        <p><span className='font-medium'>Last Date Apply:</span> {Last_Date_Apply}</p>

                    </div>
                </div>
                <div>
                    <img className='w-64' src={profile} alt="" />
                </div>
            </div>

        </div>
    );
};

export default HRCircularCard;