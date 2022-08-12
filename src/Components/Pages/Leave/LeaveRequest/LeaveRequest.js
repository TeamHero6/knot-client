import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSave } from "react-icons/fa";
import { toast } from "react-toastify";
import Award from "../Award";
import Meeting from "../Meeting";
import Warming from "../Warming";
import { BiPlus } from 'react-icons/bi';
import { AiOutlineEye } from "react-icons/ai";

const LeaveRequest = () => {
    const [userinfo, setUserinfo] = useState([]);
    const [leave, setleave] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/leaveData")
            .then((res) => res.json())
            .then((data) => setUserinfo(data));
    }, []);

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch("http://localhost:5000/user")
            .then((res) => res.json())
            .then((data) => setleave(data));
    }, []);
    const onSubmit = (data) => {
        fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((inserted) => {
                if (inserted.insertedId) {
                    reset();
                    toast.success("Add succesfully");
                }
            });
    };
    // console.log(userinfo)
    return (
        <div>
            <section>
                <label for="my-drawer" class="btn btn-xs bg-[#0182be] mt-5 ml-3 md:ml-5 drawer-button border-none">
                    <span><BiPlus></BiPlus></span>
                    <span className='capitalize'> New</span>

                </label>
                <h1 className='text-[#0182be] ml-3 my-3 text-xl'>Leave Request:</h1>
                <div className='ml-3 '>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-2'>
                            {/* ff */}
                            <div>
                                <div className='flex items-center'>
                                    <label className="label w-48">
                                        <span className="label-text text-xl">Date :</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                        {...register("Date")}
                                    />


                                </div>
                                <div className='flex items-center'>
                                    <label className="label w-48">
                                        <span className="label-text text-xl">Employees Name :</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                        {...register("Name")}
                                    />


                                </div>
                                <div className='flex items-center'>
                                    <label className="label w-48">
                                        <span className="label-text text-xl">Employees ID:</span>
                                    </label>
                                    <input
                                        type="text"
                                        className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                        {...register("id")}
                                    />


                                </div>
                                <div className='flex items-center'>
                                    <label className="label w-48">
                                        <span className="label-text text-xl">Designation:</span>
                                    </label>
                                    <input
                                        type="text"
                                        className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                        {...register("Designation")}
                                    />


                                </div>
                                <div className='flex items-center'>
                                    <label className="label w-48">
                                        <span className="label-text text-xl">Reason For Leave:</span>
                                    </label>
                                    <textarea
                                        type="text"
                                        className=" w-64 h-20 pl-5 rounded-lg border-solid border border-[#0182be] "
                                        {...register("leave")}
                                    />


                                </div>


                            </div>

                            {/* ff */}
                            <div>
                                <div className='flex items-center'>
                                    <label className="label w-48">
                                        <span className="label-text text-xl">Depertment:</span>
                                    </label>
                                    <input
                                        type="text"
                                        className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                        {...register("dep_id")}
                                    />


                                </div>
                                <div className='flex items-center'>
                                    <label className="label w-48">
                                        <span className="label-text text-xl">Start Date:</span>
                                    </label>
                                    <input
                                        type="text"
                                        className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                        {...register("s_date")}
                                    />


                                </div>
                                <div className='flex items-center'>
                                    <label className="label w-48">
                                        <span className="label-text text-xl">End Date:</span>
                                    </label>
                                    <input
                                        type="text"
                                        className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                        {...register("e_date")}
                                    />


                                </div>
                                <div className='flex items-center'>
                                    <label className="label w-48">
                                        <span className="label-text text-xl">Type Of Leave:</span>
                                    </label>

                                    <div className='mt-5'>

                                        <input {...register("leave_type")} type="radio" value="Casual leave" />
                                        <span className='px-3  text-xl'>Casual leave</span>
                                        <br />
                                        <input {...register("leave_type")} type="radio" value="Sick leave" />
                                        <span className='px-3  text-xl'>Sick leave</span>
                                        <br />
                                        <input {...register("leave_type")} type="radio" value="Annual leave" />
                                        <span className='px-3  text-xl'>Annual leave</span>
                                    </div>



                                </div>
                            </div>
                        </div>



                        <div className='flex items-center bg-[#EEEEEE]  w-24 p-2 rounded-lg mx-auto border-solid border border-[#0182be] mt-5'>
                            <FaSave></FaSave>
                            <input className='pl-2 font-medium' type="submit" />
                        </div>

                    </form>

                </div>
                <div className='px-5'>
                    <h1 className='text-2xl text-center font-bold my-5'>Request Status</h1>
                    <div class="overflow-x-auto">
                        <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                            <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                                <tr>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">Date</th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">Id</th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">Name</th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">Department</th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">View Details</th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">Approval Status <br />
                                        (HR) </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    leave.map(le =>
                                        <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                            <td className="py-3 px-6 whitespace-nowrap">{le.Date}</td>
                                            <td className="py-3 px-6 whitespace-nowrap">{le.id}</td>
                                            <td className="py-3 px-6 whitespace-nowrap">{le.Name}</td>
                                            <td className="py-3 px-6 whitespace-nowrap">{le.dep}</td>
                                            <td className="py-3 px-6 whitespace-nowrap">
                                                <div>
                                                    <label for={le._id} class=" modal-button"><AiOutlineEye></AiOutlineEye></label>
                                                    <input type="checkbox" id={le._id} class="modal-toggle" />
                                                    <div class="modal modal-bottom sm:modal-middle">
                                                        <div class="modal-box">
                                                            <h3 class="font-bold text-lg">Leave Request Information!</h3>
                                                            <p>Date : {le.Date}</p>
                                                            <p>Name : {le.Name}</p>
                                                            <p>Employee ID : {le.id}</p>
                                                            <p>Designation : {le.Designation}</p>
                                                            <p>Reason For Leave : {le.leave}</p>
                                                            <p>Department : {le.dep}</p>
                                                            <p>Start Date : {le.s_date}</p>
                                                            <p>End Date : {le.e_date}</p>
                                                            <p>Type Of Leave : {le.leave_type}</p>
                                                            <div class="modal-action">
                                                                <label for={le._id} class="btn bg-[#0182BE]">Close!</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 whitespace-nowrap">{le.leave_type}</td>
                                        </tr>
                                    )
                                }


                            </tbody>

                        </table>
                    </div>
                </div>
            </section>
            <Meeting />
            <Warming />
            <Award />
        </div>
    );
};

export default LeaveRequest;