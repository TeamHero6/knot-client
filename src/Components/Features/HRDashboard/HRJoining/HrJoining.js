import React, { useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useForm } from "react-hook-form";
import { AiFillSave } from 'react-icons/ai';
import { toast } from "react-toastify";
import HRTrainingCard from './HRTrainingCard';

const HrJoining = () => {
    const { register, handleSubmit, reset } = useForm();
    const [showTraining, setShowTraining] = useState(false);
    const [Trainnig, setTrainnig] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(
            "https://knot-business-solution-server.herokuapp.com/employeedetails"
        )
            .then((res) => res.json())
            .then((data) => setDetails(data));
    }, [details]);
    console.log(details);

    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/Trainnig")
            .then((res) => res.json())
            .then((data) => setTrainnig(data));
    }, [Trainnig]);
    // console.log(Trainnig);


    const onSubmitTraining = (data) => {
        fetch("https://knot-business-solution-server.herokuapp.com/Trainnig", {
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
                    toast.success("Training Assign");
                }
            });
    };
    return (
        <div>
            <div className="ml-5">
                <div className="flex gap-5">
                    <button
                        onClick={() => setShowTraining(!showTraining)}
                        className="flex items-center gap-2 bg-blue-500 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-blue-500 hover:outline-1 hover:border hover:border-blue-500 hover: shadow-green-200 hover: shadow-sm"
                    >
                        <IoIosAddCircleOutline className="text-2xl" />
                        Assign Training
                    </button>{" "}
                </div>
                {showTraining ? (
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmitTraining)}>
                            <section className="lg:w-3/5 mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto">
                                <div className="flex flex-row gap-5">
                                    <select
                                        required
                                        {...register("Employee_Name")}
                                        name="Employee_Name"
                                        id=""
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                    >
                                        <option value="" selected disabled>
                                            Select Employee
                                        </option>
                                        {details.map((d) => (
                                            <option
                                                key={d._id}
                                                value={
                                                    d.Employee_Name
                                                }
                                            >
                                                {d.Employee_Name}
                                            </option>
                                        ))}
                                    </select>

                                    <select
                                        required
                                        name="customerName"
                                        {...register("Department")}
                                        id=""
                                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                                    >
                                        <option value="" selected disabled>
                                            Select Department
                                        </option>
                                        <option value="Human Resources">
                                            Human Resources
                                        </option>
                                        <option value="Sales">
                                            Sales
                                        </option>
                                        <option value="Marketing">
                                            Marketing
                                        </option>
                                        <option value="Finance">
                                            Finance
                                        </option>
                                    </select>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Employee_id")}
                                        id=""
                                        placeholder="Employee ID"
                                    />
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Designation")}
                                        id=""
                                        placeholder="Designation"
                                    />
                                </div>

                                <div className="flex flex-row items-center gap-5">
                                    <label
                                        className="font-bold w-40"
                                        htmlFor="name"
                                    >
                                        Date :{" "}
                                    </label>{" "}
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="date"
                                        {...register("Start_Time")}
                                        id=""
                                        placeholder="Start Date & Time"
                                    />
                                    To
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="date"
                                        {...register("End_Time")}
                                        id=""
                                        placeholder="End Date & Time"
                                    />
                                </div>

                                <h2 className="text-lg font-bold my-2">
                                    Trainer Details
                                </h2>
                                <div className="flex flex-row gap-5">

                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("name")}
                                        id=""
                                        placeholder="Name"
                                    />
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="number"
                                        {...register("Contact_Number")}
                                        id=""
                                        placeholder="Contact Number"
                                    />
                                </div>

                                <div>
                                    <input
                                        className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                        type="text"
                                        {...register("Training_Location")}
                                        id=""
                                        placeholder="Training Location"
                                    />
                                </div>

                                <div className="flex justify-center mt-2">
                                    <button
                                        type="submit"
                                        className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                                    >
                                        <AiFillSave />
                                        Assign
                                    </button>{" "}
                                    <br />
                                </div>
                            </section>
                        </form>
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div className=' px-3 py-3'>
                <h1 className='font-semibold text-blue-500 text-xl mb-4 ml-5'>New Employee Training Database</h1>

                <div className='grid grid-rows-2 grid-flow-col gap-5'>
                    {
                        Trainnig.slice(0, 20).map(training => <HRTrainingCard
                            training={training}
                        ></HRTrainingCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HrJoining;