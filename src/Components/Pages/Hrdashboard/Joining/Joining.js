import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { AiFillSave } from 'react-icons/ai';
import Assigntranning from './Assigntranning';
import { toast } from "react-toastify";

const Joining = () => {

    const { register, handleSubmit, reset } = useForm();
    const [joining, setJoining] = useState([]);
    // const [employinfo, setEmployinfo] = useState({});
    useEffect(() => {
        fetch("http://localhost:5000/joining")
            .then((res) => res.json())
            .then((data) => setJoining(data));
    }, [joining]);

    const onSubmit = data => {
        fetch("http://localhost:5000/joining", {
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
                    toast.success("add New employee");
                }
            });


    };
    return (
        <div>
            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <section className='lg:w-11/12 lg:mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto'>

                        <div className='flex flex-row gap-5'>
                            <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"  {...register("Name")} id="" placeholder='Employee Name' />

                            <input className='py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none ' type="text"  {...register("Depertment")} id="" placeholder='Depertment' />
                        </div>

                        <div className='lg:flex justify-between md:flex pt-2'>
                            <button className='flex  border-transparent items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover: shadow-blue-300 hover: shadow-sm' type='subimt'><AiFillSave />Add New Employee</button>
                        </div>
                    </section>
                </form>
            </div>
            <div className='my-5'>
                <h3 className='text-[#0182be] text-2xl'>Joining Information</h3>
                <div className='mx-auto w-full rounded-lg my-3 '>
                    <div className="rounded-none">
                        <table className="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-12 text-base overflow-hidden">
                            <thead className='text-white bg-cyan-500 border-b border-cyan-100'>
                                <tr>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">Employee Name</th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">Department</th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">Joining Date</th>
                                    <th className="py-3 text-left px-6 whitespace-nowrap">View</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    joining.map(j => <tr className='hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100'>
                                        <td className="py-3 px-6 whitespace-nowrap">{j.Name}</td>
                                        <td className="py-3 px-6 whitespace-nowrap">{j.Depertment}</td>
                                        <td className="py-3 px-6 whitespace-nowrap">{j.joinig_date}</td>
                                        <td className='text-[#0182be]  text-center'>
                                            <button>Details</button>
                                        </td>
                                    </tr>)
                                }

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <Assigntranning></Assigntranning>
        </div>
    );
};

export default Joining;