import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillSave } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { toast } from "react-toastify";

const Applicant = () => {
    const [shows, setShows] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        fetch("https://knot-business-solution-server.herokuapp.com/applicant", {
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
                    toast.success("add Vacancy");
                }
            });
    };

    return (
        <div>
            <button
                onClick={() => setShows(!shows)}
                className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600  hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
            >
                <span>
                    <BiPlus></BiPlus>
                </span>
                <span className="capita<input  requiredlize">Applicant</span>
            </button>
            {shows ? (
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <section className="lg:w-full mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto">
                            <div className="flex flex-row gap-5">
                                <input
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Applicant_Name")}
                                    id=""
                                    placeholder="Applicant Name"
                                />
                            </div>
                            <div className="flex flex-row gap-5">
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Job_Title")}
                                    id=""
                                    placeholder="Job Title"
                                />
                                <input
                                    className="py-2 pl-3 w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Position")}
                                    id=""
                                    placeholder="Position"
                                />
                            </div>

                            <div className="flex flex-row gap-5">
                                <input
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="date"
                                    {...register("Last_Date_Apply")}
                                    id=""
                                    placeholder="Last Date for Apply"
                                />
                            </div>
                            <div className="flex flex-row gap-5">
                                <input
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="date"
                                    {...register("Employee_Applyed_Date")}
                                    id=""
                                    placeholder="Employee Applyed Date"
                                />
                            </div>
                            <div className="flex flex-row gap-5">
                                <textarea
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Good_Side_Applicant")}
                                    id=""
                                    placeholder="Good Side of Applicant"
                                />
                            </div>
                            <div className="flex flex-row gap-5">
                                <textarea
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Lack_Employee")}
                                    id=""
                                    placeholder="Lack to Employee"
                                />
                            </div>
                            <div className="flex flex-row gap-5">
                                <input
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="date"
                                    {...register("Interview_Date")}
                                    id=""
                                    placeholder="Interview Date & Time"
                                />
                            </div>
                            <div className="flex flex-row gap-5">
                                <input
                                    className="py-2 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none "
                                    type="text"
                                    {...register("Meeting_Link")}
                                    id=""
                                    placeholder="Meeting Link"
                                />
                            </div>

                            <div className="lg:flex justify-between md:flex pt-2">
                                <button
                                    className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1  hover: shadow-blue-300 hover: shadow-sm"
                                    type="subimt"
                                >
                                    <AiFillSave />
                                    Save
                                </button>
                            </div>
                        </section>
                    </form>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Applicant;
