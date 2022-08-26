import React from 'react';
import { toast } from "react-toastify";

const HRCircularCard = (props) => {
    const { Job_Publish_Date, Last_Date_Apply, Job_Title, Location, Position, Salary_Range, Number_openings, About_the_job, _id } = props.circular

    const handaldelete = (id) => {
        const url = `https://knot-business-solution-server.herokuapp.com/vacancy/${id}`;
        fetch(url, { method: "DELETE" })
            .then((res) => res.json())
            .then((data) => {
                toast.warning("Delete circular");
            });
    };
    return (
        <div className='bg-white w-1/2 shadow-gray-300 px-5 py-5 rounded-md shadow-sm'>
            <div className='flex justify-between'>
                <div>Publish Date: <small>{Job_Publish_Date}</small></div>
                <button
                className='text-red-600 font-bold'
                    onClick={() =>
                        handaldelete(_id)
                    }
                >
                    {" "}
                    Cancel{" "}
                </button>
            </div>

            <p className='text-lg font-bold'>Job Title: {Job_Title}</p>
            <p>Location: {Location}</p>
            <p>Designation: {Position}</p>
            <p>Vacancy: {Number_openings}</p>
            <p>Salary Range: {Salary_Range}</p>
            <p><span className='font-semibold'>Job Description:</span> <small>{About_the_job}</small></p>
            Last Date of Apply: <small className='italic text-gray-500 font-bold'>{Last_Date_Apply}</small>

        </div>
    );
};

export default HRCircularCard;